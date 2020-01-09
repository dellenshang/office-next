<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-departmentr colored"></Icon>{{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox">
          <!-- 三个按钮 -->
          <UpdateBotton v-auth="['update']" @update="onUpdate" />
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
      </div>
    </div>
    <div class="content_body">
      <MinisterTable ref="tableData" />
    </div>
  </Content>
</template>

<style lang="scss" scoped></style>

<script>
import { mapState, mapActions } from 'vuex'
import MinisterTable from './Tables/MinisterTable'
import Buttons from '../../Buttons'
export default {
  name: 'MinisterRegister',
  components: {
    MinisterTable,
    UpdateBotton: Buttons.UpdateBotton,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      searchLevel: []
    }
  },
  created: function() {
    this.getData()
  },
  computed: {
    ...mapState(['dept']),
    data() {
      return this.dept.searchList instanceof Array
        ? this.dept.searchList
        : [this.dept.searchList]
    }
  },
  methods: {
    ...mapActions([
      'department/Action_Dept_Get',
      'department/Action_Dept_Update_Leader',
      'user/Action_User_Leader_Get'
    ]),
    getData() {
      this['department/Action_Dept_Get']({ hasLeader: true })
      this['user/Action_User_Leader_Get']()
    },
    async onAdd() {
      const target = this.getcha.nearChildren(this, 'DepartmentAdd')
      const add = { ...target.localValue }
      target.$refs.localValue.resetFields()
      if (add) {
        this.Action_Dept_Add_Leader(add).then(() =>
          this.$Message.success('追加完了')
        )
      }
    },
    onUpdate() {
      const selectedObject = this.$refs.tableData.value.map(e => { return { leaderIdList:e.leaderList, deptId:e.deptId }})
      if (selectedObject.length !== 0) {
        // 更新任意条
        return this['department/Action_Dept_Update_Leader']({ context: this, value:selectedObject })
      }
      return this.$Modal.warning({
        title: '注意',
        content: '修正した項目がないので、保存できませんでした。'
      })
    },
    handleCascaderView(labels) {
      return labels[labels.length - 1]
    },
    handleSearch(visibleStatus) {
      if (!visibleStatus) {
        this.$nextTick(()=>{
          const id = this.searchLevel[this.searchLevel.length - 1]
          this['department/Action_Dept_Get']({ id, hasLeader: true })
        })
      }
    },
    onRefresh() {
      this['department/Action_Dept_Get']({ hasLeader: true }).then(() => {
        this.$Modal.success({ title: '再表示成功しました。' })
      })
    }
  }
}
</script>
