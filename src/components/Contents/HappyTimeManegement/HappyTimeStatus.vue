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
            @click.native="download"
            type="warning"
            ghost
            size="large"
            :loading="downloadLoading"
            icon="ios-cloud-download-outline"
          >情報出力</Button>
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
      <div class="searchwrap">
        <span class="label">所属名</span>
        <Cascader
          v-model="searchLevel"
          class="mr10"
          style="width: 200px;"
          :data="data"
          :render-format="handleCascaderView"
          @on-visible-change="handleSearch"
          filterable
          change-on-select
        ></Cascader>
        <span class="label">年月</span>
        <DatePicker
          class="half-width"
          style="margin-right:5px"
          type="month"
          :value="startDate"
          :editable="false"
          :clearable="false"
          @on-change="opts.startDate = $event"
          format="yyyy-MM"
        />
        <DatePicker
          class="mar half-width"
          type="month"
          :value="endDate"
          :options="limitEndDate"
          :editable="false"
          :clearable="false"
          @on-change="handleDatePicker($event)"
          format="yyyy-MM"
        />
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
      <HappyTimeStatusTable
        ref="tableData"
        :data="tableData"
        :loading="loading"
        @openDraw="openDraw"
      />
      <Drawer title="個人有休取得状況・訂正" width="650" v-model="isShow" @on-close="errorInfo = false">
        <div class="drawer-body">
          <Alert type="error" class="error-info" v-show="errorInfo">{{ errorMsg }}</Alert>
          <span class="label width-100 mb-3">氏名</span>
          <p class="p">{{ drawData.empName }}</p>
          <span class="label width-100 mb-3">所属名</span>
          <p
            class="p"
            v-if="drawData.deptList && drawData.deptList.length > 0"
          >{{ drawData.deptList.join(" ").replace(/[A-Za-z0-9]+\s+/g,' ') }}</p>
          <p class="p" v-else>なし</p>
          <span class="label width-100 mb-3">在籍年月</span>
          <p class="p">{{`${drawData.hireYears}年&nbsp; ${monthHelper[drawData.hireMonths]}`}}</p>
          <Divider size="small" orientation="left">付与日数訂正</Divider>
          <span class="label width-100 mb5">付与日数</span>
          <InputNumber :min="0" :step="0.5" class="draw-input" v-model="drawData.paymentDays"/>
          <Button style="width:567px;margin-bottom:10px" type="primary" ghost @click="updatePaidInfo(drawData.resumeId, drawData.paymentDays)" icon="md-create">保存</Button>
          <Divider size="small" orientation="left">{{`${opts.startDate} ～ ${opts.endDate}`}}</Divider>
          <Table border :columns="drawColumns" :data="drawData.dateList">
            <template slot-scope="{ row }" slot="dateList">
              <span>{{ handleApplyDayShow(row.dates) }}</span>
            </template>
            <template slot-scope="{ row }" slot="restTypeName">
              <span :class="row.typeId === 1 ? '' : 'description'">{{ row.restTypeName }}</span>
            </template>
          </Table>
        </div>
      </Drawer>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
