<template>
  <div>
    <Button type="primary" size="large" @click="isShow = true" icon="md-add-circle">追加</Button>
    <Modal v-model="isShow" :width="modalWidth" :title="dynamicTitle(name)" @on-cancel="cancel" :fullscreen="fullscreen" footer-hide :mask-closable="false" draggable="true">
      <!-- <keep-alive> -->
        <component :is="name" @add="add" @cancel="cancel" ref="addData"/>
      <!-- </keep-alive> -->
    </Modal>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import Modals from './CreateBottonModals/index.js'
export default {
  name: 'CreateBotton',
  props: {
    name: String,
    modalWidth: {
      type: String,
      default: '520'
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MenuAdd: Modals.MenuAdd,
    HappyTimeAdd: Modals.HappyTimeAdd,
    RestTypeAdd: Modals.RestTypeAdd,
    MachineAdd: Modals.MachineAdd,
    EmployeeTypeAdd: Modals.EmployeeTypeAdd,
    HolidayAdd: Modals.HolidayAdd
  },
  data: function() {
    return {
      isShow: false
    }
  },
  methods: {
    add() {
      this.$emit('add')
      this.isShow = false
    },
    cancel() {
      this.isShow = false
      const target = this.$refs.addData.$refs.localValue
      if (target) {
        target.resetFields()
      }
    },
    dynamicTitle(option) {
      switch (option) {
        case 'MenuAdd':
          return 'メニュー登録'
        case 'HappyTimeAdd':
          return '有休設定登録'
        case 'RestTypeAdd':
          return '休暇申請登録'
        case 'MachineAdd':
          return '端末登録'
        case 'EmployeeTypeAdd':
          return '職員区分登録'
        case 'HolidayAdd':
          return '祝日登録'
      }
    }
  }
}
</script>
