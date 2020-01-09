<template>
  <Button type="primary" ghost @click="refresh" :size="btnSize" icon="md-refresh">再表示</Button>
</template>
<style lang="scss" scoped>
</style>

<script>
export default {
  name: 'RefreshBotton',
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
    refresh() {
      this.$emit('refresh')
    }
  }
}
</script>
