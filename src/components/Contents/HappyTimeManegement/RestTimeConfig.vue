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
          <CreateBotton v-auth="['add']" @add="onAdd" name="RestTypeAdd"/>
          <UpdateBotton v-auth="['update']" @update="onUpdate"/>
          <DeleteBotton v-auth="['delete']" @remove="onRemove"/>
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
    </div>
    <div class="content_body">
      <RestTimeConfigTable ref="tableData" :data="tableList" :loading="loading"/>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
</style>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('restType')
import { Debounce } from '@/api/utils'
import RestTimeConfigTable from './Tables/RestTimeConfigTable'
import Buttons from '../../Buttons'
export default {
  name: 'RestTimeConfig',
  components: {
    RestTimeConfigTable,
    CreateBotton: Buttons.CreateBotton,
    DeleteBotton: Buttons.DeleteBotton,
    UpdateBotton: Buttons.UpdateBotton,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      filterName: '',
      loading: false,
      fetchfix: true
    }
  },
  created() {
    this.Action_RestType_Get({ context: this })
  },
  activated() {
    if (this.fetchfix) {
      return this.fetchfix = false
    }
    this.Action_RestType_Get({ context: this })
  },
  computed: {
    ...mapState(['list']),
    tableList() {
      return this.list
    },
    pageValue() {
      return {
        amount: 0,
        list: [20, 30, 50, 100],
        curSize: this.opts.limit
      }
    }
  },
  methods: {
    ...mapActions([
      'Action_RestType_Add',
      'Action_RestType_Update',
      'Action_RestType_Delete',
      'Action_RestType_Get'
    ]),
    onAdd() {
      const add = {...this.getcha.nearChildren(this, 'RestTypeAdd').localValue}
      if(add.paid===1) add.paid = true
       else add.paid = false
      if(add.law===1) add.law = true
       else add.law = false
      this['Action_RestType_Add']({ value: [add], context: this })
    },
    onUpdate() {
      this['Action_RestType_Update']({ value: this.$refs.tableData.value, context: this })
    },
    onRemove() {
      const selectedID = this.$refs.tableData.value.map(e => e.restTypeId)
      this['Action_RestType_Delete']({ value: selectedID, context: this })
    },
    onRefresh() {
      this.Action_RestType_Get({ context: this })
    }
  }
}
</script>
