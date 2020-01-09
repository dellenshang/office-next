<template>
  <ul class="apply-history-list">
    <!-- timeline开始，根据申请最终状态变更圆点颜色 -->
    <li :class="handleTimelineDotShow(item.status)" v-for="(item, index) of data" :key="index">
      <Row>
        <!-- 申请休假的时间的显示 -->
        <Col span="5" style="margin-left: 4.5%" class="title">{{ handleApplyDayShow(item.dateList) }}</Col>
        <!-- 承认者-状态-承认者-状态-流的展示, 状态为取消时，不显示 -->
        <Col span="17" style="margin-left: 2.5%" class="title" v-if="item.status !== 3">
          <ul style="display:flex">
            <li style="margin-right:10px" v-for="(item,index) of handleAdminflowShow(item)" :key="index">
              <span>{{`${item.name} `}}</span>
              <span :class="handleApplyMarkShow(item.status)" />
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col span="12" style="font-weight:bold;margin-left: 4.5%" :class="item.typeId === 1 ? 'description' : 'description with-mark'">{{ item.restTypeName}}</Col>
        <Col span="2" style="margin-left: 32.3%" class="description" v-if="item.status === 0 && item.progressList[0].status === 0"><Button class="cancel-btn"  size="small" @click="cancel(item.applyId)">取り消し</Button></Col>
      </Row>
      <Row>
        <Col span="20" style="margin-left: 4.5%" class="description light-grey">{{ item.remark }}</Col>
      </Row>
      <Row>
        <Col span="20" style="margin-left: 4.5%" class="description red">{{ handleDenyText(item.progressList) }}</Col>
      </Row>
      <Row>
        <Col span="6" offset="17" class="description light-grey mt10">{{ `申請日時：${item.updateTime}` }}</Col>
      </Row>
    </li>
    <div v-loading="loading" style="top:-20px"></div>
  </ul>
</template>
<script>
export default {
  name: 'PersonalApplyTable',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: Array
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    handleApplyMarkShow(e) {
      switch (e) {
        case 0:
          return 'apply-status ing'
        case 1:
          return 'apply-status ok'
        case 2:
          return 'apply-status deny'
        case 3:
          return 'apply-status ok'
        default:
          return 'apply-status'
      }
    },
    handleTimelineDotShow(e) {
      switch (e) {
        case 0:
          return 'with-dot ing'
        case 2:
          return 'with-dot deny'
        case 3:
          return 'with-dot cancel'
        default:
          return 'with-dot'
      }
    },
    handleDenyText(e) {
      const target = e.find(e => e.status === 2)
      if (target) return `拒否理由：${target.remark ? target.remark : 'なし'}`
      else return ''
    },
    handleApplyDayShow(e) {
      if(e.length === 1) {
        return e.join('')
      }
      return `${e[0]} ～ ${e[e.length - 1]}`
    },
    handleAdminflowShow(item) {
      if (item.status === 2) {
        const index = item.progressList.findIndex(e => e.status === 2) + 1
        return item.progressList.slice(0, index)
      } else {
        return item.progressList
      }
    },
    cancel(e) {
      this.$emit('cancel', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.apply-status {
  display: inline-block;
  width: 24px;
  border-radius: 50%;
  box-shadow: 0px 1px 2px 0px $box-shadow;
  &:after {
    position: relative;
    left: 4px;
  }
  &.ok {
    color: $theme-blue;
    background-color: $light-blue;
    &:after {
      content: '済';
    }
  }
  &.deny {
    color: $red;
    background-color: $light-pink;
    &:after {
      content: '否';
    }
  }
  &.ing {
    color: $text-green;
    background-color: $table-td-hover;
    &:after {
      content: '申';
    }
  }
}

.apply-history-list {
  background: linear-gradient(to bottom, #ccc 80%, transparent 100%) no-repeat
    left 19px top 15px/1px 100%;
  text-align: left;
  position: relative;
  right: -32px;
  max-height: 70vh;
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
      background: $primary-background;
    }
    &.deny::before {
      background: $error-background;
    }
    &.ing::before {
      background: $success-background;
    }
    &.cancel::before {
      background: linear-gradient(120deg, $user-avatar-background, $text-light-grey);
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
</style>
