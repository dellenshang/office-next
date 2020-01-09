<template>
  <div>
    <Button type="primary" :size="btnSize" @click="updateDate" icon="md-create">保存</Button>
  </div>
</template>
<style lang="scss" scoped>
</style>

<script>
export default {
  name: 'UpdateBotton',
  components: {},
  data: function() {
    return {
      btnSize: 'large'
    }
  },
  computed: {
    functionC() {
      return ''
    }
  },
  methods: {
    updateDate() {
      this.$emit('update')
    }
  }
}
</script>
