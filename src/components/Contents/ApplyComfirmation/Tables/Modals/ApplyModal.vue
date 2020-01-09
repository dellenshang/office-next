<template>
  <Modal
    class-name="applyModal"
    v-model="isShow"
    title="申請情報"
    width="600"
    :footer-hide="footerHide"
    :mask-closable="false"
  >
    <div class="outDiv">
      <span class="label">所属</span>
      <p>{{rowData.groupIdName}}</p>
    </div>
    <div class="marb outDiv">
      <span class="label">申請者</span>
      <p>{{rowData.userCodeName}}</p>
    </div>
    <div class="outDiv">
      <span class="label">申請対象日</span>
      <p>{{rowData.viewFromTo}}</p>
    </div>
    <div class="outDiv">
      <span class="label">申請勤務体系</span>
      <p
        :class="compare(rowData.workDivCdB4Confirm,rowData.workDivisionCode)"
      >{{rowData.workDivisionNameTime}}</p>
    </div>
    <div class="outDiv">
      <span class="label">申請出勤区分</span>
      <p
        :class="compare(rowData.dayDivCdB4Confirm,rowData.dayDivisionCode)"
      >{{rowData.dayDivisionName}}</p>
    </div>
    <div class="marb outDiv">
      <span class="label">申請休暇区分</span>
      <p
        :class="compare(rowData.vacationCdB4ConfirmName,rowData.vacationCodeName)"
      >{{rowData.vacationCodeName}}</p>
    </div>
    <div class="outDiv">
      <span class="lab white" style="border-left:1px solid #eaebec;border-top:1px solid #eaebec"></span>
      <span class="lab blue bortop">打刻</span>
      <span class="lab bortop">打刻訂正</span>
      <span class="lab bortop">残業申請</span>
      <span class="lab bortop">休出申請</span>
    </div>
    <div class="outDiv">
      <span class="lab borlft">出勤</span>
      <span class="lab white">{{rowData.startTimeB4Confirm}}</span>
      <span :class="compare2(rowData.startTimeB4Confirm,rowData.startTime)">{{rowData.startTime}}</span>
      <span
        :class="compare2(rowData.moverTimeB4Confirm,rowData.morningOverTime)"
      >{{rowData.morningOverTime}}</span>
      <span
        :class="compare2(rowData.hworkFromB4Confirm,rowData.holidayWorkFrom)"
      >{{rowData.holidayWorkFrom}}</span>
    </div>
    <div class="outDiv">
      <span class="lab borlft">外出</span>
      <span class="lab white">{{rowData.outTimeB4Confirm}}</span>
      <span :class="compare2(rowData.outTimeB4Confirm,rowData.outTime)">{{rowData.outTime}}</span>
      <span class="lab white"></span>
      <span class="lab white"></span>
    </div>
    <div class="outDiv">
      <span class="lab borlft">戻り</span>
      <span class="lab white">{{rowData.inTimeB4Confirm}}</span>
      <span :class="compare2(rowData.inTimeB4Confirm,rowData.inTime)">{{rowData.inTime}}</span>
      <span class="lab white"></span>
      <span class="lab white"></span>
    </div>
    <div class="marb outDiv">
      <span class="lab borlft">退勤</span>
      <span class="lab white">{{rowData.endTimeB4Confirm}}</span>
      <span :class="compare2(rowData.endTimeB4Confirm,rowData.endTime)">{{rowData.endTime}}</span>
      <span
        :class="compare2(rowData.noverTimeB4Confirm,rowData.nightOverTime)"
      >{{rowData.nightOverTime}}</span>
      <span
        :class="compare2(rowData.hworkToB4Confirm,rowData.holidayWorkTo)"
      >{{rowData.holidayWorkTo}}</span>
    </div>
    <div class="marb outDiv">
      <span class="label" style="line-height:60px">申請理由詳細</span>
      <p style="line-height:58px">{{rowData.applyReason}}</p>
    </div>
    <div class="titlenorm">
      <Icon type="logo-buffer"></Icon>承認状況
    </div>
    <div class="outDiv">
      <span class="label">状態</span>
      <p>{{rowData.statusName}}</p>
    </div>
    <div class="outDiv">
      <span class="label" style="margin-bottom:1px">承認者</span>
      <p>{{this.isApply ? '':rowData.confirmMemberCodeName}}</p>
    </div>
    <div class="outDiv">
      <span class="label">承認日時</span>
      <p>{{this.isApply ? '':rowData.confirmDate}}</p>
    </div>
    <div class="my-footer">
      <Button size="large" @click="close">閉じる</Button>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.my-footer {
  text-align: right;
  position: relative;
  right: 1rem;
  margin-top: 20px;
}
.label {
  display: inline-block;
  width: 110px;
  line-height: 32px;
  text-align: right;
  padding-right: 10px;
  background-color: $form-label;
  color: $white;
  margin-bottom: 1px;
}
.outDiv {
  display: flex;
  justify-content: flex-start;
  .lab {
    display: block;
    width: 25%;
    background-color: $form-label;
    color: $white;
    line-height: 32px;
    text-align: center;
    border-bottom: 1px solid $border-grey;
    border-right: 1px solid $border-grey;
  }
  p {
    width: 80%;
    box-sizing: border-box;
    border: 1px solid $border-grey;
    line-height: 30px;
    text-align: left;
    text-indent: 12px;
    margin-bottom: 1px;
  }
  .white {
    background-color: $white;
    height: 34px;
    border-top: none;
    border-left: none;
    color: $grey;
  }
  .blue {
    background-color: $light-blue;
    color: $table-th-checkin;
  }
  .leftDiv {
    background-color: $form-label;
    color: $white;
    line-height: 23px;
  }
  .borlft {
    border-left: 1px solid $border-grey;
  }
  .bortop {
    border-top: 1px solid $border-grey;
  }
  .bg {
    background: $light-blue;
  }
}
.marb {
  margin-bottom: 10px;
}
</style>

<script>
export default {
  name: 'ApplyModal',
  components: {},
  props: ['rowData'],
  data() {
    return {
      footerHide: true,
      isShow: false,
      isApply: false
    }
  },
  computed: {},
  methods: {
    close() {
      this.isShow = false
    },
    compare(before, after) {
      if (after === '') {
        return ''
      }
      if (before === after) {
        return ''
      }
      return 'bg'
    },
    compare2(before, after) {
      if (after === '') {
        return 'lab white'
      }
      if (before === after) {
        return 'lab white'
      }
      return 'bg lab white'
    }
  }
}
</script>
