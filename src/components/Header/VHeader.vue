<template>
  <div class="height-50">
    <span class="layout-logo"></span>
    <div class="layout-nav">
      <MenuItem
        v-for="menu of localMenu"
        :to="menu.to"
        :key="menu.siderUid"
        :name="menu.siderUid"
      >{{ menu.name }}</MenuItem>
    </div>
    <!-- <LangSelecter class="header-lang" /> -->
    <Dropdown trigger="hover" class="layout-Dropdown">
      <a>
        <Avatar style="background-color: #87d068;margin-left:10px;">USER</Avatar>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem @click.native="goProfile">{{this.user.userInfo.empInfo ?`${this.user.userInfo.empInfo.code} ${this.user.userInfo.empInfo.realName}` : `${this.user.userInfo.username}`}}</DropdownItem>
        <DropdownItem @click.native="logout">ログアウト</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <CheckIn/>
  </div>
</template>

<style lang="scss" scoped>
.height-50 {
  height: 50px;
}
.header-lang {
  right: 3rem;
}
.layout-Dropdown {
  position: absolute;
  right: 0;
  top: -3px;
  padding-right: 10px;
  line-height: 50px;
}
.layout-nav {
  display: inline-block;
}
</style>

<script>
/* eslint-disable prettier/prettier */
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import CheckIn from '../Contents/Main/CheckIn'
import LangSelecter from '../Contents/Main/LangSelecter'
export default {
  name: 'VHeader',
  components: { CheckIn, LangSelecter },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['user', 'auth']),
    localMenu() {
      return this.auth.headMenu
    }
  },
  methods: {
    ...mapMutations(['clearRoutes']),
    logout() {
      localStorage.removeItem('SO_login')
      this.clearRoutes()
      this.$router.push('/')
    },
    goProfile() {
      if (this.$route.path === '/sys/anytime/profile') {
        return
      }
      this.$router.push('/sys/anytime/profile')
    }
  }
}
</script>
