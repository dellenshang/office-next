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
  opacity: 1;
  animation: slideInFromRight 1s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.slide-in-leave-active {
  animation: slideOutScaleLeft 1s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.slide-out-enter-active {
  opacity: 1;
  animation: slideInFromLeft 1s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.slide-out-leave-active {
  animation: slideOutScaleRight 1s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.refresh-enter-active {
  opacity: 1;
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
    transform: translateX(100%);
  }
  to {
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
      const fromPath = from.path
      if (fromPath === '/' && toPath === '/home') {
        this.login = 'slide-in'
        return
      }
      if (toPath === '/') {
        this.login = 'slide-out'
        return
      }
      this.login = 'refresh'
    }
  }
}
</script>
