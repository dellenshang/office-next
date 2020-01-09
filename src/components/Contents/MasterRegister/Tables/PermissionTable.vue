<template>
  <div>
    <Table
      stripe
      border
      :columns="columns"
      :data="data"
      v-loading="loading">
      <template slot-scope="{ row }" slot="role">
        <span>{{ row.role }}</span>
      </template>
      <template slot-scope="{ row }" slot="name">
        <span>{{ row.name }}</span>
      </template>
      <template slot-scope="{ row }" slot="remark">
        <span>{{ row.remark }}</span>
      </template>
      <template slot-scope="{ row }" slot="action">
        <Button type="primary" v-auth="['update']" ghost size="small" icon="ios-create" style="margin-right: 5px" @click="handleBtn(row.roleId)">訂正</Button>
        <DeleteBotton v-auth="['delete']" :isLight="true" @remove="onRemove(row.roleId)"/>
      </template>
    </Table>
    <PermissionAdd v-auth="['update']" @update="e => this.$emit('update', e)" ref="updateData" v-if="forRest1 === true" key="forRest-1"/>
    <PermissionAdd v-auth="['update']" @update="e => this.$emit('update', e)" ref="updateData" v-else key="forRest-2"/>
  </div>
</template>
<script>
import Buttons from '@/components/Buttons'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('auth')
import PermissionAdd from '../ComplexButton/PermissionAdd'
import { deepData } from '@/api/utils'
export default {
  name: 'PermissionTable',
  props: {
    data: Array,
    loading: Boolean
  },
  components: {
    PermissionAdd,
    DeleteBotton: Buttons.DeleteBotton
  },
  data() {
    return {
      columns: [
        {
          title: '授权标识',
          slot: 'role',
          minWidth: 100,
          align: 'center'
        },
        {
          title: '角色名称',
          slot: 'name',
          minWidth: 50,
          align: 'center'
        },
        {
          title: '备注',
          slot: 'remark',
          minWidth: 300,
          align: 'center'
        },
        {
          title: '操作',
          align: 'center',
          width: 180,
          slot: 'action'
        }
      ],
      forRest1: false,
      choosedLeaf: []
    }
  },
  computed: {
    ...mapState(['treeMenu']),
    treeData() {
      return this.treeMenu
    }
  },
  methods: {
    async handleBtn(id) {
      const { data } = await this.api.role('searchById', { id })
      const _updateData = this.$refs.updateData
      this.choosedLeaf = data.menuList.map(e => e.menuId)
      const curTree = this.utils.deepClone(this.treeData)
      deepData(curTree[0], this.isChoosed)
      _updateData.isShow = true
      _updateData.treeData = curTree
      _updateData.localValue = { ...data }
    },
    isChoosed(e) {
      if (this.choosedLeaf.includes(e.value)) {
        this.$set(e, 'checked', true)
      }
    },
    onRemove(id) {
      this.$emit('delete', [id])
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
