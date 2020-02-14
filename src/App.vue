<template>
  <div id="app">
    <transition :name="login">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@charset 'utf-8';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slide-in-enter-active {
  will-change: transform;
  animation: slideInFromRight 1s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.slide-in-leave-active {
  will-change: transform;
  animation: slideOutScaleLeft 1s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.slide-out-enter-active {
  will-change: transform, opacity;
  animation: slideInFromLeft 1s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.slide-out-leave-active {
  will-change: transform, opacity;
  animation: slideOutScaleRight 1s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.refresh-enter-active {
  animation: scaleDownUp 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
}

@keyframes slideOutScaleRight {
  from {
  } /* Fixes Chrome issue 35.0.1916.114 (easing breaks) */
  to {
    transform: translateX(100%) scale(0.9);
    opacity: 0;
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOutScaleLeft {
  from {
  } /* Fixes Chrome issue 35.0.1916.114 (easing breaks) */
  to {
    transform: translateX(-100%) scale(0.9);
    opacity: 0;
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleDownUp {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
// 备用
// #nav {
//   @include flex-column(flex-start);
//   flex: 1;
//   position: fixed;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   padding: 30px;
//   a {
//     font-weight: bold;
//     &.router-link-exact-active {
//       color: $vue-green;
//     }
//   }
// }
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      login: 'slide-in'
    }
  },
  watch: {
    $route(to, from) {
      const toPath = to.path
      // const fromName = from.name
      if (!to.name) {
        return
      }
      // 登陆特有过渡
      // if (fromName === 'login') {
      //   this.login = 'slide-in'
      //   return
      // }
      if (toPath === '/') {
        this.login = 'slide-out'
        return
      }
      this.login = 'refresh'
    }
  }
}
</script>
