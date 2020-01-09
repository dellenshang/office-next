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
      :title="isAdd ? '社員追加' : '社員訂正'"
      :footer-hide="footerHide"
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <Form :label-width="120" ref="localValue" :model="localValue" :rules="ruleValidate">
        <FormItem label="社員コード" prop="code">
          <Input v-model="localValue.code" placeholder="社員コード" :maxlength="7"></Input>
        </FormItem>
        <FormItem label="氏名">
          <Input v-model="localValue.realName" placeholder="氏名" :maxlength="30"></Input>
        </FormItem>
        <FormItem label="有休パタン">
          <Select v-model="localValue.modeId" placeholder="有休パタン" @on-change="handleprePaidDeafultView">
            <Option
              v-for="item of paidVactionModeList"
              :value="item.modeId"
              :key="item.modeId"
              :label="item.name"
            >{{`${item.name}`}}<span style="float:right;color:#ccc">{{handleprePaidSelectView(item)}}</span></Option>
          </Select>
        </FormItem>
        <FormItem label="来年有休予定">
          <RadioGroup v-model="localValue.futrue" class="radio-fix"　v-show="localValue.futrue !== 2">
            <Radio :label="1">有休パタンにより</Radio>
            <Radio :label="2">新予定作成</Radio>
          </RadioGroup>

           <Row v-show="localValue.futrue === 2">
            <Col span="10">
          <Input>
          <Select v-model="localValue.haha" slot="prepend" style="width: 80px">
            <Option :value="1">週所定労働日数</Option>
            <Option :value="2">一年間の所定労働日数</Option>
        </Select>
         <span slot="append" v-show="localValue.haha === 2">～</span>
         <span slot="append" v-show="localValue.haha === 1">日</span>
           </Input>
            </Col>
            <Col span="3">
          <Input v-show="localValue.haha === 2">
           </Input>
            </Col>
            <Col span="8">
                      <Input>
                      <span slot="prepend">付与</span>
         <span slot="append">日</span>
           </Input>
            </Col>
            <Col span="1">
              <Button icon="ios-undo" @click="localValue.futrue = 1"></Button>
            </Col>
           </Row>
        </FormItem>
        <FormItem :label="curRoleList.modeType === 1 ? '前倒し付与' : '直接付与' " v-show="curRoleList.standardDateConfigType === 1 && isAdd">
          <InputNumber
            :max="curRoleList.maxPaymentDays ? curRoleList.maxPaymentDays : 99"
            :min="0"
            style="width:100%"
            v-model="localValue.prepaymentDays"
          />
          </FormItem>
        <FormItem label="所属名" prop="groupId">
          <Select v-model="localValue.deptIdList" multiple filterable>
            <Option v-for="item in mutiDeptList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="権限" v-if="isAdd">
          <Select v-model="localValue.roleIdList" multiple filterable>
            <Option v-for="item in roleList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="メール" prop="email">
          <Input v-model="localValue.email" placeholder="メールアドレス" :maxlength="50"></Input>
        </FormItem>
        <FormItem label="在職状況" v-if="!isAdd">
          <RadioGroup v-model="localValue.status" class="radio-fix">
            <Radio :label="1">在職中</Radio>
            <Radio :label="2">休暇中</Radio>
            <Radio :label="3">離職</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="入社年月日" prop="hireDate">
          <DatePicker
            type="date"
            format="yyyy-MM-dd"
            :value="localValue.hireDate"
            @on-change="localValue.hireDate = $event"
            placeholder="入社年月日"
            style="width:100%"
          ></DatePicker>
        </FormItem>
        <FormItem label="退職年月日" prop="leaveDate">
          <DatePicker
            type="date"
            format="yyyy-MM-dd"
            @on-change="localValue.leaveDate = $event"
            placeholder="退職年月日"
            style="width:100%"
          ></DatePicker>
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
.radio-fix {
  width: 100%;
  padding: 5px 5px 6px 5px;
  border: 1px solid $input-border-grey;
}
</style>
<script>
import { mapState } from 'vuex'
import { deepData } from "@/api/utils"
export default {
  name: 'UserAdd',
  props: {
    isAdd: Boolean
  },
  data() {
    const attendanceTimeConfirm = (rule, value, callback) => {
      if(!value) return callback()
      if (
        new Date(this.localValue.leaveDate) <
        new Date(this.localValue.hireDate)
      ) {
        return callback(
          new Error('退職年月日が入職年月日より前の日付に設定されています。')
        )
      }
      callback()
    }
    const emailValidator = (rule, value, callback) => {
      if(!value) return callback()
      if (/^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(value)) {
        return callback()
      }
      return callback(
        new Error('正しく入力してください。')
      )
    }
    return {
      localValue: {
        username: '',
        realName: '',
        userNo: '',
        roleIdList: [],
        deptIdList: [],
        hireDate: ''
      },
      cascaderList: [],
      ruleValidate: {
        code: [
          {
            required: true,
            message: '社員コードを入力してください',
            trigger: 'blur'
          }
        ],
        hireDate: [
          {
            required: true,
            message: '入職年月日を選択してください',
            trigger: 'blur'
          }
        ],
        leaveDate: [
          {
            required: false,
            validator: attendanceTimeConfirm,
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
      },
      isShow: false,
      footerHide: true,
      accessList: [],
      value: []
    }
  },
  computed: {
    ...mapState(['user', 'dept', 'happy', 'role']),
    data() {
      return [this.dept.searchList]
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
      this.localValue.prepaymentDays = result ? result.prepaymentDays : 0
      return result ? result : {}
    },
    mutiDeptList() {
      if (this.dept.searchList.length < 1) {
        return []
      }
      let result=[]
      // dept.searchList是一个对象，第一项为公司的名字
      deepData(this.dept.searchList[0],(e)=>result = result.concat({value:e.value,label:e.label}))
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
          this.localValue.empStatus = this.localValue.status
          this.$emit('update', [this.localValue])
          this.isShow = false
        }
      })
    },
    handleprePaidDeafultView() {
      // this.localValue.prepaymentDays = this.curRoleList.prepaymentDays
    },
    handleprePaidSelectView(e) {
      if (e.modeType === 1) {
        if (e.standardDateConfigType === 1) {
          return `前倒し付与${e.prepaymentDays}日`
        }
        return `前倒し付与なし`
      }
      return `直接付与${e.prepaymentDays}日`
    }
  }
}
</script>
