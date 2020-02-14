<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="light" :active-name="$route.meta.parentId">
          <VHeader />
        </Menu>
      </Header>
      <Layout>
        <Sider width="200" v-model="isCollapsed" collapsible :collapsed-width="45">
          <Menu theme="light" width="auto" class="sider-left" :active-name="$route.meta.name">
            <MasterSider :currentSider="$route.meta.parentId" />
          </Menu>
        </Sider>
        <Layout @scroll.native.passive="handleScroll" ref="layout">
          <keep-alive :include="keepAliveRoute">
            <router-view />
          </keep-alive>
        </Layout>
      </Layout>
      <span :class="toTopBtn" v-show="isScroll" @click="toTop">
        <Icon type="md-arrow-round-up" size="24" />
      </span>
      <!-- <Footer class="myapp layout-footer-center">2019 &copy; SmartOffice</Footer> -->
    </Layout>
  </div>
</template>
<style lang="scss" scoped>
.sider-left {
  text-align: left;
  max-height: calc(100vh - 51px);
  // padding-bottom: 50px;
  // overflow-y: auto;
  // overflow-x: hidden;
}
.toTopBtn {
  position: fixed;
  height: 50px;
  width: 35px;
  line-height: 50px;
  text-align: center;
  background: $toTopBtn-background;
  border-radius: 25px;
  right: 15px;
  bottom: 120px;
  color: $white;
  // font-weight: 600;
  cursor: pointer;
  z-index: 100;
  // 没有打刻按钮的时候
  &.solo {
    width: 29px;
    right: 16px;
    bottom: 19px;
  }
}
</style>
<script>
import VHeader from '../components/Header/VHeader'
import Siders from '../components/Sider'
import { Throttle } from '@/api/utils'
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    VHeader,
    MasterSider: Siders.MasterSider
  },
  data() {
    return {
      tabIndex: '0',
      tabs: 1,
      isCollapsed: false,
      keepAliveRoute: ['DepartmentRegister', 'PersonalApply'],
      historyPage: [],
      isScroll: false
    }
  },
  computed: {
    ...mapState(['user']),
    toTopBtn() {
      if (!this.user.enableSign) {
        return 'toTopBtn solo'
      }
      return 'toTopBtn'
    }
  },
  methods: {
    handleTab(i) {
      if (i) {
        const tab = this.historyPage[i - 1]
        const path = `/home/${tab}`
        return this.$router.push(path)
      }
    },
    handleClose(i) {
      this.tabs--
      this.historyPage.splice(i - 1, 1)
      const tab = this.historyPage[i - 2]
      const path = `/home/${tab}`
      return this.$router.push(path)
    },
    handleScroll: Throttle(function(e) {
      if (e.target.scrollTop > 200) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
    }, 600),
    toTop() {
      const animateMachine = window.requestAnimationFrame(this.toTop)
      this.$refs.layout.$el.scrollTop =
        this.$refs.layout.$el.scrollTop - this.$refs.layout.$el.scrollTop / 5
      if (this.$refs.layout.$el.scrollTop === 0) {
        window.cancelAnimationFrame(animateMachine)
      }
    }
  }
}
</script>
