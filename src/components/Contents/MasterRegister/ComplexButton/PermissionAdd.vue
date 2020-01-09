<template>
  <span>
    <Button
      type="primary"
      size="large"
      @click="isShow = true"
      icon="md-add-circle"
      v-if="isAdd === true"
    >追加</Button>
    <Modal
      v-model="isShow"
      :title="isAdd ? '角色追加': '角色訂正'"
      footer-hide
      :mask-closable="false"
      @on-cancel="cancel"
    >
      <Form :label-width="120" ref="localValue" :model="localValue" :rules="ruleValidate">
        <FormItem label="角色名称" prop="name">
          <Input v-model="localValue.name" placeholder="角色名称" :maxlength="15"></Input>
        </FormItem>
        <FormItem label="授权标识" prop="role">
          <Input v-model="localValue.role" placeholder="授权标识" :maxlength="100"></Input>
        </FormItem>
        <FormItem label="备注" prop="remark">
          <Input v-model="localValue.remark" placeholder="备注" :maxlength="100"></Input>
        </FormItem>
        <div class="label">授权</div>
        <Tree class="tree" :data="treeData" ref="tree" show-checkbox></Tree>
      </Form>
      <div class="my-footer">
        <Button type="text" @click="cancel">キャンセル</Button>
        <Button type="primary" @click="update" v-if="isAdd === false">更新</Button>
        <Button type="success" size="large" @click="add()" v-else>登録</Button>
      </div>
    </Modal>
  </span>
</template>

<style lang="scss" scoped>
.my-footer {
  text-align: right;
  position: relative;
  right: 1rem;
  margin-top: 20px;
}
.label {
  line-height: 32px;
  margin-top: 10px;
  background-color: $form-label;
  color: $white;
}
.tree {
  text-align: left;
  border: 15px solid $light-blue;
  background-color: $light-grey;
}
</style>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('auth')
export default {
  name: 'PermissionAdd',
  props: {
    isAdd: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    const remarkValidator = (rule, value, callback) => {
      if (!value) return callback()
      if (value.length < 10) {
        return callback(new Error('10文字以上に入力してください。'))
      }
      callback()
    }
    return {
      localValue: {
        name: '',
        remark: '',
        menuIdList: []
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: '入力してください',
            trigger: 'blur'
          }
        ],
        role: [
          {
            required: true,
            message: '入力してください',
            trigger: 'blur'
          }
        ],
        remark: [
          {
            validator: remarkValidator,
            trigger: 'blur'
          }
        ]
      },
      isShow: false,
      treeData: []
    }
  },
  watch: {
    isShow(newValue) {
      if (newValue) {
        if (this.treeData.length) return
        else this.treeData = this.utils.deepClone(this.treeMenu)
      }
    }
  },
  computed: {
    ...mapState(['treeMenu'])
  },
  methods: {
    cancel() {
      this.$refs.localValue.resetFields()
      this.isShow = false
    },
    add() {
      this.$refs.localValue.validate(valid => {
        if (valid) {
          const a = this.$refs.tree.getCheckedNodes()
          this.localValue.menuIdList = a.map(e => e.value)
          this.$emit('add')
          this.isShow = false
        }
      })
    },
    update() {
      this.$refs.localValue.validate(valid => {
        if (valid) {
          const a = this.$refs.tree.getCheckedNodes()
          this.localValue.menuIdList = a.map(e => e.value)
          this.$emit('update', this.localValue)
          this.isShow = false
        }
      })
    }
  }
}
</script>
