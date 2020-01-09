<template>
  <span>
    <Poptip v-model="visible" placement="left" v-if="isLight === true" transfer>
      <div class="operateBtn" slot="content">
        <a @click="cancel">いいえ</a>
        <a @click="remove">はい</a>
      </div>
      <Button class="collapse-btn" :type="type" ghost :size="size" icon="md-trash">{{text}}</Button>
    </Poptip>
    <Button type="error" size="large" @click="deleteModal = true" icon="md-trash" v-else>削除</Button>
    <Modal v-model="deleteModal" v-if="isLight === false">
      <Divider dashed orientation="left" style="margin-bottom: 30px">注意</Divider>
      <h2 style="color: rgb(252,13,27); position:relative; top:-6px">削除してよろしいでしょうか</h2>
      <div slot="footer">
        <Button type="text" @click="cancel">キャンセル</Button>
        <Button type="error" size="large" @click="remove">削除</Button>
      </div>
    </Modal>
  </span>
</template>

<script>
export default {
  name: 'DeleteBotton',
  props: {
    isLight: Boolean,
    size: {
      type: String,
      default: 'small'
    },
    text:{
      type: String,
      default: '削除'
    },
    type: {
      type: String,
      default: 'error'
    }
  },
  components: {},
  data: function() {
    return {
      deleteModal: false,
      visible: false
    }
  },
  computed: {
    functionC() {
      return ''
    }
  },
  methods: {
    remove() {
      this.$emit('remove')
      this.deleteModal = false
      this.visible = false
    },
    cancel() {
      if (this.deleteModal) {
        this.deleteModal = false
      }
      if (this.visible) {
        this.visible = false
      }
    }
  }
}
</script>