.header {
  justify-content: flex-start;
}
/deep/.ivu-collapse-header .ivu-icon {
  line-height: unset;
}
.collapse-btn {
  width: 70px;
  height: 31px;
  align-items: center;
  flex-direction: column;
  margin: 3px;
}
.error-info {
  text-align: center;
  font-size: 14px;
  color: $red;
  width: 567px;
  margin-top: 10px;
  border: $error-border;
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
.description:after {
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
.drawer-body {
  text-align: left;
  .label {
    display: inline-block;
    line-height: 32px;
    padding-right: 10px;
    text-align: right;
    background-color: $form-label;
    color: $white;
    &:last-child {
      margin-bottom: 10px;
    }
  }
  .width-100 {
    width: 140px;
  }
  .p {
    display: inline-block;
    border: solid 1px $border-grey;
    padding-left: 3px;
    width: 427px;
    line-height: 30px;
  }
  .mb-3 {
    margin-bottom: 3px;
  }
}
.draw-input {
  width: 427px;
  vertical-align: top;
  border-radius: 0;
}
.half-width {
  width: 95px;
  /deep/.ivu-input-suffix {
    display: none;
  }
}
</style>

<script>
import { mapState, mapActions } from 'vuex'
import HappyTimeStatusTable from './Tables/HappyTimeStatusTable'
import Buttons from '../../Buttons'
export default {
  name: 'HappyTimeStatus',
  components: {
    HappyTimeStatusTable,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      searchLevel: [],
      loading: false,
      downloadLoading: false,
      isShow: false,
      errorInfo: false,
      errorMsg: '',
      drawData: {
        deptList: [],
        dateList: []
      },
      drawColumns: [
        {
          title: '月日',
          slot: 'dateList'
        },
        {
          title: '休暇種類',
          slot: 'restTypeName'
        },
        {
          title: '備考',
          key: 'remark',
          tooltip: true,
          minWidth: 70
        }
      ],
      pageValue: {
        curPage: 1,
        list: [20, 30, 50, 100],
        curSize: this.utils.getStorage('SO_userSettings', 'pageSize') || 20
      },
      limitEndDate: {
        disabledDate: date => {
          return date && date.getTime() < new Date(this.opts.startDate).getTime() - 24 * 60 * 60 * 1000
        }
      },
      startDate: new Date(),
      endDate: new Date(),
      opts: {
        sidx: 'create_time',
        order: 'desc',
        page: null,
        keyword: null,
        limit: this.utils.getStorage('SO_userSettings', 'pageSize') || 20,
        deptId: null
      },
      year: '',
      monthHelper: {
        0: '',
        1: '一ヶ月',
        2: '二ヶ月',
        3: '三ヶ月',
        4: '四ヶ月',
        5: '五ヶ月',
        6: '六ヶ月',
        7: '七ヶ月',
        8: '八ヶ月',
        9: '九ヶ月',
        10: '十ヶ月',
        11: '十一ヶ月',
        12: '十二ヶ月'
      }
    }
  },
  computed: {
    ...mapState(['dept', 'happy']),
    data() {
      return this.dept.searchList
    },
    tableData() {
      return this.happy.history.list
    },
    amount() {
      return this.happy.history.count
    }
  },
  mounted() {},
  created() {
    this.getData()
  },
  methods: {
    ...mapActions(['happy/Action_Happy_History_Get','happy/Action_Happy_Correct']),
    handleCascaderView(labels) {
      return labels[labels.length - 1]
    },
    getData() {
      if (!this.opts.startDate) {
        this.opts.startDate = this.utils.formatDate(new Date(), 'YYYY-MM')
      }
      if (!this.opts.endDate) {
        this.opts.endDate = this.utils.formatDate(new Date(), 'YYYY-MM')
      }
      console.log(this.opts)
      this['happy/Action_Happy_History_Get']({
        value: this.opts,
        context: this
      })
    },
    handleDatePicker(e) {
      this.opts.endDate = e
      this.getData()
    },
    handleApplyDayShow(e) {
      if (e.length === 1) {
        return e.join('')
      }
      return `${e[0]} ～ ${e[e.length - 1]}`
    },
    updatePaidInfo(resumeId, paymentDays) {
      if(`${paymentDays}`.indexOf('.') > -1 && `${paymentDays-0.5}`.indexOf('.') > -1) {
        this.errorInfo = true
        return (this.errorMsg = '付与日数の小数単位は0.5になっております。')
      }
      this['happy/Action_Happy_Correct']({
        value: [{ resumeId, paymentDays: paymentDays || 0}],
        context: this
      })
    },
    handleSearch(visibleStatus) {
      if (!visibleStatus) {
        this.$nextTick(() => {
          this.opts.deptId = this.searchLevel[this.searchLevel.length - 1]
          if (this.opts.deptId) {
            this['happy/Action_Happy_History_Get']({
              value: this.opts,
              context: this
            })
          }
        })
      }
    },
    async openDraw(args) {
      const { data } = await this.api.happy('givePaidVationHistoryById', {
        id: args[0].empId,
        startDate: this.opts.startDate,
        endDate: this.opts.endDate
      })
      this.drawData = { ...args[0], dateList: data }
      this.isShow = true
    },
    onRefresh() {
      this.getData()
      this.opts.keyword = null
      this.opts.deptId = null
      this.searchLevel = []
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
    async download() {
      try {
        this.downloadLoading = true
        await this.api.output('rest', { isOutput: false })
        window.open(`${this.domain}/io/resume/rest/list?isOutput=true`, '_blank')
      } catch (e) {
      } finally {
        this.downloadLoading = false
      }
    }
  }
}
</script>
