<template>
  <span>
    <Button
      type="success"
      ghost
      class="mr10"
      @click="isShow = true"
      icon="md-add"
      v-if="isAdd === true"
    >追加</Button>
    <Modal
      v-model="isShow"
      :title="isAdd ? '定時タスク追加' : '定時タスク訂正'"
      :footer-hide="true"
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <Form :label-width="120" ref="localValue" :model="localValue" :rules="ruleValidate">
        <FormItem label="BeanName" prop="beanName">
          <Input v-model="localValue.beanName" placeholder="BeanName"/>
        </FormItem>
        <FormItem label="参数">
          <Input v-model="localValue.params" placeholder="参数"></Input>
        </FormItem>
        <FormItem label="cron表达式" prop="cronExpression">
          <Input v-model="localValue.cronExpression" placeholder="cron表达式"></Input>
        </FormItem>
        <FormItem label="状态" prop="jobStatus">
          <RadioGroup v-model="localValue.jobStatus" class="radio-fix">
            <Radio :label="1">正常</Radio>
            <Radio :label="0">暂停</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="备注">
          <Input v-model="localValue.remark" placeholder="备注"></Input>
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
  name: 'AutoTaskAdd',
  props: {
    isAdd: Boolean
  },
  data() {
    return {
      localValue: {
        jobStatus: 1
      },
      cascaderList: [],
      ruleValidate: {
        beanName: [
          {
            required: true,
            message: '入力してください',
            trigger: 'blur'
          }
        ],
        cronExpression: [
          {
            required: true,
            message: '入力してください',
            trigger: 'blur'
          }
        ],
        jobStatus: [
          {
            required: true,
            type: 'number',
            message: '入力してください',
            trigger: 'change'
          }
        ]
      },
      isShow: false,
      value: []
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
          this.$emit('add')
          this.isShow = false
        }
      })
    },
    update() {
      this.$refs.localValue.validate(valid => {
        if (valid) {
          this.$emit('update', this.localValue)
          this.isShow = false
        }
      })
    }
  }
}
</script>
