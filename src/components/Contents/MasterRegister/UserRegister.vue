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
          <UserAdd
            v-auth="['save']"
            :isAdd="isAdd"
            ref="addData"
            @add="onAdd"
            key="forReset-1"
            v-if="forReset === true"
          />
          <UserAdd
            v-auth="['save']"
            :isAdd="isAdd"
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
        <Checkbox class="mar" v-model="opts.leave" @on-change="keywordSearch">退職者を表示します</Checkbox>
        <span class="place-holder"></span>
      </div>
    </div>
    <div class="content_body">
      <UserTable
        @refresh="refresh($event)"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @update="onUpdate"
        @delete="onDelete"
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
.mar {
  /deep/.ivu-checkbox {
    margin-right: 5px;
  }
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
import UserTable from './Tables/UserTable'
import UserAdd from './ComplexButton/UserAdd'
import Buttons from '../../Buttons'
export default {
  name: 'UserRegister',
  components: {
    UserTable,
    UserAdd,
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
      opts: {
        sidx: 'update_time',
        order: 'desc',
        page: null,
        keyword: null,
        leave: false,
        limit: this.utils.getStorage('SO_userSettings', 'pageSize') || 20,
        deptId: null
      }
    }
  },
  created: function() {
    this.getData()
  },
  activated() {
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
      'user/Action_User_Get',
      'user/Action_User_Add',
      'user/Action_User_Update',
      'user/Action_User_Delete',
      'happy/Action_Happy_Get',
      'role/Action_Role_Get_Mutiselect'
    ]),
    getData: Debounce(function(flag) {
      const opts = {
        sidx: 'update_time',
        order: 'desc',
        limit: this.utils.getStorage('SO_userSettings', 'pageSize') || 20,
        leaveFlag: this.opts.leaveFlag
      }
      if (flag) {
        this['user/Action_User_Get']({ value: opts, context: this })
      } else {
        this['user/Action_User_Get']({ value: this.opts, context: this })
      }
      this['happy/Action_Happy_Get']({ context: this })
      this['role/Action_Role_Get_Mutiselect']()
    }),
    keywordSearch() {
      this['user/Action_User_Get']({ value: this.opts, context: this })
    },
    onAdd() {
      const value = this.$refs.addData.localValue
      this.forReset = !this.forReset
      if (value) {
        this['user/Action_User_Add']({ value: [value], context: this })
      }
    },
    onUpdate(value) {
      this['user/Action_User_Update']({ value, context: this })
    },
    onDelete(value) {
      this['user/Action_User_Delete']({ value: [value], context: this })
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
      this['user/Action_User_Get']({ value: this.opts, context: this })
    },
    sizeChange(e) {
      this.opts.limit = e
      this.utils.setStorage('SO_userSettings', { pageSize: e })
      this['user/Action_User_Get']({ value: this.opts, context: this })
    },
    haddleFliter(filterName) {
      // 回到第一页
      this.opts.page = null
      this.$refs.tableData.$refs.Page.currentPage = 1
      this.opts.groupId = this.filterName
      return this['user/Action_User_Get']({ value: this.opts, context: this })

    },
    handleCascaderView(labels) {
      return labels[labels.length - 1]
    },
    handleSearch(flag) {
      if(!flag) {
        this.opts.deptId = this.searchLevel[this.searchLevel.length - 1]
         this['user/Action_User_Get']({ value: this.opts, context: this })
      }
    }
  }
}
</script>
