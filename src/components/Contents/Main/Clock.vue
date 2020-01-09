<template>
  <div v-if="timeView.dateMsg.length > 0" :class="hasShadow ? 'shadow' :'mobile-clock'">
    <div :class="isBlueClock ? 'clock' :''">
      <slot name="header"></slot>
      <div v-if="fullWeekDisplay" class="week-style">
        <span
          v-for="(item, index) of weekHelper"
          :class="weekClassHelper(index)"
          :key="index"
        >{{ $t(item) }}</span>
      </div>
      <div v-if="!hasShadow" class="date-style">{{ timeView.dateMsg }}</div>
      <span v-if="!hasShadow" class="week">{{mobileWeekHelper[timeView.week]}}</span>
      <div :data-text="timeView.hourMsg" class="hour-style">{{ timeView.hourMsg }}</div>
      <div v-if="hasShadow" class="date-style">{{ timeView.dateMsg }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  props: {
    hasShadow: {
      type: Boolean,
      default: true
    },
    isBlueClock: {
      type: Boolean,
      default: true
    },
    fullWeekDisplay: {
      type: Boolean,
      default: true
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
      const Sever_Time = localStorage.getItem('SO_Mobile_Sever_Time')
      const Local_Time = localStorage.getItem('SO_Mobile_Local_Time')
      const time = Date.now() - Local_Time + +Sever_Time
      const { dateMsg, hourMsg, week } = this.utils.getTime(time)
      this.timeView = { dateMsg, hourMsg, week }
      this.timemachine = setTimeout(this.showTime, 1000)
    },
    weekClassHelper(index) {
      return this.timeView.week === index ? 'cur' : ''
    },
    cleanClock() {
      clearTimeout(this.timemachine)
    }
  }
}
</script>

<style lang="scss" scoped>
.shadow {
  margin-top: 35px;
  margin-bottom: 50px;
  z-index: 0;
  position: relative;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3),
    0px 0px 20px rgba(0, 0, 0, 0.1) inset;
  &::after,
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 15px;
    left: 10px;
    width: 50%;
    height: 20%;
    box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
    transform: rotate(-3deg);
  }
  &:after {
    right: 10px;
    left: auto;
    transform: rotate(3deg);
  }
}
.clock {
  background: $clock-background;
  padding: 25px;
}
.week-style {
  display: flex;
  color: $input-border-grey;
  background-color: $white;
  font-weight: bold;
  padding: 10px 11px 0 20px;
  box-shadow: inset 0px 15px 10px -20px #000;
  span {
    flex: 1;
    &.cur {
      color: $grey;
    }
  }
}
.hour-style {
  background-color: $white;
  font-size: 2.4rem;
  font-weight: 500;
  font-family: 'digital';
  letter-spacing: 5px;
}
.date-style {
  background-color: $white;
  padding-bottom: 10px;
  letter-spacing: 1px;
}
.mobile-clock {
  margin-left: 8%;
  text-align: left;
  margin-top: 8%;
  width: 350px;
  padding: 40px;
  box-shadow: -15px 19px 10px -6px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media (max-width: 399px) {
    margin-left: 4%;
    margin-top: 6%;
  }
  @media (max-width: 350px) {
    margin: 0;
  }
  .hour-style {
    font-size: 6rem;
    margin-top: -15px;
    position: relative;
  background-color: $white;
  font-size: 3rem;
  font-family: 'digital';
  letter-spacing: 5px;
    padding-bottom: 20px;
    animation: glitch1 2.5s infinite;
    background-color: transparent;
    mix-blend-mode: lighten;
    &:before,
    &:after {
      position: absolute;
      content: attr(data-text);
      top: 0;
      width: 100%;
      background: black;
      clip-path: inset(0 0 0 0);
    }
    &:before {
      left: -1px;
      text-shadow: 4px 0 rgba(red, 0.7);
      animation: glitch-loop-1 0.8s infinite ease-in-out alternate;
    }

    &:after {
      left: 1px;
      text-shadow: -3px 0 rgba(blue, 1.7);
      animation: glitch-loop-2 0.8s infinite ease-in-out alternate;
    }
  }
  .date-style {
    display: inline-block;
    font-size: 2.3rem;
    margin: 0 5px -15px 15px;
    font-family: 'digital';
    padding-bottom: 0;
    background-color: transparent;
  }
  .week {
    font-size: 16px;
    vertical-align: bottom;
  }
}
@keyframes glitch-loop-1 {
  0% {
    transform: translate(-0.5px, 0.5px);
    clip-path: inset(0 0 60% 0);
  }
  25% {
    transform: translate(0, 0.5px);
    clip-path: inset(0 0 45% 0);
  }
  50% {
    transform: translate(-0.5px, 0);
    clip-path: inset(0 0 35% 0);
  }
  75% {
    transform: translate(-0.5px, -0.5px);
    clip-path: inset(0 0 55% 0);
  }
  100% {
    transform: translate(0, 0.5px);
    clip-path: inset(0% 0 69% 0);
  }
}

@keyframes glitch-loop-2 {
  0% {
    transform: translate(-0.5px, 0.5px);
    clip-path: inset(0 0 69% 0);
  }
  25% {
    transform: translate(0, 0.5px);
    clip-path: inset(0 0 30% 0);
  }
  50% {
    transform: translate(-0.5px, 0);
    clip-path: inset(0 0 50% 0);
  }
  75% {
    transform: translate(-0.5px, -0.5px);
    clip-path: inset(0 0 25% 0);
  }
  100% {
    transform: translate(0, 0.5px);
    clip-path: inset(0% 0 35% 0);
  }
}
</style>
