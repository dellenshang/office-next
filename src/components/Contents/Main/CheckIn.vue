<template>
  <div>
    <span class="drawerbtn" @click="handleButton">
      <Icon type="i-punch"/>
      <!-- <Icon type="md-timer" size="24"/> -->
    </span>
    <Drawer v-model="isChecked" width="300" @on-close="handleClose">
      <Clock :time="data.time" @updatetime="e => data.time += e" ref="clock"/>
      <div class="memberbox">
        <Icon class="user-avatar" type="i-useradmin"/>
        <div class="userinfo">
          <p class="username">{{ data.memberName }}</p>
          <p class="info_user">{{ data.groupName }}</p>
          <p class="info_user">勤務体系： {{ data.workDivisionName }}</p>
        </div>
      </div>
      <div class="time_c">
        <p>
          出勤時刻：
          <span>{{ data.workStartReal }}</span>
        </p>
        <p>
          外出時刻：
          <span>{{ data.workOutReal }}</span>
        </p>
        <p>
          戻り時刻：
          <span>{{ data.workInReal }}</span>
        </p>
        <p>
          退勤時刻：
          <span>{{ data.workEndReal }}</span>
        </p>
      </div>
      <div class="punch_cbox">
        <div class="mtb20">
          <Row :gutter="16">
            <Col span="12">
              <div class="mb10">
                <Button
                  @click="checkIn('01')"
                  type="primary"
                  :loading="loading['01']"
                  v-if="goWork === false"
                  long
                >出勤</Button>
                <Button v-else disabled long>出勤</Button>
              </div>
              <div class="mb10">
                <Button
                  @click="checkIn('03')"
                  type="info"
                  :loading="loading['03']"
                  :disabled="goOut"
                  long
                >外出</Button>
              </div>
            </Col>
            <Col span="12">
              <div class="mb10">
                <Button type="primary" ghost @click="checkIn('02')" :loading="loading['02']" long>退勤</Button>
              </div>
              <div class="mb10">
                <Button type="primary" ghost @click="checkIn('04')" :loading="loading['04']" long>戻り</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Drawer>
  </div>
</template>

<style lang="scss" scoped>
.memberbox {
  @include flex-row(flex-start);
  .user-avatar {
    // background: $user-avatar-background;
    padding: 1rem;
    color: $white;
    border-radius: 50%;
    font-size: 5rem;
    margin-right: 1.5rem;
  }
}

.userinfo {
  text-align: left;
  .username {
    font-size: 1.3rem;
    font-weight: 600;
    padding-bottom: 5px;
  }
  .info_user {
    font-size: 13px;
  }
}
.time_c {
  background-color: $light-grey;
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
  text-align: left;
  font-size: 13px;
  p {
    margin: 5px;
  }
  span {
    margin-left: 10px;
    font-size: 1.1em;
    font-weight: 600;
  }
}
.punch_cbox {
  margin-top: 30px;
}
.punch_cbox .ivu-form .ivu-input {
  height: 45px;
  font-size: 1.5em;
  box-shadow: inset 0 1px 1px $box-shadow;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.punch_cbox {
  margin-top: 30px;
}
.drawerbtn {
  position: fixed;
  height: 100px;
  width: 100px;
  // line-height: 50px;
  text-align: center;
  // background-image: $checkin-btn-background;
  // border-radius: 25px;
  right: -20px;
  bottom: 10px;
  color: $white;
  font-weight: 600;
  cursor: pointer;
}
</style>

<script>
import Clock from './Clock.vue'
export default {
  name: 'CheckIn',
  components: { Clock },
  data: function() {
    return {
      data: {
        memberName: '',
        groupName: '',
        workDivisionName: '',
        time: 0,
        workStartReal: '',
        workEndReal: '',
        workOutReal: '',
        workInReal: '',
        todayNotice: ''
      },
      isChecked: false,
      localValue: {},
      memberId: '',
      loading: {
        '01': false,
        '02': false,
        '03': false,
        '04': false
      }
    }
  },
  computed: {
    goOut() {
      if (this.data.workOutReal.length !== 0) {
        return true
      }
      return false
    },
    goWork() {
      if (this.data.workStartReal.length !== 0) {
        return true
      }
      return false
    }
  },
  methods: {
    async handleButton() {
      this.isChecked = true
      await this.getData()
      this.$refs.clock.showTime()
    },
    handleClose() {
      this.$refs.clock.cleanClock()
    },
    async checkIn(reason) {
      if (reason === '03') {
        this.$Modal.confirm({
          title: '注意',
          content:
            '外出が一回のみとなっております、今、外出してよろしいでしょうか',
          onOk: async () => {
            await this.handleCheckIn(reason)
          },
          onCancel: () => false
        })
      } else {
        await this.handleCheckIn(reason)
      }
    },
    async handleCheckIn(reason) {
      this.loading[reason] = true
      const memberId = this.memberId
      this.localValue = { memberId, reason }
      setTimeout(() => {
        this.loading[reason] = false
      }, 3500)
      const response = await this.api.checkin('check', this.localValue)
      if (response) {
        this.loading[reason] = false
        this.$Modal.success({
          title: '打刻成功しました。'
        })
        return this.getData()
      }
    },
    async getData() {
      // const { DATA } = await this.api.checkin('fetch')
      // if (DATA) {
      //   this.data = DATA
      //   return (this.data.time = Date.parse(this.data.time) - 1000)
      // }
      // return this.$Message.error('打刻情報取得失敗')
      this.data.time = 1577770548945 - 1000
    }
  }
}
</script>
