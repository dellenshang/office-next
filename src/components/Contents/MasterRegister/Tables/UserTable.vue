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
        <span>{{ row.code }}</span>
      </template>

      <template slot-scope="{ row }" slot="realName">
        <span>{{ row.realName }}</span>
      </template>

      <template v-if="row.deptList" slot-scope="{ row }" slot="deptId">
        <span :class="item.isLeader ? 'row-label-primary' : 'row-label-primary not-leader'" v-for="(item, index) of row.deptList" :key="index">{{item.name}}</span>
      </template>

      <template slot-scope="{ row }" slot="hireDate">
        <span>{{ row.hireDate }}</span>
      </template>

      <template slot-scope="{ row }" slot="leaveDate">
        <span>{{ row.leaveDate }}</span>
      </template>

      <template slot-scope="{ row }" slot="status">
        <span :class="row.status === 1 ? 'blue' : row.status === 2 ? 'grey' : 'red'">{{ row.status === 1 ? '在' : row.status === 2 ? '休' : '離'}}</span>
      </template>

      <template slot-scope="{ row }" slot="email">
        <span>{{ row.email }}</span>
      </template>

      <!-- <template slot-scope="{ row }" slot="icCard">
        <a class="watermelon">. . . .</a>
      </template> -->

      <template slot-scope="{ row }" slot="action">
        <div>
          <Button type="primary" v-auth="['update']" ghost size="small" icon="ios-create" style="margin-right: 5px" @click="handleBtn(row)">訂正</Button>
          <DeleteBotton v-auth="['delete']" :isLight="true" @remove="onRemove(row.empId)"/>
        </div>
      </template>
    </Table>
    <UserAdd v-auth="['update']" @update="onUpdate($event)" :isAdd="isAdd" ref="updateData" v-if="forRest1 === true" key="forRest-1"/>
    <UserAdd v-auth="['update']" @update="onUpdate($event)" :isAdd="isAdd" ref="updateData" v-else key="forRest-2"/>
  </div>
</template>
<script>
import Buttons from '@/components/Buttons'
import UserAdd from '../ComplexButton/UserAdd'
import { Debounce } from '@/api/utils'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'UserTable',
  props: {
    loading: Boolean
  },
  components: {
    UserAdd,
    DeleteBotton: Buttons.DeleteBotton
  },
  data() {
    return {
      columns: [
        {
          title: 'コード',
          slot: 'code',
          key: 'code',
          width: 100,
          align: 'right'
        },
        {
          title: '氏名',
          slot: 'realName',
          key: 'realName',
          width: 100,
          align: 'left'
        },
        {
          title: '所属',
          slot: 'deptId',
          key: 'deptId',
          align: 'center'
        },
        {
          title: '入社年月日',
          slot: 'hireDate',
          key: 'hireｖDate',
          width: 90,
          align: 'center'
        },
        {
          title: 'メール',
          slot: 'email',
          key: 'email',
          align: 'center'
        },
        {
          title: '退職年月日',
          slot: 'leaveDate',
          key: 'leaveDate',
          width: 90,
          align: 'center'
        },
        {
          title: '在職状況',
          slot: 'status',
          key: 'status',
          width: 90,
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
    ...mapState(['user']),
    data() {
      return this.user.list
    },
    pageValue() {
      return {
        amount: this.user.count,
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
.not-leader {
  border: none;
  background-color: transparent;
}
.watermelon {
  display: inline-block;
  width: 60px;
  height: 23px;
  position: relative;
  top: -3px;
  color: inherit;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: rgb(255, 102, 102);
  box-shadow: 0px 1px 0px 2px rgb(0, 139, 0);
}
</style>
