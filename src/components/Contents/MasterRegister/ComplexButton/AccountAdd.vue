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
      :title="isAdd ? 'アカウント追加' : 'アカウント訂正'"
      :footer-hide="footerHide"
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <Form :label-width="120" ref="localValue" :model="localValue" :rules="ruleValidate">
        <FormItem label="ログインID" prop="code">
          <Input v-model="localValue.username" placeholder="ログインID" :maxlength="7"></Input>
        </FormItem>
        <FormItem label="権限">
          <Select v-model="localValue.roleIdList" multiple filterable>
            <Option v-for="item in roleList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="社員" prop="empId">
           <Select
              v-model="localValue.empId"
              filterable
              clearable
            >
              <Option
                v-for="item of empolyeeList"
                :value="item.key"
                :key="item.key"
                >{{
                  `${item.code} ${item.label.match(/[\s\S]+\(/g)[0].replace('(', '')}`
                }}</Option
              >
            </Select>
        </FormItem>
        <FormItem label="メール" prop="email">
          <Input v-model="localValue.email" placeholder="メールアドレス" :maxlength="50"></Input>
        </FormItem>
        <FormItem label="備考" prop="remark">
          <Input v-model="localValue.remark" placeholder="備考" :maxlength="100"></Input>
        </FormItem>
      </Form>
      <div class="my-footer">
        <Button type="text" @click="cancel">キャンセル</Button>
        <Button type="success" @click="add" v-if="isAdd === true">登録</Button>
        <Button type="primary" @click="update" v-else>更新</Button>
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
</style>
<script>
import { mapState } from 'vuex'
import { deepData } from "@/api/utils"
export default {
  name: 'AccountAdd',
  props: {
    isAdd: Boolean,
    empolyeeList: Array
  },
  data() {
    const emailValidator = (rule, value, callback) => {
      if(!value) return callback()
      if (/^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(value)) {
        return callback()
      }
      return callback(
        new Error('正しく入力してください。')
      )
    }
    const remarkValidator = (rule, value, callback) => {
      if (!value) return callback()
      if (value.length < 10) {
        return callback(new Error('10文字以上に入力してください。'))
      }
      callback()
    }
    return {
      localValue: {
        username: '',
        roleIdList: [],
        email: '',
        remark: ''
      },
      cascaderList: [],
      ruleValidate: {
        username: [
          {
            required: true,
            message: '入力してください',
            trigger: 'blur'
          }
        ],
        empId: [
          {
            required: true,
            type: 'number',
            message: '入力してください',
            trigger: 'change'
          }
        ],
        email: [
          {
            required: false,
            validator: emailValidator,
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
      isEditable: false,
      footerHide: true,
      accessList: [],
      value: []
    }
  },
  computed: {
    ...mapState(['user', 'dept', 'happy', 'role']),
    data() {
      return this.dept.searchList instanceof Array
        ? this.dept.searchList
        : [this.dept.searchList]
    },
    paidVactionModeList() {
      return this.happy.list
    },
    roleList() {
      return this.role.list
    },
    curRoleList() {
      const that = this
      const result = this.happy.list.find(e => e.modeId === that.localValue.modeId)
      return result ? result : {}
    },
    mutiDeptList() {
      let result=[]
      deepData(this.dept.searchList,(e)=>result = result.concat({value:e.value,label:e.label}))
      result.shift()
      return result
    }
  },
  methods: {
    cancel() {
      this.isShow = false
      this.$refs.localValue.resetFields()
    },
    add() {
      this.$refs.localValue.validate(valid => {
        if (valid) {
          delete this.localValue.workFormListDisplay
          if (this.localValue.standardDateConfigType === 2) {
            delete this.localValue.prepaymentDays
          }
          this.$emit('add')
          this.isShow = false
        }
      })
    },
    update() {
      this.$refs.localValue.validate(valid => {
        if (valid) {
          if (this.localValue.standardDateConfigType === 2) {
            delete this.localValue.prepaymentDays
          }
          this.$emit('update', [this.localValue])
          this.isShow = false
        }
      })
    },
    handleprePaidDeafultView() {
      this.localValue.prepaymentDays = this.curRoleList.prepaymentDays
    },
    handleprePaidSelectView(e) {
      if(e.modeType === 1) {
        if(e.standardDateConfigType === 1) {
          return `前倒し付与${e.prepaymentDays}日`
        }
        return `前倒し付与なし`
      }
      return `直接付与${e.prepaymentDays}日`
    }
  }
}
</script>
