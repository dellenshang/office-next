<template>
  <Content class="content">
    <div class="content_head">
      <div class="searchwrap">
        <span class="label">休暇</span>
        <Select v-model="restApply.restTypeId" @on-change="handleRestType" filterable>
          <Option v-for="item of restTypeList" :value="item.restTypeId" :key="item.restTypeId">{{`${item.name}`}}<span v-if="item.paid" class="paid-vacation"></span></Option>
        </Select>
        <span style="flex:1"></span>
      <RadioGroup v-model="type">
        <Radio :label="1">休暇申請</Radio>
        <!-- <Radio :label="2" class="custom-radio">休日出勤</Radio> -->
      </RadioGroup>
    　</div>
    </div>
    <div class="content_body">
      <Card title="申請状況一覧" :class="!rotate ? 'card card-two':'card card-two rotate-360'" v-loading="loading">
        <Button type="primary" ghost　size="small" class="mr5" style="position:relative;right:633px" slot="extra" @click="onRefresh">申請へ</Button>
          <RadioGroup :value="RadioStatusHelper" @on-change="handleRadioStatusHelper" slot="extra" class="mr5">
            <Radio :label="6">全て</Radio>
            <Radio :label="0">待ち</Radio>
            <Radio :label="1">済み</Radio>
            <Radio :label="2">拒否</Radio>
          </RadioGroup>
        <Button slot="extra" class="refresh-small" type="primary" ghost　size="small" icon="md-refresh" @click="getApplyHistory(true)" :loading="loading"/>
        <PersonalApplyTable :data="tableData" :loading="listLoading" @cancel="onCancel" @scroll.native.passive="handleScroll"/>
      </Card>
      <Card :title="selectedRestInfo.name ? selectedRestInfo.name : '休暇選択待ち'" :class="!rotate ? 'card':'card rotate-180'">
        <span class="mr5 link-span" slot="extra" @click="onRefresh">申請状況一覧へ</span>
        <span slot="extra" class="paid-vacation" v-show="selectedRestInfo.paid"></span>
        <Alert type="error" class="error-info" v-show="errorInfo">{{ errorMsg }}</Alert>
        <Divider size="small" orientation="left">時間</Divider>
        <Row style="margin-top:10px" :gutter="16">
          <Col span="11">
            <Row>
              <RadioGroup style="display:flex" v-model="timerangeType" @on-change="restApply.useVacation = false">
                <Radio style="flex:1" :label="1" class="custom-radio">指定日申請</Radio>
                <Radio :label="2" style="flex:1" class="custom-radio">範囲申請</Radio></RadioGroup>
            </Row>
            <Row type="flex" justify="start">
              <DatePicker :type="timerangeType === 1 ? 'date' : 'daterange'" class="datepicker-middle" v-model="restApply.dateList" @on-change="restApply.dateList = $event" format="yyyy-MM-dd" ref="datePicker"></DatePicker>
            </Row>
          </Col>
          <Col span="13">
            <Alert class="right-info sub">
              <RadioGroup v-model="restDayRange" v-show="timerangeType === 1" style="display:flex;margin-bottom:15px">
                <Radio :label="0" style="flex:1" class="custom-radio">全日</Radio>
                <Radio :label="1" style="flex:1" class="custom-radio">午前</Radio>
                <Radio :label="2" style="flex:1" class="custom-radio">午後</Radio></RadioGroup>
              <Divider size="small" orientation="left">有休残数</Divider>
              <Row style="margin-bottom:20px">
                <Col span="18">
                  <Progress :percent="handleProgressShow(user.userInfo.restInfo)" ref="progress" hide-info class="ivu-progress-active" /></Col>
                <span style="margin-left:10px">{{handleProgressShow(user.userInfo.restInfo,true)}}</span></Row>
              <Divider size="small" orientation="left" v-if="!selectedRestInfo.paid">有休とする</Divider>
              <Row type="flex" justify="start" style="margin-bottom:15px" v-if="!selectedRestInfo.paid">
                <i-switch v-model="restApply.useVacation" size="large">
                  <span slot="open">有休</span></i-switch>
              </Row>
            </Alert>
          </Col>
        </Row>
        <Divider size="small" orientation="left">備考</Divider>
        <Input v-model="restApply.reason" type="textarea" :autosize="{minRows: 5}" placeholder="文字の長さは１００位までとなっております。"/>
        <Button class="btn" type="primary" long @click="apply" icon="md-create" :loading="loading">申請</Button></Card>
    </div>
  </Content>
