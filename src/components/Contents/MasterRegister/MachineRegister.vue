<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-departmentr colored"></Icon>端末登録
          </h1>
        </div>
        <div class="btnbox">
          <!-- 三个按钮 -->
          <CreateBotton v-auth="['add']" @add="onAdd" name="MachineAdd"/>
          <UpdateBotton v-auth="['update']" @update="onUpdate"/>
          <DeleteBotton v-auth="['delete']" @remove="onRemove"/>
          <RefreshBotton @refresh="onRefresh"/>
        </div>
      </div>
    </div>
    <div class="content_body">
      <MachineTable ref="tableData"/>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
</style>

<script>
import MachineTable from './Tables/MachineTable'
import Buttons from '../../Buttons'
export default {
  name: 'MachineRegister',
  components: {
    MachineTable,
    CreateBotton: Buttons.CreateBotton,
    DeleteBotton: Buttons.DeleteBotton,
    UpdateBotton: Buttons.UpdateBotton,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      fetchSign: false
    }
  },
  created: function() {
  },
  // activated() {
  //   this.getData()
  // },
  computed: {},
  methods: {
    onAdd() {
      const target = this.getcha.nearChildren(this, 'MachineAdd')
      const add = { ...target.localValue }
      target.$refs.localValue.resetFields()
      if (add) {
        this.api.machine('add', add).then(() => {
          this.getData()
          this.$Message.success('追加完了')
        })
      }
    },
    onUpdate() {
      const selectedObject = this.$refs.tableData.value
      if (selectedObject.length !== 0) {
        // 更新任意条
        return this.api.machine('update', selectedObject).then(() => {
          this.getData()
          this.$Message.success('更新完了')
        })
      }
      return this.$Modal.warning({
        title: '注意',
        content: '修正した項目がないので、保存できませんでした。'
      })
    },
    onRemove() {
      const selectedID = this.$refs.tableData.value.map(e => e.serialNo)
      if (selectedID.length !== 0) {
        // 删除任意条
        return this.api.machine('delete', selectedID).then(() => {
          this.getData()
          this.$Message.success('削除完了')
        })
      }
      return this.$Modal.warning({
        title: '注意',
        content: '選択した項目がないので、削除できませんでした。'
      })
    },
    onRefresh() {
      this.getData().then(() => {
        this.$Modal.success({ title: '再表示成功しました。' })
      })
    }
  }
}
</script>
