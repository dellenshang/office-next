<template>
  <div class="loginbox">
    <div class="logininner">
      <!-- <LangSelecter/> -->
      <div class="logonj">
        <i class="logo"></i>
      </div>
      <Form ref="login" :model="login" :rules="ruleValidate" class="loginform">
        <FormItem class="loginItem" prop="username">
          <h1>{{$t("login.account")}}</h1>
          <Input
            prefix="ios-contact"
            v-model="login.username"
            @keyup.enter.native="loging"
            :placeholder="$t('login.account')"
          />
        </FormItem>

        <FormItem class="loginItem" prop="password">
          <h1>{{$t("login.password")}}</h1>
          <Input
            prefix="ios-key"
            v-model="login.password"
            @keyup.enter.native="loging"
            :placeholder="$t('login.password')"
            type="password"
            autocomplete="new-password"
          />
        </FormItem>
        <div class="text-right">
          <a>{{$t("login.forgot")}}</a>
        </div>
        <FormItem class="loginbtn">
          <Button
            @click="loging"
            shape="circle"
            type="primary"
            :loading="loading"
          >{{$t("login.login")}}</Button>
        </FormItem>
      </Form>
      <animateLogo/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loginbox {
  position: absolute;
  width: 40vw;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: $white;
  .logonj {
    text-align: left;
    margin-bottom: 43px;
    .logo {
    }
  }
  .logininner {
    margin: 150px 100px 0 100px;
    .loginform {
      text-align: left;
      .loginItem {
        margin-bottom: 20px;
        &:first-child {
          margin-bottom: 50px;
        }
      }
      h1 {
        font-size: 16px;
        color: $login-h1;
        margin-bottom: 10px;
      }
    }
    @include respond-to(medium) {
      margin: 100px 50px 0 50px;
    }
  }
  @include respond-to(medium) {
    white-space: nowrap;
    @include size(100vw, 100vh);
  }
}
</style>

<script>
import { mapActions } from 'vuex'
import LangSelecter from './LangSelecter'
import animateLogo from '../../Buttons/CreateBottonModals/animatedSVG/logo'
export default {
  name: 'LoginPanel',
  components: { LangSelecter, animateLogo },
  data: function() {
    return {
      userCode: '',
      password: '',
      login: {
        username: '',
        password: ''
      },
      loading: false,
      ruleValidate: {
        username: [
          {
            required: true,
            message: this.$t('login.warn.account'),
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: this.$t('login.warn.password'),
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions(['Action_Login']),
    loging() {
      // 邮箱验证正则
      // const test = /^([a-zA-Z0-9_-]+(\.)*)+@([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]{2,3}$/
      // this.$refs.login.validate(valid => {
      //   if (valid) {
      //     const value = {
      //       username: this.login.username,
      //       password: this.login.password,
      //       lang: localStorage.getItem('locale') || 'ja_jp'
      //     }
      //     this.Action_Login({ value, context: this })
      //   }
      // })
      this.$router.push('sys/anytime/profile')
    }
  }
}
</script>
