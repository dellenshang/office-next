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
          <RadioGroup :value="RadioStatusHelper" @on-change="handleRadioStatusHelper">
            <Radio :label="6" class="custom-radio">全て</Radio>
            <Radio :label="0" class="custom-radio">待ち</Radio>
            <Radio :label="1" class="custom-radio">済み</Radio>
            <Radio :label="2" class="custom-radio">拒否</Radio>
          </RadioGroup>
          <RefreshBotton @refresh="onRefresh" style="margin-top:0"/>
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
      <ApplyStateTable :data="tableData" :loading="loading"/>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
.header {
  justify-content: flex-start;
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
</style>

<script>
import { Debounce } from '@/api/utils'
import ApplyStateTable from './Tables/ApplyStateTable'
import Buttons from '../../Buttons'
export default {
  name: 'ApplyStateCheck',
  components: {
    ApplyStateTable,
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
      RadioStatusHelper: 6,
      pageValue: {
        curPage: 1,
        list: [20, 30, 50, 100],
        curSize: this.utils.getStorage('SO_userSettings', 'pageSize') || 20
      },
      opts: {
        sidx: 'create_time',
        order: 'desc',
        status: null,
        self: false,
        page: null,
        keyword: null,
        limit: this.utils.getStorage('SO_userSettings', 'pageSize') || 20
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData: Debounce(async function() {
      try {
        this.loading = true
        const { data } = await this.api.apply('applyHistory', this.opts)
        this.tableData = data.list
        this.amount = data.totalCount
      } catch (error) {
      } finally {
        this.loading = false
      }
    }),
    handleRadioStatusHelper(e) {
      // 将页面上的全てstatus转为null
      if(e !== 6){
        this.opts.status = e
      } else {
        delete this.opts.status
      }
      // 済み时是查已承认和自动承认的，所以需要pass为true
      if(e === 1) {
        this.opts.pass = true
      } else {
        delete this.opts.pass
      }
      this.$refs.Page.currentPage = 1
      this.getData()
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
