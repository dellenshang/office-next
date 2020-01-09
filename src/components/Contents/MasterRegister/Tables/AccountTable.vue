<template>
  <div>
    <div class="table-top">
      <Row :gutter="16">
        <Col span="24" class="text-right">
          <Page
            :total="pageValue.amount"
            :current="pageValue.curPage"
            show-total
            show-sizer
            :page-size="pageValue.curSize"
            :page-size-opts="pageValue.list"
            @on-change="pageChange"
            @on-page-size-change="sizeChange" ref="Page"/>
        </Col>
      </Row>
    </div>
    <Table border :columns="columns" :data="data" v-loading="loading">
      <template slot-scope="{ row }" slot="code">
        <span>{{ row.username }}</span>
      </template>

      <template slot-scope="{ row }" slot="realName">
        <span>{{ row.empInfo.realName }}</span>
      </template>

      <template v-if="row.roleList" slot-scope="{ row }" slot="roleList">
        <span class="row-label-primary" v-for="(item, index) of row.roleList" :key="index">{{ role.list.find(e => e.value === item).label }}</span>
      </template>

      <template slot-scope="{ row }" slot="restMode">
        <span>{{ row.restMode }}</span>
      </template>

      <template slot-scope="{ row }" slot="latestLoginTime">
        <span>{{ row.latestLoginTime }}</span>
      </template>

      <template slot-scope="{ row }" slot="action">
        <div>
          <Button type="primary" v-auth="['update']" ghost size="small" icon="ios-create" style="margin-right: 5px" @click="handleBtn(row)">訂正</Button>
          <DeleteBotton v-auth="['delete']" :isLight="true" @remove="onRemove(row.userId)"/>
        </div>
      </template>
    </Table>
    <AccountAdd v-auth="['update']" @update="onUpdate($event)" :empolyeeList="empolyeeList" :isAdd="isAdd" ref="updateData" v-if="forRest1 === true" key="forRest-1"/>
    <AccountAdd v-auth="['update']" @update="onUpdate($event)" :empolyeeList="empolyeeList" :isAdd="isAdd" ref="updateData" v-else key="forRest-2"/>
  </div>
</template>
<script>
import Buttons from '@/components/Buttons'
import AccountAdd from '../ComplexButton/AccountAdd'
import { Debounce } from '@/api/utils'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'AccountTable',
  props: {
    loading: Boolean,
    empolyeeList: Array
  },
  components: {
    AccountAdd,
    DeleteBotton: Buttons.DeleteBotton
  },
  data() {
    return {
      columns: [
        {
          title: 'ログインID',
          slot: 'code',
          key: 'code',
          width: 100,
          align: 'right'
        },
        {
          title: '氏名',
          slot: 'realName',
          key: 'realName',
          width: 150,
          align: 'left'
        },
        {
          title: '権限',
          slot: 'roleList',
          key: 'roleList',
          align: 'center'
        },
        {
          title: '有休パタン',
          slot: 'restMode',
          key: 'restMode',
          align: 'center'
        },
        {
          title: '前回のログイン時間',
          slot: 'latestLoginTime',
          key: 'latestLoginTime',
          align: 'center'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      forRest1: false,
      isAdd: false
    }
  },
  computed: {
    ...mapState(['account','role']),
    data() {
      return this.account.list
    },
    pageValue() {
      return {
        amount: this.account.count,
        curPage: 1,
        list: [20, 30, 50, 100],
        curSize: this.utils.getStorage('SO_userSettings', 'pageSize') || 20
      }
    }
  },
  methods: {
    handleBtn(curData) {
      const _updateData = this.$refs.updateData
      _updateData.isShow = true
      _updateData.localValue = { ...curData }
      _updateData.localValue.roleIdList = _updateData.localValue.roleList
    },
    onUpdate: Debounce(function(e) {
      this.forRest1 = !this.forRest1
      this.$emit('update', e)
    }),
    onRemove: Debounce(function(e) {
      this.$emit('delete', e)
    }),
    pageChange(val) {
      this.pageValue.curPage = val
      this.$emit('pageChange', val)
    },
    sizeChange(val) {
      this.pageValue.curSize = val
      this.$emit('sizeChange', val)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
