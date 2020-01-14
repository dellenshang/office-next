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
          <PermissionAdd v-auth="['save','select']"  key="forReset-1" v-if="forReset === true" :isAdd="true"/>
          <PermissionAdd v-auth="['save','select']"  key="forReset-2" v-else :isAdd="true"/>
          <RefreshBotton/>
        </div>
      </div>
      <div class="searchwrap">
        <span class="label">キーワード</span>
        <Input
          class="mar like-select"
          v-model="keyword"
          search
          enter-button
        />
        <span class="place-holder"></span>
      </div>
    </div>
    <div class="content_body">
      <PermissionTable :data="roleList" :loading="loading" ref="tableData"/>
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
  computed: {
    roleList() {
      return [
      { roleId: 2, name: "一般", role: "normal" },
      { roleId: 3, name: "所属長", role: "dept_leader" },
      { roleId: 4, name: "総務", role: "general_affair" },
      { roleId: 5, name: "システム", role: "manager" }
    ]
    }
  },
  methods: {
  }
}
</script>
