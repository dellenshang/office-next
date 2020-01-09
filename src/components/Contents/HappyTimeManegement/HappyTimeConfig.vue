<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-happytime colored"></Icon>{{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox ml5">
          <CreateBotton
            v-auth="['save']"
            @add="onAdd"
            modalWidth="850"
            name="HappyTimeAdd"
            v-if="forReset === true"
            key="forReset-1"
          />
          <CreateBotton
            v-auth="['save']"
            @add="onAdd"
            modalWidth="850"
            name="HappyTimeAdd"
            v-else
            key="forReset-2"
          />
          <RefreshBotton @refresh="onRefresh" />
        </div>
      </div>
    </div>
    <div class="content_body" v-loading="loading">
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row }" slot="type">
          <span> {{ row.vacationType === 1 && row.type && row.type === 1 ? "勤務年数による付与" : "指定日による付与" }} </span>
        </template>

        <template slot-scope="{ row }" slot="vacationType">
          <span> {{ whenToPaidVacation(row) }} </span>
        </template>

        <template slot-scope="{ row }" slot="remark">
          <span> {{ row.remark ?  row.remark : '' }} </span>
        </template>

        <template slot-scope="{ row }" slot="action">
          <Button></Button>
        </template>
      </Table>
    </div>
  </Content>
</template>

<style lang="scss" scoped>

</style>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('happy')
import Buttons from '../../Buttons'
export default {
  name: 'HappyTimeConfig',
  components: {
    CreateBotton: Buttons.CreateBotton,
    RefreshBotton: Buttons.RefreshBotton
  },
  data: function() {
    return {
      searchVal: {},
      columns: [
        {
          title: '名称',
          key: 'name',
          align: 'center'
        },
        {
          title: 'どのように付与',
          slot: 'type',
          align: 'center'
        },
        {
          title: 'いつ付与',
          slot: 'vacationType',
          align: 'center'
        },
        {
          title: '備考',
          slot: 'remark'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      loading: false,
      forReset: false,
    }
  },
  computed: {
    ...mapState(['list']),
    data() {
      let tableData = []
      this.list.forEach(e => {
        if(e instanceof Array) return e.forEach(_e => tableData.push(_e))
         return tableData.push(e)
      })
      return tableData
    }
  },
  created() {
    this.Action_Happy_Get({ context: this })
  },
  methods: {
    ...mapActions([
      'Action_Happy_Add',
      'Action_Happy_Update',
      'Action_Happy_Delete',
      'Action_Happy_Get'
    ]),
    onAdd() {
      const value = this.getcha.nearChildren(this, 'HappyTimeAdd').localValue
      console.log(value)
      this.forReset = !this.forReset
      if (value) {
        this.Action_Happy_Add({ value, context: this })
      }
    },
    onRefresh() {
      this.Action_Happy_Get({ context: this })
    },
    onDelete(id) {
      this.Action_Happy_Delete({ value: { id }, context: this })
    },
    whenToPaidVacation(row) {
      console.log(row)
      if(!row.type) return
      if(row.vacationType === 1 && row.type === 2) {
        return '法定（６ヵ月＋１年）付与'
      }
      // todo: 单个基准日时无row.vacationType
      if(!row.vacationType && row.vacationId) {
        return '一斉付与（基準日一つ）'
      }
      if(row.collectionId) {
        return '一斉付与（入社日に応じて基準日が複数有）'
      }
    }
  }
}
</script>
