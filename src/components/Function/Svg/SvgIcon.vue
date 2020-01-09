<template>
  <svg :class="svgStyle" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    svgName: {
      type: String
    },
    svgClass: {
      type: String
    }
    // 在這裏傳入寬高和引用時傳入一樣，都是外層的svg的寬高，use裏面的svg，始終是100%
  },
  computed: {
    iconName() {
      return `#${this.svgName}`
    },
    svgStyle() {
      if (this.svgClass) {
        return 'i-svg' + this.className
      } else {
        return 'i-svg'
      }
    }
  }
}
</script>

<style scoped>
.i-svg {
  fill: white;
  margin: 12px 20px 0 9px;
  overflow: hidden;
  width: 20px;
  height: 20px;
}
</style>
