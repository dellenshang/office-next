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
      <MenuTable
        :data="tableMenu"
        :casMenu="casMenu"
        @add="onAdd"
        @update="onUpdate"
        @delete="onDelete"
        ref="table"
      />
    </div>
  </Content>
</template>
<style lang="scss" scoped>
</style>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('auth')
import MenuTable from './Tables/MenuTable'
import Buttons from '../../Buttons'
export default {
  name: 'MenuRegister',
  components: {
    MenuTable,
    RefreshBotton: Buttons.RefreshBotton
  },
  data() {
    return {}
  },
  mounted() {
    this.Action_Menu_Get_Table({ context: this.$refs.table })
    this.Action_Menu_Get_Cas()
  },
  computed: {
    ...mapState(['tableMenu', 'casMenu'])
  },
  methods: {
    ...mapActions([
      'Action_Menu_Add',
      'Action_Menu_Update',
      'Action_Menu_Delete',
      'Action_Menu_Get_Table',
      'Action_Menu_Get_Cas'
    ]),
    onUpdate(value) {
      this.Action_Menu_Update({ context: this.$refs.table, value })
    },
    onAdd(value) {
      this.Action_Menu_Add({ context: this.$refs.table, value })
    },
    onDelete(value) {
      this.Action_Menu_Delete({ context: this.$refs.table, value })
    },
    onRefresh() {
      history.go(0)
    }
  }
}
</script>
