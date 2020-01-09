<template>
  <div class="login">
    <LoginPanel/>
  </div>
</template>

<script>
import LoginPanel from '@/components/Contents/Main/LoginPanel'

export default {
  name: 'login',
  components: {
    LoginPanel
  }
}
</script>
<style lang="scss" scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-image: $login-background;
}
</style>
