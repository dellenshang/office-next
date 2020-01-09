<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-emeer colored"></Icon>{{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox">
          <!-- <UpdateBotton v-auth="['update']" @update="onUpdate"/> -->
          <Button type="primary" ghost>执行</Button>
          <Button type="success" ghost>恢复</Button>
          <Button type="warning" ghost>暂停</Button>
          <Button v-auth="['delete']" type="error" ghost>削除</Button>
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
    </div>
    <div class="content_body">
    <Row :gutter="16">
        <Col span="16">
              <div class="table-top">
        <Row :gutter="16">
          <Col span="12" class="text-left">
          <AutoTaskAdd
            v-auth="['add']"
            :isAdd="isAdd"
            ref="addData"
            @add="onAdd"
            key="forReset-1"
            v-if="forReset === true"
          />
          <AutoTaskAdd
            v-auth="['add']"
            :isAdd="isAdd"
            ref="addData"
            @add="onAdd"
            key="forReset-2"
            v-else
          />
           <Button type="primary" ghost>日志一览</Button>
          </Col>
          <Col span="12" class="text-right">
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
        <Table ref="tableData" border :columns="columns" v-loading="loading" :data="data">
          <template slot-scope="{ row , index }" slot="status">
            <span slot="open">{{row.status}}</span>
          </template>

          <template slot-scope="{ row , index }" slot="action">
            <Button type="primary" v-auth="['update']" ghost size="small" icon="ios-create" style="margin-right: 5px" @click="handleBtn(row)">訂正</Button>
          </template>

        </Table>
    <AutoTaskAdd v-auth="['update']" @update="onUpdate($event)" :isAdd="false" ref="updateData" v-if="forRest1 === true" key="forRest-3"/>
    <AutoTaskAdd v-auth="['update']" @update="onUpdate($event)" :isAdd="false" ref="updateData" v-else key="forRest-4"/>
        </Col>
        <Col span="8">
        <Card :title="title ? title : '未定義' " class="card" v-loading="cardLoading">
            <CellGroup class="text-left">
                <Cell title="JVMバージョン" :label="systemInfo['JVMバージョン']" />
                <Cell title="JVMメモリ" :extra="`${systemInfo['JVM使用中メモリ']} / ${systemInfo['JVM最大メモリ']}`">
                  <Progress
                    :percent="100 - parseFloat(systemInfo['メモリ使用量'])"
                      hide-info
                      :class="100 - parseFloat(systemInfo['メモリ使用量']) < 25 ? 'urge-progress ivu-progress-active' : 'ivu-progress-active'"
                      slot="label"
                   />
                </Cell>
                <Cell title="会社名" :label="globalConfigInfo.companyName"/>
                <Cell title="運用開始時間" :label="globalConfigInfo.systemStartDate"/>
                <Cell title="デフォルトページ">
                    <Input v-model="globalConfigInfo.defaultPage" slot="label" class="non-border-input"/>
                    <Button slot="extra"　@click="changeDefaultPage(globalConfigInfo.defaultPage)">更新</Button>
                </Cell>
                <Cell title="サイト状態">
                    <span :class="globalConfigInfo.siteStatus ? 'with-dot' : 'with-dot deny'" slot="extra"/>
                </Cell>
            </CellGroup>
        </Card>
        </Col>
    </Row>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
.card {
  /deep/ {
    &.ivu-cell-title {
      font-size: 18px;
    }
    &.ivu-cell-label {
      font-size: 14px;
      color: $theme-blue;
    }
  }
  .ivu-cell {
    &:hover {
      background: transparent;
    }
    &:not(:last-child) {
      border-bottom: 1px solid $border-grey;
    }
  }
}
/deep/ {
  &.ivu-progress-bg {
    background: $primary-background;
    box-shadow: 1px 1px 4px 0px $box-shadow;
  }
  &.urge-progress .ivu-progress-bg {
    background: $error-background;
  }
  &.non-border-input {
    input {
      width:320px;
      font-size: 14px;
      border: none;
      border-radius: 0;
      box-shadow: none;
      color: $theme-blue;
      font-weight: bold;
      &::placeholder {
        font-weight: normal;
        color: $text-light-grey;
      }
      &:focus {
      border-color: $login-input-border-active;
     }
      &:hover {
      border-color: $login-input-border-active;
     }
    }
  }
}
  .with-dot {
    &::before {
      display: block;
      content: '';
      position: relative;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: $theme-blue;
    }
    &.deny::before {
      background-color: $red;
    }
  }
