<template>
  <div>
    <el-table
      :data="data"
      row-key="menuId"
      border
      stripe
      v-loading="loading"
      default-expand-all
      empty-text="データなし"
    >
      <el-table-column prop="name" label="表示名称" min-width="180"></el-table-column>
      <el-table-column prop="icon" label="アイコン"></el-table-column>
      <el-table-column prop="type" label="タイプ" align="center">
        <template slot-scope="scope" v-if="scope.row.level !== '0'">
          <Button type="success" ghost v-if="scope.row.type === 2">ボタン</Button>
          <Button type="primary" ghost v-if="scope.row.type === 1">画面</Button>
          <Button disabled v-if="scope.row.type === 0">メニュー</Button>
        </template>
      </el-table-column>
      <el-table-column prop="orderNum" label="順番"></el-table-column>
      <el-table-column prop="url" label="URL / Perms" min-width="180">
        <template slot-scope="scope">
          <span class="btn-perms" v-if="scope.row.type === 2">{{ scope.row.perms.match(/(?<=:)[a-zA-z]+$/g).join() }}</span>
          <span v-else>{{ scope.row.url }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180" align="right">
        <template slot-scope="scope">
          <Button
            type="success"
            ghost
            size="small"
            style="margin-right: 5px"
            icon="ios-add-circle-outline"
            @click="openModal(scope.row,1)"
            v-if="scope.row.level !== '0' && scope.row.type === 0"
          >追加画面</Button>
          <Button
            type="success"
            ghost
            size="small"
            style="margin-right: 5px"
            icon="ios-add-circle-outline"
            @click="openModal(scope.row,1)"
            v-if="scope.row.level !== '0' && scope.row.type === 1"
          >追加操作</Button>
          <Button
            type="primary"
            ghost
            size="small"
            style="margin-right: 5px"
            icon="ios-create"
            v-if="scope.row.level !== '0' && scope.row.type !== 2"
            @click="openModal(scope.row,0)"
          >訂正</Button>
          <DeleteBotton
            v-if="scope.row.level !== '0'"
            :isLight="true"
            type="error"
            @remove="onRemove(scope.row.menuId)"
          />
          <Button
            type="success"
            ghost
            size="small"
            style="margin-right: 5px"
            icon="ios-add-circle-outline"
            @click="openModal(scope.row,2)"
            v-else
          >追加メニュー</Button>
        </template>
      </el-table-column>
    </el-table>
    <Modal @on-ok="handleUpdate" :title="dynamicTitle(updateValue.type)" v-model="updateModal">
      <Form :model="updateValue" :rules="ruleValidate" :label-width="120">
        <FormItem :label="dynamicLabel(updateValue.type)" prop="name" style="width:95%">
          <Input v-model="updateValue.name" placeholder="名称" :maxlength="40" />
        </FormItem>
        <FormItem v-if="updateValue.type === 1" label="上级菜单" prop="parentId" style="width:95%">
          <Cascader
            :value="handleCascaderDefaultView(updateValue.parentId, casMenu)"
            :data="casMenu"
            @on-change="updateValue.parentId = $event[$event.length - 1]"
            :render-format="handleCascaderView"
            change-on-select
            :clearable="false"
          ></Cascader>
        </FormItem>
        <FormItem v-if="updateValue.type !== 2" label="排序号">
          <InputNumber
            style="width:93.5%"
            :max="99"
            :min="0"
            v-model="updateValue.orderNum"
            placeholder="排序号"
          />
        </FormItem>
        <FormItem v-if="updateValue.type === 1" label="菜单图标 " style="width:95%">
          <Input v-model="updateValue.icon" placeholder="图标" :maxlength="15"></Input>
        </FormItem>
        <FormItem v-if="updateValue.type === 0" label="去哪儿" style="width:95%">
          <Input v-model="updateValue.toChildUrl" placeholder="去哪儿" :maxlength="40"></Input>
        </FormItem>
        <FormItem v-if="updateValue.type === 1" label="菜单路由" style="width:95%">
          <Input v-model="updateValue.url" placeholder="菜单路由" :maxlength="40"></Input>
        </FormItem>
      </Form>
    </Modal>
    <Modal @on-ok="handleAdd" title="追加" v-model="addModal">
      <Form :model="addValue" :rules="ruleValidate" :label-width="120">
        <FormItem label="名称" prop="name" style="width:95%">
          <Input v-model="addValue.name" placeholder="名称" :maxlength="40" />
        </FormItem>
        <FormItem v-if="addValue.menuType !== 2" label="排序号">
          <InputNumber
            style="width:93.5%"
            :max="99"
            :min="0"
            v-model="addValue.orderNum"
            placeholder="排序号"
          />
        </FormItem>
        <FormItem v-if="addValue.menuType === 1" label="菜单图标 " style="width:95%">
          <Input v-model="addValue.icon" placeholder="图标" :maxlength="15"></Input>
        </FormItem>
        <FormItem v-if="addValue.menuType === 0" label="去哪儿" style="width:95%">
          <Input v-model="addValue.toChildUrl" placeholder="去哪儿" :maxlength="40"></Input>
        </FormItem>
        <FormItem v-if="addValue.menuType !== 2" label="路由" style="width:95%">
          <Input v-model="addValue.url" placeholder="路由" :maxlength="40"></Input>
        </FormItem>
        <FormItem v-if="addValue.menuType === 2" label="授权标识" style="width:95%">
          <Input v-model="viewHelper.perms">
            <span slot="prepend">{{ inputPrePend }}</span>
          </Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
import Buttons from '../../../Buttons'
export default {
  name: 'DepartmentTable',
  data() {
    return {
      fetchSign: false,
      loading: false,
      updateValue: {
        type: 0,
        name: '',
        icon: '',
        url: '',
        perms: ''
      },
      addValue: {},
      addModal: false,
      updateModal: false,
      inputChangeFlag: false,
      ruleValidate: {
        name: [
          {
            required: true,
            message: '名称を入力してください',
            trigger: 'blur'
          }
        ],
        parentId: [
          {
            required: true,
            message: '上级菜单を選択してください',
            trigger: 'blur'
          }
        ]
      },
      viewHelper: {
        perms: ''
      }
    }
  },
  props: {
    data: Array,
    casMenu: Array
  },
  components: {
    DeleteBotton: Buttons.DeleteBotton
  },
  computed: {
    leaderData() {
      return this.group.leaderList
    },
    inputPrePend() {
      const prePend = this.addValue.perms.match(/(\w|\W)+(?=list)/g)
      if (prePend) return prePend[0]
      else return ''
    }
  },
  methods: {
    handleCascader(scope, e) {
      scope.row.managerId = e[e.length - 1]
    },
    dynamicTitle(type) {
      if (type === 0) {
        return '目录修正'
      }
      if (type === 1) {
        return '菜单修正'
      }
      return '按钮修正'
    },
    dynamicLabel(type) {
      if (type === 0) {
        return '目录名称'
      }
      if (type === 1) {
        return '菜单名称'
      }
      return '按钮名称'
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
    },
    handleUpdate() {
      this.$emit('update', this.updateValue)
    },
    handleAdd() {
      if (this.addValue.perms) {
        this.addValue.perms = `${
          this.addValue.perms.match(/(\w|\W)+(?=list)/g)[0]
        }${this.viewHelper.perms}`
      }
      this.$emit('add', this.addValue)
    },
    onRemove(e) {
      console.log(e)
      this.$emit('delete', [e])
    },
    openModal(e, isAdd) {
      if (isAdd) {
        this.addValue.menuType = 0
        this.addValue.parentId = e.menuId
        delete this.addValue.perms
        if (isAdd !== 2) {
          this.addValue.menuType = e.type + 1
        }
        if (this.addValue.menuType === 2) {
          this.addValue.perms = e.perms
        }
        console.log(this.addValue)
        return (this.addModal = true)
      }
      this.updateValue = { ...e }
      this.updateValue.menuType = e.type
      this.updateModal = true
    }
  }
}
</script>
<style lang="scss" scoped>
.manager {
  cursor: pointer;
}
.btn-perms {
  color: $ghost-success-border
}
</style>
