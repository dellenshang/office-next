<template>
  <div>
    <MenuItem v-for="(value, index) of localMenu" :key="index" :to="`/${value.to}`" :name="value.activateName">
      <Tooltip :content="value.name" placement="right">
        <i-svg :svgName="value.icon" svgClass=""></i-svg>
        <span>{{ value.name }}</span>
      </Tooltip>
    </MenuItem>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
/* eslint-disable prettier/prettier */
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('auth')
export default {
  name: 'MasterSider',
  props: {
    currentSider: Number
  },
  components: {},
  data: function() {
    return {}
  },
  computed: {
    ...mapState(['rawMenu']),
    localMenu() {
      let menu = []
      this.rawMenu.some(e => {
        if (e.menuId === this.currentSider) {
          menu = e.children.map(e => {
            return {
              name: e.name,
              activateName: e.name,
              icon: e.icon,
              to:e.url
            }
          })
        }
      })
      // console.log(menu)
      return menu
    }
  },
  methods: {}
}
</script>