</style>

<script>
import Buttons from '../../Buttons'
import AutoTaskAdd from './ComplexButton/AutoTaskAdd'
export default {
  name: 'systemConfiger',
  components: {
    AutoTaskAdd,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      loading: false,
      forReset: false,
      forRest1: false,
      cardLoading: false,
      isAdd: true,
      systemInfo: {},
      data: [],
      amount:0,
      columns: [
        {
          title: 'Bean',
          key: 'beanName',
          width: 150
        },
        {
          title: '参数',
          key: 'params'
        },
        {
          title: 'corn表达式',
          key: 'cronExpression'
        },
        {
          title: '备注',
          key: 'remark',
          tooltip: true,
          width: 80
        },
        {
          title: '状态',
          align: 'center',
          width: 80,
          slot: 'status'
        },
        {
          title: '操作',
          slot: 'action',
          width: 80,
          align: 'center'
        },
        {
          type: 'selection',
          width: 50,
          align: 'center',
        }
      ],
     pageValue: {
        curPage: 1,
        list: [20, 30, 50, 100],
        curSize: this.utils.getStorage('SO_userSettings', 'pageSize') || 20
      },
      opts: {
        sidx: 'create_time',
        order: 'desc',
        page: null,
        limit: this.utils.getStorage('SO_userSettings', 'pageSize') || 20,
      },
      globalConfigInfo:{}
    }
  },
  created() {
    this.getData()
        this.getSystemInfo()
        this.getGlobalConfig()
    this.globalConfigInfo = this.utils.getStorage('SO_login', 'system')
  },
  computed: {
      title() {
          return this.systemInfo['システム名前']
      }
  },
  methods: {
    getData() {
      try {
        this.loading = true
        this.getAutoTaskData()
      } catch (e) {
      } finally {
        this.loading = false
      }
    },
    async getAutoTaskData() {
      try {
        const { data } = await this.api.autoTask('fetch', this.opts)
        this.data = data.list
        this.amount = data.totalCount
      } catch (e) {
      }
    },
    async getSystemInfo() {
      try {
        const { data } = await this.api.system('getSystemInfo')
        this.systemInfo = data
      } catch (e) {
      }
    },
    async getGlobalConfig() {
      try {
        this.cardLoading = true
        const { data } = await this.api.system('getGlobalConfig')
        this.utils.setStorage('SO_login', { system: data })
      } catch (e) {
      } finally {
        this.cardLoading = false
      }
    },
    async onAdd() {
      const value = this.$refs.addData.localValue
      this.forReset = !this.forReset
      if (value) {
      try {
        await this.api.autoTask('add', value)
         this.$Message.success('追加完了')
      } catch (e) {
      } finally {
        this.getData()
      }
      }
    },
    handleBtn(curData) {
      const _updateData = this.$refs.updateData
      _updateData.isShow = true
      _updateData.localValue = { ...curData }
      _updateData.localValue.jobStatus = curData.status
    },
    async onUpdate(e) {
      this.forRest1 = !this.forRest1
      try {
        await this.api.autoTask('update', e)
        this.$Message.success('更新完了')
      } catch (e) {
      } finally {
        this.getData()
      }
    },
    async changeDefaultPage(defaultPage) {
        if(!defaultPage) return
        await this.api.system('updateGlobalConfig', { defaultPage })
        this.getGlobalConfig()
        this.$Message.success('更新完了')
    },
    onRemove() {
    },
    onRefresh() {
      this.getData()
      this.$refs.Page.currentPage = 1
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
    },
  }
}
</script>
