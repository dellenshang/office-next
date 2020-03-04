<template>
  <div v-if="timeView.dateMsg.length > 0" class="shadow">
    <div class="date-style">
      <span class="date">{{ timeView.dateMsg }}</span>
      <span class="week">{{mobileWeekHelper[timeView.week]}}</span>
    </div>
    <div :data-text="timeView.hourMsg" class="hour-style">{{ timeView.hourMsg }}</div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  props: {
    time: {
      type: Number,
      default: Date.now()
    }
  },
  data: function() {
    return {
      timemachine: {},
      timeView: {
        dateMsg: '',
        hourMsg: '',
        week: ''
      },
      weekHelper: [
        'checkIn.SUN',
        'checkIn.MON',
        'checkIn.TUE',
        'checkIn.WED',
        'checkIn.THU',
        'checkIn.FRi',
        'checkIn.SAT'
      ],
      mobileWeekHelper: [
        '日曜日',
        '月曜日',
        '火曜日',
        '水曜日',
        '木曜日',
        '金曜日',
        '土曜日'
      ]
    }
  },
  methods: {
    showTime() {
      // 手机部分
      // const Sever_Time = localStorage.getItem('SO_Mobile_Sever_Time')
      // const Local_Time = localStorage.getItem('SO_Mobile_Local_Time')
      // const time = Date.now() - Local_Time + +Sever_Time
      // const { dateMsg, hourMsg, week } = this.utils.getTime(time)
      this.$emit('updatetime', 1000)
      const { dateMsg, hourMsg, week } = this.utils.getTime(this.time)
      this.timeView = { dateMsg, hourMsg, week }
      this.timemachine = setTimeout(this.showTime, 1000)
    },
    cleanClock() {
      clearTimeout(this.timemachine)
    }
  }
}
</script>

<style lang="scss" scoped>
.shadow {
  margin-bottom: 50px;
  z-index: 0;
  position: relative;
  padding: 20px;
  background-color: rgb(243, 248, 255);
  &:after {
    right: 10px;
    left: auto;
    transform: rotate(3deg);
  }
}
.hour-style {
  background-color: $white;
  font-size: 50px;
  font-weight: 500;
  // font-family: 'digital';
  letter-spacing: 5px;
}
.date-style {
  height: 40px;
  border-bottom: 1px solid rgb(231, 238, 246);
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  background-color: rgb(213, 230, 255);
  letter-spacing: 1px;
}
</style>
