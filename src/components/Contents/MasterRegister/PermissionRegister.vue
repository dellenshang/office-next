<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-holidayr colored"></Icon>{{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox">
          <PermissionAdd v-auth="['save','select']" @add="onAdd" key="forReset-1" v-if="forReset === true" :isAdd="true"/>
          <PermissionAdd v-auth="['save','select']" @add="onAdd" key="forReset-2" v-else :isAdd="true"/>
          <RefreshBotton @refresh="onRefresh"/>
        </div>
      </div>
      <div class="searchwrap">
        <span class="label">キーワード</span>
        <Input
          @on-search="keywordSearch"
          class="mar like-select"
          v-model="keyword"
          search
          enter-button
        />
        <span class="place-holder"></span>
      </div>
    </div>
    <div class="content_body">
      <PermissionTable @delete="onRemove" @update="onUpdate" :data="roleList" :loading="loading" ref="tableData"/>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
/deep/.like-select {
  width: 15%;
  top: 0;
  .ivu-input-group-append {
    background: $table-head !important;
    border: none;
    &:hover {
      background: $theme-blue !important;
    }
  }
}
</style>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { Debounce } from '@/api/utils'
import PermissionTable from './Tables/PermissionTable'
import Buttons from '../../Buttons'
import PermissionAdd from './ComplexButton/PermissionAdd'
export default {
  name: 'PermissionRegister',
  components: {
    PermissionAdd,
    PermissionTable,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      value: {
        holidayDate: '',
        memo: '',
        lawOrSetVacationFlg: ''
      },
      keyword: '',
      loading: false,
      forReset: false,
      test: '',
      data1: []
    }
  },
  created() {
    this.getData()
    // const { data } = await this.api.auth('autoList')
    // this.data1 = data
  },
  activated() {
    this.getData()
  },
  computed: {
    ...mapState(['role']),
    roleList() {
      return this.role.tableList
    }
  },
  methods: {
    ...mapMutations(['setAuthList']),
    ...mapActions([
      'role/Action_Role_Get',
      'role/Action_Role_Add',
      'role/Action_Role_Update',
      'role/Action_Role_Delete',
      'auth/Action_Menu_Get_Tree'
    ]),
    getData: Debounce(function() {
      this['role/Action_Role_Get']({ context: this })
      this['auth/Action_Menu_Get_Tree']()
    }),
    onAdd() {
      const value = this.getcha.nearChildren(this, 'PermissionAdd').localValue
      this.forReset = !this.forReset
      this['role/Action_Role_Add']({ context: this, value: [value] })
    },
    async onRemove(id) {
      this['role/Action_Role_Delete']({ context: this, value: id })
    },
    async onUpdate(e) {
      this['role/Action_Role_Update']({ context: this, value: [e] })
    },
    onRefresh() {
      this.getData()
      this.keyword = ''
    },
    keywordSearch() {
      this['role/Action_Role_Get']({ value: { name: this.keyword }, context: this })
    }
  }
}
</script>
