<template>
  <el-table
    :data="data"
    style="width: 100%;margin-bottom: 20px;"
    row-key="deptId"
    border
    stripe
    default-expand-all
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    empty-text="データなし">
    <el-table-column prop="name" label="表示名称" min-width="180">
    </el-table-column>
    <el-table-column prop="leaderList" label="所属長" min-width="180">
      <template slot-scope="scope">
        <Select :value="handleLeaderSelectedView(scope.row.leaderList)" @on-change="handleLeaderSelected($event, scope)" @on-open-change="handleOpenChange($event, scope)" ref="select" multiple filterable v-if="scope.row.isShow">
          <Option v-for="item of leaderList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <div @click="changeView(scope.row)" class="manager" v-else>
          <!-- <span v-if="scope.row.leaderList && scope.row.leaderList.length > 0" class="row-label-primary" v-for="(item, index) of scope.row.leaderList" :key="index">{{ item.realName }}</span> -->
          <a v-if="!scope.row.leaderList || scope.row.leaderList.length === 0">&nbsp;</a>
          <span v-else class="row-label-primary" v-for="(item, index) of scope.row.leaderList" :key="index">{{ item.realName }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="対象" width="55">
      <template v-if="fixProMode" slot-scope="scope">
        <Checkbox @click.native="show($event, scope.row)"></Checkbox>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { mapState } from 'vuex'
import { deepData, Debounce } from '@/api/utils'
export default {
  name: 'MinisterTable',
  data() {
    return {
      fetchSign: false,
      value: [],
      fixProMode: true
    }
  },
  updated: function() {
    this.value = []
  },
  beforeUpdate: function() {
    this.fixProMode = !this.fixProMode
    setTimeout(() => {
      this.fixProMode = !this.fixProMode
    })
  },
  computed: {
    ...mapState(['dept', 'loading', 'user']),
    data() {
      return [this.utils.deepClone(this.dept.list)]
    },
    leaderList() {
      let result = []
      this.user.leaderList.forEach(e=> result = result.concat(e.children))
      return result
    },
  },
  methods: {
    checkThis(i) {
      const checkBoxs = this.getcha.allChildrens(this, 'Checkbox')
      if (checkBoxs[i].currentValue === false) {
        checkBoxs[i].$el.click()
      }
    },
    show(e, row) {
      const currentId = row.deptId
      if (e.target.checked) {
        const isExist = this.value.some(e => e.deptId === currentId)
        if (isExist) {
          return
        }
        this.value.push(row)
      }
      if (e.target.checked === false) {
        this.value = this.value.filter(e => e.deptId !== currentId)
      }
    },
    handleLeaderSelected:Debounce(function(e,scope) {
      scope.row.leaderList = e
      this.checkThis(scope.$index)
    }),
    changeView(e) {
      this.$set(e, 'isShow', true)
    },
    handleLeaderSelectedView(e) {
      if(e[0] instanceof Object === false) {
        return e
      }
      return e.map(e=>e.id)
    },
    handleOpenChange(visibleStatus, scope) {
      if (!visibleStatus) {
        this.checkThis(scope.$index)
      }
    },
    handleCascader(scope, e) {
      scope.row.managerId = e[e.length - 1]
      this.checkThis(scope.$index)
    },
    handleCascaderView(labels) {
      return labels[labels.length - 1]
    },
    handleCascaderDefaultView(key, arr) {
      let temp = []
      let result = []
      let depth = 0
      function findU(key, arr) {
        arr.some(e => {
          temp[depth] = e.value
          if (e.value === key) {
            result = result.concat(temp)
            return true
          } else {
            if (e.children && e.children.length > 0) {
              depth++
              findU(key, e.children)
            }
          }
        })
        depth--
        return result
      }
      return findU(key, arr)
    }
  }
}
</script>
<style lang="scss" scoped>
.manager {
  cursor: pointer;
}
</style>
