<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-resttimer colored"></Icon>{{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox">
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
    </div>
    <div class="content_body">
      <Card class="card second">
        <Row>
          <Col span="8">
            <figure class="img-warp">
              <img :src="avatarImg" alt="アイコンイメージ" />
            </figure>
          </Col>
          <Col span="16">
          <AvatarUpload/>
          </Col>
        </Row>
      </Card>
    </div>
  </Content>
</template>
<style lang="scss" scoped>
.content_body {
  display: flex;
  align-items: flex-start;
  .card {
    width: 33vw;
  }
  .img-warp {
    width: 160px;
    height: 160px;
    border: 1px solid $light-grey;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>

<script>
import AvatarUpload from '../../Function/AvatarUpload/AvatarUpload'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('auth')
import Buttons from '../../Buttons'
export default {
  name: 'ProfileRegister',
  components: {
    RefreshBotton: Buttons.RefreshBotton,
    AvatarUpload
  },
  data: function() {
    return {
      value: {
        hourRestCode: '',
        hourRestName: '',
        hourRestTime: ''
      },
      index: [],
      forReset: false,
      avatarImg: require('./1.jpg')
    }
  },
  created() {},
  computed: {},
  methods: {
    ...mapActions([
      'Action_Menu_Get',
      'Action_Menu_Add',
      'Action_Menu_Update',
      'Action_Menu_Get_Cas'
    ]),
    onAdd() {
      const value = this.getcha.nearChildren(this, 'MenuAdd').localValue
      this.forReset = !this.forReset
      if (value) {
        this.Action_Menu_Add({ context: this, value })
      }
    },
    onRefresh() {
      this.Action_Menu_Get()
    }
  }
}
</script>
