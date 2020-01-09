<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-emeer colored"></Icon>
            {{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox">
          <RadioGroup v-model="batch">
            <Radio :label="1" class="custom-radio">所属配分</Radio>
            <Radio :label="2" class="custom-radio">有休配分</Radio>
            <Radio :label="3" class="custom-radio">承認者配分</Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="searchwrap">
        <span class="label">{{searchLabel1}}</span>
        <Cascader
          v-model="searchLevel"
          class="mr10"
          style="width: 200px;"
          :data="data"
          :render-format="handleCascaderView"
          filterable
          change-on-select
          @on-visible-change="handleSearch"
          v-if="batch === 1"
        ></Cascader>
        <Select
          style="width: 200px;"
          v-model="modeId"
          v-if="batch === 2"
          @on-change="handlePaidVactionSearch"
        >
          <Option
            v-for="item of paidVactionModeList"
            :value="item.modeId"
            :key="item.modeId"
            :label="item.name"
          >
            {{`${item.name}`}}
            <span style="float:right;color:#ccc">{{handleprePaidSelectView(item)}}</span>
          </Option>
        </Select>
        <Select
          v-if="batch === 3"
          style="flex:.9"
          v-model="approveIdList"
          @on-open-change="handleLeaderSearch"
          multiple
          filterable
        >
          <Option v-for="item in leaderList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <strong class="apply-discription">{{ batch === 3 ? '承認フローは選べた順になります' : ''}}</strong>
        <Button type="primary" ghost icon="md-refresh" @click="onRefresh">再表示</Button>
      </div>
    </div>
    <div class="content_body">
      <Transfer
        ref="transfer"
        v-loading="loading"
        :list-style="transferStyle"
        :data="transferDeptList"
        :titles="['配分可能社員', '配分した社員']"
        filter-placeholder="社員や所属名、或はコードを入力してください"
        :render-format="transferRenderFormat"
        :filter-method="handleFilterMethod"
        not-found-text="社員なし"
        :target-keys="transferTarget"
        filterable
        @on-change="handleTransfer"
      />
    </div>
  </Content>
</template>

<style lang="scss" scoped>
/deep/.ivu-transfer {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  .ivu-transfer-list {
    flex: 1;
  }
}
/deep/.ivu-transfer-list-content-item {
  font-size: 14px !important;
}
.custom-radio {
  padding: 8px 13px;
  border-radius: 28px;
  color: $grey;
  border: 1px solid #dcdee2;
  font-size: 14px;
  box-shadow: 5px 6px 2px 0px $light-grey;
  & /deep/.ivu-radio {
    display: none;
  }
  &.ivu-radio-wrapper-checked {
    color: $login-input-border-active;
    border-color: $login-input-border-active;
    box-shadow: 5px 6px 2px 0px $light-blue;
  }
}
/deep/.custom {
  background: $theme-blue;
  color: $white;
  &[disabled] {
    background: rgb(247, 247, 247);
    color: rgb(197, 200, 206);
  }
}
.apply-discription {
  flex: 1;
  text-align: left;
  margin-left: 25px;
  font-size: 14px;
}
</style>

<script>
import { mapState, mapActions } from 'vuex'
import { Debounce } from '@/api/utils'
import Buttons from '../../Buttons'
export default {
  name: 'BatchResolvation',
  components: {
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      filterName: '',
      loading: false,
      batch: 1,
      modeId: null,
      searchLevel: [],
      transferDeptList: [],
      approveIdList: [],
      searchLeaderId: [],
      transferTarget: [],
      transferStyle: {
        height: '72vh',
        'text-align': 'left'
      }
    }
  },
  async created() {
    this.getData()
  },
  computed: {
    ...mapState(['dept', 'happy', 'user']),
    data() {
      return this.dept.searchList
    },
    leaderList() {
      let result = []
      this.user.leaderList.forEach(e=> result = result.concat(e.children))
      return result
    },
    paidVactionModeList() {
      return this.happy.list
    },
    searchLabel1() {
      // 切换分配按钮时，重置搜索条件，targetkeys和已选中的目标
      if (this.$refs.transfer) {
        this.$set(this.$refs.transfer, 'leftCheckedKeys', [])
      }
      this.transferTarget = []
      this.searchLevel = []
      this.searchLeaderId = []
      this.fetchTransferUserList()
      if (this.batch === 1) {
        return '所属'
      }
      if (this.batch === 2) {
        return '有休'
      }
      return '承認者'
    }
  },
  mounted() {
    document.querySelectorAll('.ivu-transfer-operation .ivu-btn').forEach(e => {
      e.className = 'ivu-btn ivu-btn-small custom'
    })

    document
      .querySelectorAll('.ivu-transfer-operation .ivu-icon')
      .forEach(e => {
        if (e.className.indexOf('back') > -1) {
          e.className = 'ivu-icon ivu-icon-ios-arrow-forward'
        } else {
          e.className = 'ivu-icon ivu-icon-ios-arrow-back'
        }
      })
  },
  methods: {
    ...mapActions(['happy/Action_Happy_Get', 'user/Action_User_Leader_Get']),
    async getData() {
      this['happy/Action_Happy_Get']({ context: this })
      this['user/Action_User_Leader_Get']()
    },
    async fetchTransferUserList() {
      if (this.batch === 3) {
        const { data } = await this.api.user('view', { isLeader: false })
        this.transferDeptList = data
      } else {
        const { data } = await this.api.user('view')
        this.transferDeptList = data
      }
    },
    handleCascaderView(labels) {
      return labels[labels.length - 1]
    },
    // 三大下拉框search
    // 所属
    handleSearch(visibleStatus) {
      if (!visibleStatus) {
        this.$nextTick(async () => {
          const id = this.searchLevel[this.searchLevel.length - 1]
          if (id) {
            const { data } = await this.api.user('searchByDeptId', { id })
            this.transferTarget = data.map(e => e.key)
          }
        })
      }
    },
    // 承认流下员工
    async handleLeaderSearch(visibleStatus) {
      if (!visibleStatus) {
        const { data } = await this.api.user(
          'searchByLeaderId',
          this.approveIdList
        )
        this.transferTarget = data.map(e => e.key)
      }
    },
    // 有休
    async handlePaidVactionSearch() {
      const id = this.modeId
      if (!id) return
      const { data } = await this.api.user('searchByModeId', { id })
      this.transferTarget = data.map(e => e.key)
    },
    onRefresh() {
      Promise.all([this.getData(), this.fetchTransferUserList()]).then(() => {
        this.$Message.success('再表示完了')
      })
      this.searchLevel = []
      //   const value =  { empIdList:this.transferTarget, deptIdList:[this.searchLevel[this.searchLevel.length - 1]] }
      //   this.api.user('giveUserDeptByBatch',value)
    },
    handleTransfer: Debounce(function(targetKeys, direction, moveKeys) {
      let action = 1
      // 调整过穿梭框方向，left就是删除了
      if (direction === 'left') {
        action = 2
      }
      if (this.batch === 1) {
        return this.giveUserDeptByBatch(moveKeys, action, targetKeys)
      }
      if (this.batch === 2) {
        return this.giveUserPaidVactionByBatch(moveKeys, action, targetKeys)
      }
      if (this.batch === 3) {
        return this.giveUserLeaderByBatch(moveKeys, action, targetKeys)
      }
    }),
    giveUserDeptByBatch(moveKeys, action, targetKeys) {
      if (this.searchLevel.length !== 0) {
        const value = {
          empIdList: moveKeys,
          deptIdList: [this.searchLevel[this.searchLevel.length - 1]],
          action
        }
        this.api.user('giveUserDeptByBatch', value).then(() => {
          if (action === 1) {
            this.$Message.success('追加完了')
          } else {
            this.$Message.success('削除完了')
          }
          this.transferTarget = targetKeys
          this.fetchTransferUserList()
          this.$set(this.$refs.transfer, 'leftCheckedKeys', [])
        })
      } else {
        this.$Modal.warning({
          title: '注意',
          content: '所属を選んでください。'
        })
      }
    },
    giveUserPaidVactionByBatch(moveKeys, action, targetKeys) {
      if (this.modeId) {
        const value = { empIdList: moveKeys, modeId: this.modeId, action }
        this.api.happy('giveUserPaidVactionByBatch', value).then(() => {
          if (action === 1) {
            this.$Message.success('追加完了')
          } else {
            this.$Message.success('削除完了')
          }
          this.transferTarget = targetKeys
          this.fetchTransferUserList()
          this.$set(this.$refs.transfer, 'leftCheckedKeys', [])
        })
      } else {
        this.$Modal.warning({
          title: '注意',
          content: '有休を選んでください。'
        })
      }
    },
    async giveUserLeaderByBatch(moveKeys, action, targetKeys) {
      if (this.approveIdList && this.approveIdList.length > 0) {
        // 多级审批
        if (action === 1) {
          const findSame = this.approveIdList.some(e=> moveKeys.includes(e))
          const approveList = this.approveIdList.map((e, i) => {
            return {
              approveId: e,
              level: i + 1,
              required: true
            }
          })
          const value = { empIdList: moveKeys, approveList }
          await this.api.apply('giveUserLeaderByBatch', value)
          this.$Message.success('追加完了')
        } else {
          const deleteList = moveKeys.map((e, i) => {
            return {
              empId: e,
              approveList: this.approveIdList
            }
          })
          await this.api.apply('deleteUserLeaderByBatch', deleteList)
          this.$Message.success('削除完了')
        }
        this.transferTarget = targetKeys
        this.fetchTransferUserList()
        this.$set(this.$refs.transfer, 'leftCheckedKeys', [])
      } else {
        this.$Modal.warning({
          title: '注意',
          content: '承認者は少なくとも一人を選んでください。'
        })
      }
    },
    handleFilterMethod(data, query) {
      return (
        data.label.indexOf(query) > -1 ||
        data.code.indexOf(query) > -1 ||
        data.deptCodes.indexOf(query) > -1 ||
        data.deptNames.indexOf(query) > -1
      )
    },
    transferRenderFormat(e) {
      return `${e.code} ${e.label}`
    },
    handleprePaidSelectView(e) {
      if (e.modeType === 1) {
        if (e.standardDateConfigType === 1) {
          return `前倒し付与${e.prepaymentDays}日`
        }
        return `前倒し付与なし`
      }
      return `直接付与${e.prepaymentDays}日`
    }
  }
}
</script>
