<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1><Icon type="i-employeetr colored"></Icon>職員区分登録</h1>
        </div>
        <div class="btnbox">
          <!-- 三个按钮 -->
          <CreateBotton v-auth="['add']" @add="onAdd" name="EmployeeTypeAdd" />
          <UpdateBotton v-auth="['update']" @update="onUpdate" />
          <DeleteBotton v-auth="['delete']" @remove="onRemove" />
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
    </div>
    <div class="content_body">
      <EmployeeTypeTable ref="tableData" />
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
/* eslint-disable prettier/prettier */
import EmployeeTypeTable from './Tables/EmployeeTypeTable'
import { mapActions } from 'vuex'
import Buttons from '../../Buttons'
export default {
  name: 'EmployeeTypeRegister',
  components: {
    EmployeeTypeTable,
    CreateBotton: Buttons.CreateBotton,
    DeleteBotton: Buttons.DeleteBotton,
    UpdateBotton: Buttons.UpdateBotton,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      forReset: true,
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
    // this.getData()
  },
  computed: {},
  methods: {
      ...mapActions([
      'Action_EmployeeType_Get',
      'Action_EmployeeType_Add',
      'Action_EmployeeType_Update',
      'Action_EmployeeType_Delete'
    ]),
    getData() {
      // this.Action_EmployeeType_Get()
    },
    onAdd() {
      const add = this.getcha.nearChildren(this, 'EmployeeTypeAdd').localValue
      this.forReset = !this.forReset
      if (add) {
        // 点击追加，增加一条
        this.Action_EmployeeType_Add(add).then(() => this.$Message.success('追加完了'))
      }
    },
    onUpdate() {
      const selectedObject = this.$refs.tableData.value
      if (selectedObject.length !== 0) {
          return this.Action_EmployeeType_Update(selectedObject).then(() =>
          this.$Message.success('更新完了')
        )
      }
      return this.$Modal.warning({
          title: '注意',
          content: "修正した項目がないので、保存できませんでした。"
      })
    },
    onRemove() {
      const selectedID = this.$refs.tableData.value
        .map(e => e.memberDivisionCode)
        .join()
      if (selectedID.length !== 0) {
        // 删除任意条
        return this.Action_EmployeeType_Delete(selectedID).then(() =>
          this.$Message.success('削除完了')
        )
      }
      return this.$Modal.warning({
        title: '注意',
        content: '選択した項目がないので、削除できませんでした。'
      })
    },
    onRefresh() {
      this.Action_EmployeeType_Get().then(() => {
        this.$Modal.success({ title: '再表示成功しました。' })
      })
    },
    keywordSearch() {
    }
  }
}
</script>