</template>
<style lang="scss" scoped>
.link-span {
  font-size: 12px;
  color: $login-input-border-active;
  cursor: pointer;
}
.refresh-small {
  border-radius: 50%;
  padding: 1px 5px 2px;
}
.card-title {
  color: $grey;
  font-weight: 700;
}
/deep/.ivu-switch {
  margin: 5px 15px 0 0;
  width: 68px;
  height: 28px;
  .ivu-switch-inner {
    line-height: 27px;
    font-size: 1.2rem;
  }
  &:after {
    top: 2px;
    left: -2px;
    width: 22px;
    height: 22px;
  }
  &.ivu-switch-checked:after {
    left: 46px;
    top: 2px;
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
.datepicker-middle {
  &.ivu-date-picker {
    // position: relative;
    // top: 53px;
    margin-top: 50px;
    width: 90%;
  }
}
/deep/.custom {
  display: flex;
}

/deep/ {
  &.ivu-progress-success .ivu-progress-bg,
  &.ivu-progress-bg {
    background: $primary-background;
    box-shadow: 1px 1px 4px 0px $box-shadow;
  }
  &.table-icon {
    vertical-align: baseline;
  }
}
.right-info {
  &.ivu-alert-info {
    top: -8px;
    padding: 8px 16px;
    background: $white;
    border: 1px dashed $form-border-dash;
  }
}
.error-info {
  color: $red;
  margin-top: 10px;
  border: $error-border;
}

.ivu-divider + .ivu-radio-group {
  width: 100%;
}
.paid-vacation {
  float: right;
  color: $theme-blue;
  background-color: $light-blue;
  padding: 1px 6px;
  border-radius: 50%;
  &:before {
    content: '有';
  }
}
.card {
  width: 800px;
  left: 50%;
  backface-visibility: hidden;
  transition: all 1.5s;
  transform: translateX(-50%);
  box-shadow: rgba(50, 50, 50, 0.2) 0 0 15px;
  &.card-two {
    position: absolute;
    width: 950px;
    left: 57%;
    opacity: 0;
    // 将滚动条隐藏
    overflow-x: hidden;
    min-height: 70vh;
    /deep/.ivu-card-body {
      padding-bottom: 0;
    }
  }
}
.rotate-180 {
  transform: translateX(-50%) rotateY(-180deg);
  /deep/.ivu-select-dropdown {
    animation: dispear 1s forwards ease-in-out;
  }
}
.rotate-360 {
  opacity: 1 !important;
  transform: translateX(-50%) rotateY(-360deg);
}
.btn {
  margin-top: 20px;
}
@keyframes dispear {
  100% {
    opacity: 0;
  }
}
/deep/.content_body {
  margin-bottom: 0;
}
</style>

<script>
import { mapState, mapActions } from 'vuex'
import { Debounce, Throttle } from '@/api/utils'
import PersonalApplyTable from './Tables/PersonalApplyTable'
import Buttons from '../../Buttons'
export default {
  name: 'PersonalApply',
  components: {
    PersonalApplyTable,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      filterName: '',
      type: 1,
      restDayRange: 0,
      open: true,
      timerangeType: 1,
      loading: false,
      modeId: null,
      rotate: false,
      errorInfo: false,
      // 用于为全て时删除status字段
      RadioStatusHelper: 6,
      totalCount: 0,
      listLoading: false,
      tableData: [],
      opts:{
        sidx: 'create_time',
        order: 'desc',
        page: null,
        limit: 50,
        self: true,
        status: null
      },
      errorMsg: '',
      restApply: {
        useVacation: false
      },
      selectedRestInfo: {}
    }
  },
  async created() {
    this.getData()
  },
  filters: {
    addDecimal(e) {
      if (!e) {
        return ''
      }
      return parseInt(e, 10) === e ? `${e}.0` : e
    }
  },
  watch: {
    'restApply.restTypeId'(newValue) {
      if (!newValue) this.selectedRestInfo = {}
      else this.selectedRestInfo = this.restTypeList.find(e => e.restTypeId === newValue)
    }
  },
  computed: {
    ...mapState(['restType', 'user']),
    restTypeList() {
      return this.restType.list
    }
  },
  mounted() {},
  methods: {
    ...mapActions(['restType/Action_RestType_Get', 'user/Action_User_Info_Get']),
    async getData() {
      this['restType/Action_RestType_Get']({ context: this })
      this.getApplyHistory()
    },
    getApplyHistory: Debounce(async function(isRefresh, isReachBottom) {
      try {
        // 触底的再拉走独自的loading, 因为全loading的样式有bug, 在变长的list时无法cover整个容器
        if (isReachBottom) {
          this.listLoading = true
        } else {
          this.opts.limit = 50
          this.loading = true
        }
        const { data } = await this.api.apply('applyHistory', this.opts)
        this.tableData = data.list
        this.totalCount = data.totalCount
        if (isRefresh) this.$Message.success('再表示完了')
      } catch (error) {
      } finally {
        this.loading = false
        this.listLoading = false
      }
    }),
    handleRestType() {},
    getRangeDate(time) {
      const sTime = new Date(time[0]).getTime()
      const eTime = new Date(time[1]).getTime()
      let result = []
      for (let i = sTime; i <= eTime; i += 24 * 60 * 60 * 1000) {
        result.push({ date: this.utils.formatDate(i, 'YYYY-MM-DD'), isHalf: 0 })
      }
      return result
    },
    // 到底再拉数据，需要判断总数，决定是否再拉
    handleScroll: Throttle(function(e) {
      const _e = e.target
      if (_e.offsetHeight + _e.scrollTop === _e.scrollHeight) {
        console.log('到底了！')
        if (this.totalCount > this.tableData.length) {
          console.log('该拉了')
          this.opts.limit += 50
          this.getApplyHistory(false, true)
        }
      }
    }, 600),
    onRefresh() {
      this.rotate = !this.rotate
    },
    onCancel:Debounce(async function(id) {
      try {
        await this.api.apply('cancel', {id})
        this.$Message.success('取り消し完了')
      } catch (error) {
      } finally {
        this.getApplyHistory()
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

      this.getApplyHistory(true)
    },
    handleProgressShow(e, isText) {
      // 有休残数和文字的显示判断
      if (!e) return 0
      let usedDays = e.usedDays || 0
      let totalDays = e.totalDays
      if (!isText) {
        // 当有休按钮被按时
        if (this.restApply.useVacation) {
          if (this.timerangeType === 2) {
            const rangeDay = this.getRangeDate(this.restApply.dateList).length
            if (rangeDay + usedDays > totalDays) return 0
            return ((totalDays - usedDays - rangeDay) / totalDays) * 100
          }
          // 当休息为一日时
          if (this.restDayRange === 0) {
            return ((totalDays - usedDays - 1) / totalDays) * 100
          }
          return ((totalDays - usedDays - 0.5) / totalDays) * 100
        }
        return ((totalDays - usedDays) / totalDays) * 100
      }
      // 剩余数字是整数时加.0
      totalDays = this.$options.filters.addDecimal(totalDays)
      if (this.restApply.useVacation) {
        if (this.timerangeType === 2) {
          const rangeDay = this.getRangeDate(this.restApply.dateList).length
          return `${usedDays + rangeDay} / ${totalDays}`
        }
        if (this.restDayRange === 0) {
          return `${usedDays + 1} / ${totalDays}`
        }
        return `${usedDays + 0.5} / ${totalDays}`
      }
      return `${usedDays} / ${totalDays}`
    },
    apply: Debounce(async function() {
      if (!this.user.userInfo.empInfo) return
      this.restApply.empId = this.user.userInfo.empInfo.empId
      if (!this.restApply.restTypeId) {
        this.errorInfo = true
        return (this.errorMsg = '休暇選択してください。')
      }
      if (!this.restApply.dateList || this.restApply.dateList.length === 0) {
        this.errorInfo = true
        return (this.errorMsg = '期日選択してください。')
      }
      const resonLength = this.restApply.reason ? this.restApply.reason.trim().length : 0
      if(resonLength > 100) {
        this.errorInfo = true
        return (this.errorMsg = '備考文字の長さは１００位までに入力してください。')
      }
      const rangeDay = this.getRangeDate(this.restApply.dateList).length
      if (
        !this.selectedRestInfo.paid && rangeDay + this.user.userInfo.restInfo.usedDays >
        this.user.userInfo.restInfo.totalDays
      ) {
        this.errorInfo = true
        return (this.errorMsg = '有休残数が不足です。')
      }
      this.errorInfo = false
      // 休假是有休的时候自动重置有休按钮
      if (this.selectedRestInfo.paid) this.restApply.useVacation = false
      const value = { ...this.restApply }
      if (this.timerangeType === 1) {
        value.dateList = {
          date: this.restApply.dateList,
          isHalf: this.restDayRange
        }
      } else {
        value.dateList = this.getRangeDate(this.restApply.dateList)
      }
      try {
        value.dateList = value.dateList instanceof Array ? value.dateList : [value.dateList]
        await this.api.apply('apply', value)
        await this['user/Action_User_Info_Get']()
        this.timerangeType = 1
        this.restDayRange = 1
        this.restApply = { useVacation: false }
        this.$Message.success('申请完了')
        this.getApplyHistory()
        this.rotate = !this.rotate
      } catch (error) {
        console.log(error)
      }
    })
  }
}
</script>
