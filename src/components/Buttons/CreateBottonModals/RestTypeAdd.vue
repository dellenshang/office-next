<template>
  <div>
    <Form :label-width="120" ref="localValue" :model="localValue" :rules="ruleValidate">
      <FormItem label="休暇名称" prop="name">
        <Input v-model="localValue.name" placeholder="休暇名称" :maxlength="30" style="width:95%"/>
      </FormItem>
      <FormItem label="有休フラッグ">
        <RadioGroup v-model="localValue.paid" class="radio-fix">
          <Radio :label="1">
            <span>はい</span>
          </Radio>
          <Radio :label="2">
            <span>いいえ</span>
          </Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="法律フラッグ">
        <RadioGroup v-model="localValue.law" class="radio-fix">
          <Radio :label="1">
            <span>はい</span>
          </Radio>
          <Radio :label="2">
            <span>いいえ</span>
          </Radio>
        </RadioGroup>
      </FormItem>
    </Form>
    <div class="my-footer">
      <Button type="text" @click="cancel">キャンセル</Button>
      <Button type="success" size="large" @click="add">追加</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-footer {
  text-align: right;
  position: relative;
  right: 1rem;
  margin-top: 20px;
}
.radio-fix {
  width: 95%;
  padding: 5px 5px 6px 5px;
  border: 1px solid $input-border-grey;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: 'RestTypeAdd',
  components: {},
  data: function() {
    return {
      isEditable: false,
      localValue: {
        paid: 1,
        name: '',
        law: 1
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: '入力してください',
            trigger: 'blur'
          }
        ]
      },
    }
  },
  methods: {
    add() {
      this.$refs.localValue.validate(valid => {
        if (valid) {
          this.$emit('add')
        }
      })
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
