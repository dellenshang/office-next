<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-emeer colored"></Icon>{{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox">
          <AccountAdd
            v-auth="['save']"
            :isAdd="isAdd"
            :empolyeeList="empolyeeList"
            ref="addData"
            @add="onAdd"
            key="forReset-1"
            v-if="forReset === true"
          />
          <AccountAdd
            v-auth="['save']"
            :isAdd="isAdd"
            :empolyeeList="empolyeeList"
            ref="addData"
            @add="onAdd"
            key="forReset-2"
            v-else
          />
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
      <div class="searchwrap">
        <span class="label">所属名</span>
        <Cascader
          v-model="searchLevel"
          class="mr10"
          style="width: 200px;"
          :data="data"
          :render-format="handleCascaderView"
          @on-visible-change="handleSearch"
          filterable
          change-on-select
        ></Cascader>
        <span class="label">キーワード</span>
        <Input
          @on-search="keywordSearch"
          class="mar like-select"
          v-model="opts.keyword"
          placeholder="社員名或はコード"
          search
          enter-button
        />
        <span class="place-holder"></span>
      </div>
    </div>
    <div class="content_body">
      <AccountTable
        @refresh="refresh($event)"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @update="onUpdate"
        @delete="onDelete"
        :empolyeeList="empolyeeList"
        :loading="loading"
        ref="tableData"
      />
    </div>
  </Content>
</template>

<style lang="scss" scoped>
.place-holder {
  flex: 1;
}
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
import { mapState, mapActions } from 'vuex'
import { Debounce } from '@/api/utils'
import AccountTable from './Tables/AccountTable'
import AccountAdd from './ComplexButton/AccountAdd'
import Buttons from '../../Buttons'
export default {
  name: 'AccountRegister',
  components: {
    AccountTable,
    AccountAdd,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      value: {
        groupId: '',
        groupName: ''
      },
      isAdd: true,
      filterName: '',
      loading: false,
      forReset: false,
      searchLevel: [],
      empolyeeList: [],
      fetchfix: true,
      opts: {
        sidx: 'update_time',
        order: 'desc',
        page: null,
        keyword: null,
        limit: this.utils.getStorage('SO_userSettings', 'pageSize') || 20,
        deptId: null
      }
    }
  },
  created: function() {
    this.getData()
  },
  activated() {
    if (this.fetchfix) {
      return this.fetchfix = false
    }
    this.getData()
  },
  computed: {
    ...mapState(['dept', 'happy']),
    data() {
      return this.dept.searchList instanceof Array
        ? this.dept.searchList
        : [this.dept.searchList]
    }
  },
  methods: {
    ...mapActions([
      'account/Action_Account_Get',
      'account/Action_Account_Add',
      'account/Action_Account_Update',
      'account/Action_Account_Delete',
      'role/Action_Role_Get_Mutiselect'
    ]),
    getData(flag) {
      const opts = {
        sidx: 'update_time',
        order: 'desc',
        limit: this.utils.getStorage('SO_userSettings', 'pageSize') || 20
      }
      if (flag) {
        this['account/Action_Account_Get']({ value: opts, context: this })
      } else {
        this['account/Action_Account_Get']({ value: this.opts, context: this })
      }
      this['role/Action_Role_Get_Mutiselect']()
      this.api.user('view').then(({ data }) => (this.empolyeeList = data))
    },
    keywordSearch() {
      this['account/Action_Account_Get']({ value: this.opts, context: this })
    },
    onAdd() {
      const value = this.$refs.addData.localValue
      this.forReset = !this.forReset
      if (value) {
        this['account/Action_Account_Add']({ value: [value], context: this })
      }
    },
    onUpdate(value) {
      this['account/Action_Account_Update']({ value, context: this })
    },
    onDelete(value) {
      this['account/Action_Account_Delete']({ value: [value], context: this })
    },
    onRefresh() {
      this.getData(true)
      this.opts.keyword = null
      this.opts.deptId = null
      this.searchLevel = []
      this.$refs.tableData.$refs.Page.currentPage = 1
      this.$Message.success('再表示完了')
    },
    pageChange(e) {
      this.opts.page = e
      this['account/Action_Account_Get']({ value: this.opts, context: this })
    },
    sizeChange(e) {
      this.opts.limit = e
      this.utils.setStorage('SO_userSettings', { pageSize: e })
      this['account/Action_Account_Get']({ value: this.opts, context: this })
    },
    haddleFliter(filterName) {
      // 回到第一页
      this.opts.page = null
      this.$refs.tableData.$refs.Page.currentPage = 1
      this.opts.groupId = this.filterName
      return this['account/Action_Account_Get']({ value: this.opts, context: this })

    },
    handleCascaderView(labels) {
      return labels[labels.length - 1]
    },
    handleSearch(visibleStatus) {
      if(!visibleStatus) {
        this.$nextTick(()=>{
          this.opts.deptId = this.searchLevel[this.searchLevel.length - 1]
          this['account/Action_Account_Get']({ value: this.opts, context: this })
        })
      }
    }
  }
}
</script>
