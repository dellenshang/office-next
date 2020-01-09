<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-happytime colored"></Icon>
            {{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox">
          <Button
            type="primary"
            size="large"
            icon="md-done-all"
            @click="confirm"
            >承認</Button
          >
          <Button type="error" size="large" icon="md-hand" @click="beforeDeny"
            >否認</Button
          >
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
      <div class="searchwrap">
        <span class="label">キーワード</span>
        <Input
          @on-search="getData"
          class="mar like-select"
          v-model="opts.keyword"
          placeholder="社員名或はコード"
          search
          enter-button
        />
        <span style="flex:1"></span>
      </div>
    </div>
    <div class="content_body">
      <div class="table-top">
        <Row :gutter="16">
          <Col span="24" class="text-right">
            <Page
              :total="amount"
              :current="pageValue.curPage"
              show-total
              show-sizer
              :page-size="pageValue.curSize"
              :page-size-opts="pageValue.list"
              @on-change="pageChange"
              @on-page-size-change="sizeChange"
              ref="Page"
            />
          </Col>
        </Row>
      </div>
      <ApplyConfirmTable :data="tableData" :loading="loading" ref="table" />
      <Modal
        v-model="isShow"
        title="否認理由付け"
        :footer-hide="true"
        :mask-closable="false"
        width="800"
      >
        <Alert class="primary-info">否認理由付けなくてもいいです。</Alert>
        <Alert type="error" class="error-info" v-if="errorInfo"
          >拒否理由の長さは１００位までに入力してください。</Alert
        >
        <ul class="apply-history-list">
          <li
            class="with-dot ing"
            v-for="(item, index) of denyData"
            :key="index"
          >
            <Row>
              <!-- 申请休假的时间的显示 -->
              <Col span="6" style="margin-left: 4.5%" class="title">{{
                $refs.table.handleApplyDayShow(item.dateList)
              }}</Col>
              <!-- 承认者-状态-承认者-状态-流的展示, 状态为取消时，不显示 -->
              <Col span="6" style="margin-left: 2.5%" class="title">
                {{ item.empName }}
              </Col>
            </Row>
            <Row>
              <Col
                span="12"
                style="font-weight:bold;margin-left: 4.5%"
                :class="item.typeId === 1 ? 'description' : 'description with-mark'"
                >{{ item.restTypeName }}</Col
              >
            </Row>
            <Row>
              <Col
                span="20"
                style="margin-left: 4.5%"
                class="description light-grey"
                >{{ item.remark }}</Col
              >
            </Row>
            <Row>
              <Col span="20" style="margin-left: 4.5%" class="description red"
                ><Input
                  class="non-border-input"
                  v-model="item.remara"
                  placeholder="拒否理由"
              /></Col>
            </Row>
          </li>
        </ul>
        <div class="my-footer">
          <Button type="text" @click="cancel">キャンセル</Button>
          <Button type="error" @click="deny">否認</Button>
        </div>
      </Modal>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
.header {
  justify-content: flex-start;
}
.primary-info {
  color: $theme-blue;
  font-weight: bold;
  border: $primary-border;
}
.error-info {
  color: $red;
  font-weight: bold;
  border: $error-border;
}
.non-border-input /deep/input {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $theme-blue;
  box-shadow: none;
  color: $login-input;
  font-weight: bold;
  &::placeholder {
    font-weight: normal;
    color: $label-blue;
  }
}
.apply-history-list {
  background: linear-gradient(to bottom, #ccc 80%, transparent 100%) no-repeat
    left 19px top 15px/1px 100%;
  text-align: left;
  position: relative;
  right: -32px;
  max-height: 60vh;
  overflow-y: scroll;
  color: $grey;
  .title {
    font-size: 15px;
    font-weight: bold;
  }
  .description {
    font-size: 14px;
    word-break: break-word;
    &.with-mark:after {
      content: '有';
      position: relative;
      top: -1px;
      font-weight: normal;
      font-size: 13px;
      color: $theme-blue;
      background-color: $light-blue;
      box-shadow: 0px 1px 2px 0px $box-shadow;
      margin-left: 5px;
      padding: 1px 3px;
      border-radius: 50%;
    }
  }
  .with-dot {
    &::before {
      display: block;
      content: '';
      position: relative;
      left: 12px;
      top: 19px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      box-shadow: 0 0 0 4px $light-blue;
      background: $success-background;
    }
    &.ing::before {
      background-color: $success-background;
    }
    &:hover::before {
      animation: twinkleBluepot 1s ease infinite alternate;
    }
  }
}
@keyframes twinkleBluepot {
  from {
    box-shadow: 0 0 0 4px $light-blue;
  }
  50% {
    box-shadow: 0 0 4px 7px $light-blue;
  }
  to {
    box-shadow: 0 0 0 4px $light-blue;
  }
}
.my-footer {
  text-align: right;
  position: relative;
  right: 1rem;
  margin-top: 20px;
}
/deep/.like-select {
  width: 15%;
  top: 0;
  .ivu-input-group-append {
    background: $table-head !important;
    border: none;
    &:hover {
      background: $theme-blue !important;
    }
  }
}
/deep/.ivu-modal-body {
  overflow-x: hidden;
  padding: 0 0 16px 0;
}
</style>

<script>
import { mapState } from 'vuex'
import { Debounce } from '@/api/utils'
import ApplyConfirmTable from './Tables/ApplyConfirmTable'
import Buttons from '../../Buttons'
export default {
  name: 'ApplyConfirm',
  components: {
    ApplyConfirmTable,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      loading: false,
      amount: 0,
      isShow: false,
      denyData: [],
      columns: [
        {
          title: '申請者',
          slot: 'empName',
          minWidth: 100,
          maxWidth: 200
        },
        {
          title: '休暇種類',
          key: 'restTypeName',
          tooltip: true,
          minWidth: 60,
          maxWidth: 180
        },
        {
          title: '対象日',
          slot: 'dateList',
          minWidth: 190,
          maxWidth: 200
        },
        {
          title: '否認理由',
          slot: 'remark'
        }
      ],
      tableData: [],
      errorInfo: false,
      pageValue: {
        curPage: 1,
        list: [20, 30, 50, 100],
        curSize: this.utils.getStorage('SO_userSettings', 'pageSize') || 20
      },
      opts: {
        sidx: 'create_time',
        order: 'desc',
        status: 0,
        page: null,
        keyword: null,
        limit: this.utils.getStorage('SO_userSettings', 'pageSize') || 20
      }
    }
  },
  created() {
    this.getData()
  },
  computed: {
    ...mapState(['user']),
    empId() {
      return this.user.userInfo.empInfo
        ? this.user.userInfo.empInfo.empId
        : null
    }
  },
  methods: {
    getData: Debounce(async function() {
      try {
        this.loading = true
        const { data } = await this.api.apply('applyHistory', this.opts)
        this.tableData = this.disableCheckbox(data.list, this.empId)
        this.amount = data.totalCount
      } catch (error) {
      } finally {
        this.loading = false
      }
    }),
    disableCheckbox(arr, empId) {
      // 处于申请状态的那个人不是自己的话，禁止承认（checkbox无法勾选）
      return arr.map(e => {
        if (e.progressList.find(e => e.status === 0).id !== empId) {
          return { ...e, _disabled: true }
        } else {
          return e
        }
      })
    },
    confirm: Debounce(async function() {
      const value = this.$refs.table.$refs.tableData.getSelection().map(e => {
        return { applyId: e.applyId, pass: true }
      })
      if (value.length === 0) {
        return this.$Message.warning('少なくとも、一つの項目を選んでください。')
      }
      try {
        await this.api.apply('approve', value)
        this.$Message.success('承認完了')
      } catch (error) {
      } finally {
        this.getData()
      }
    }),
    beforeDeny: Debounce(async function() {
      this.denyData = this.$refs.table.$refs.tableData.getSelection()
      if (this.denyData.length === 0) {
        return this.$Message.warning('少なくとも、一つの項目を選んでください。')
      }
      this.isShow = true
    }),
    async deny() {
      const value = this.denyData.map(e => {
        return { applyId: e.applyId, pass: false, remark: e.remara }
      })
      const flag = value.some(e => e.remark && e.remark.length > 100)
      if (flag) {
        return (this.errorInfo = true)
      } else {
        this.errorInfo = false
      }
      try {
        await this.api.apply('approve', value)
        this.isShow = false
        this.$Message.success('否認完了')
      } catch (error) {
      } finally {
        this.getData()
      }
    },
    cancel() {
      this.isShow = false
    },
    onRefresh() {
      this.opts.keyword = null
      this.$refs.Page.currentPage = 1
      this.getData()
      this.$Message.success('再表示完了')
    },
    pageChange(e) {
      this.opts.page = e
      this.pageValue.curPage = e
      this.getData()
    },
    sizeChange(e) {
      this.opts.limit = e
      this.pageValue.curSize = e
      this.utils.setStorage('SO_userSettings', { pageSize: e })
      this.getData()
    }
  }
}
</script>
