<template>
  <Content class="content">
    <div class="content_head">
      <div class="header" style="height: 45px;">
        <i-svg
          svgName="kiwi"
          style="fill:rgb(45, 140, 240);margin-right: 25px;width: 44px;height: 34px;"
        ></i-svg>
        <div class="title1">
          <h1>打刻</h1>
        </div>
        <div class="btnbox"></div>
      </div>
    </div>
    <Row class="stamp-warp" style="margin-top:20px">
      <Col span="10" offset="2">
        <section class="schedule">
          <span class="time-title">時間</span>
          <span class="plan-title">本日の勤務予定</span>
          <ul class="time-list">
            <li class="li" v-for="(item, i) of scheduleTime" :key="i">{{ item }}</li>
          </ul>
          <span
            :class="
              isActivated
                ? 'real-schedule stamp-actived'
                : 'real-schedule stamp-deactived'
            "
            v-for="(item, i) of dynamicSchedule"
            :key="i"
            :style="item.style"
          >{{ item.time }}</span>
        </section>
      </Col>
      <Col span="9" offset="1">
        <Clock :time="data.serverTime" @updatetime="e => (data.serverTime += e)" ref="clock" />
        <Row :gutter="16">
          <Col span="12">
            <Button
              long
              @click="handleStamp('1')"
              style="height:80px;font-size:28px;background:rgb(238, 247, 255);border:none"
              :loading="checkInLoading"
              v-if="!this.data.clockOnTime"
            >出勤</Button>
            <Button
              v-else
              disabled
              long
              style="height:80px;font-size:28px;background:rgb(238, 247, 255);border:none"
            >出勤</Button>
          </Col>
          <Col span="12">
            <Button
              @click="handleStamp('2')"
              style="height:80px;font-size:28px;background:rgb(238, 247, 255);border:none"
              long
              :loading="checkOutLoading"
            >退勤</Button>
          </Col>
          <Col span="24" class="mt20">
            <Button
              long
              style="height:53px;font-size:18px;background:rgb(238, 247, 255);border:none"
            >残業申請</Button>
          </Col>
          <Col span="24" class="mt20 msg">
            <p>
              出勤時刻：
              <span>
                {{
                data.clockOnTime ? data.clockOnTime.substring(11, 16) : '未打刻'
                }}
              </span>
            </p>
            <p>
              退勤時刻：
              <span>
                {{
                data.clockOffTime ? data.clockOffTime.substring(11, 16) : ''
                }}
              </span>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Content>
</template>
<style lang="scss" scoped>
.schedule {
  box-sizing: border-box;
  width: 500px;
  height: 555px;
  font-size: 0;
  border: 1px solid rgb(231, 238, 246);
  position: relative;
  color: $grey;
  .time-title {
    display: inline-block;
    text-align: center;
    width: 100px;
    height: 40px;
    border-right: 1px solid rgb(231, 238, 246);
    border-bottom: 1px solid rgb(231, 238, 246);
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    background-color: rgb(243, 248, 255);
  }
  .plan-title {
    display: inline-block;
    width: 398px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid rgb(231, 238, 246);
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    background-color: rgb(243, 248, 255);
  }
  .time-list {
    position: relative;
    height: 512px;
    background: $white;
    overflow-y: hidden;
    .li {
      font-size: 13px;
      width: 49px;
      position: relative;
      padding: 12px 0;
      text-align: right;
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        // 边框各占一个像素，所以是42
        top: 42px;
        left: 100px;
        width: 398px;
        height: 1px;
        background-image: linear-gradient(
          to right,
          rgb(231, 238, 246) 0%,
          rgb(231, 238, 246) 50%,
          transparent 50%
        );
        background-size: 13px 1px;
        background-repeat: repeat-x;
      }
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 20px;
        left: 100px;
        width: 398px;
        border-top: solid 1px rgb(231, 238, 246);
      }
    }
    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 99px;
      width: 1px;
      height: 512px;
      border-left: solid 1px #e7eef6;
    }
  }
  .real-schedule {
    display: block;
    position: absolute;
    left: 205px;
    width: 200px;
    font-size: 13px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 1s;
    border-radius: 8px;
  }
}
.personal-info {
  text-align: right;
  transition: color 1s;
  .name {
    font-size: 16px;
    font-weight: bold;
  }
}
.stamp-warp {
  .avatar {
    display: block;
    width: 100px;
    height: 100px;
    background-color: $light-blue;
    border-radius: 50%;
  }
  .msg {
    height: 175px;
    background-color: $light-grey;
    font-size: 16px;
    padding: 10px;
    p {
      margin: 5px;
    }
    span {
      margin-left: 10px;
      font-size: 1.1em;
      font-weight: 600;
    }
    text-align: left;
    border-radius: 8px;
  }
}
.stamp-deactived {
  background: rgba(221, 224, 226, 0.42);
}
.stamp-actived {
  background: linear-gradient(
    120deg,
    rgba(102, 171, 245, 0.8),
    rgba(86, 167, 253, 0.8)
  );
  color: white;
}
</style>

<script>
import { getNumArray } from '@/api/utils'
import Clock from './Clock'
export default {
  name: 'HomePage',
  components: { Clock },
  data: function() {
    return {
      data: {
        serverTime: 0,
        clockOnTime: '',
        clockOffTime: '',
        scheduleStartTime: '',
        scheduleEndTime: ''
      },
      scheduleData: ['9:30-12:00', '13:30-18:30'],
      checkInLoading: false,
      checkOutLoading: false
    }
  },
  async activated() {
    //  this.getData()
    // console.log(1)
    // this.$refs.clock.showTime()
  },
  mounted() {
    //  this.getData()
    this.$refs.clock.showTime()
  },
  deactivated() {
    this.$refs.clock.cleanClock()
  },
  computed: {
    isActivated() {
      if (this.data.clockOnTime && !this.data.clockOffTime) return true
      return false
    },
    dynamicSchedule() {
      const that = this
      const topHelper = this.scheduleData[0].split('-')[0].split(':')[0] * 60
      return this.scheduleData.map(e => {
        const startTime = that.utils.timeToMinute(e.split('-')[0])
        const endTime = that.utils.timeToMinute(e.split('-')[1])
        const contentHeight = ((endTime - startTime) / 60) * 43
        const top = ((startTime - topHelper) / 60) * 43 + 60
        return {
          time: e,
          style: {
            height: `${contentHeight}px`,
            lineHeight: `${contentHeight}px`,
            top: `${top}px`
          }
        }
      })
    },
    scheduleTime() {
      const from = +this.scheduleData[0].split('-')[0].split(':')[0]
      const end = from + 11
      return getNumArray(from, end).map(e => `${e}:00`)
    }
  },
  methods: {
    getData() {
      // try {
      //   const { data } = await this.api.checkIn('fetch')
      //   this.data = data
      //   this.scheduleData = [
      //     `${this.data.scheduleStartTime}-${this.data.scheduleEndTime}`
      //   ]
      //   this.data.serverTime = Date.parse(this.data.serverTime) - 1000
      //   return
      // } catch (e) {
      //   console.log(e)
      //   this.data.serverTime = Date.now()
      // }
      this.data.serverTime = Date.now()
      console.log(this.data.serverTime)
    },
    async handleStamp(clockType) {
      try {
        if (clockType === '1') this.checkInLoading = true
        else this.checkOutLoading = true
        await this.api.checkIn('stamp', { clockType })
        this.getData()
        return
      } catch (e) {
        console.log(e)
      } finally {
        if (clockType === '1') this.checkInLoading = false
        else this.checkOutLoading = false
      }
    }
  }
}
</script>
