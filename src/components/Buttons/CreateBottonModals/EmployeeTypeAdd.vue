<template>
  <div>
    <Form
      ref="localValue"
      :model="localValue"
      :rules="ruleValidate"
      :label-width="120"
    >
      <FormItem label="コード" prop="code">
        <Input v-model="localValue.code" placeholder="コード" :maxlength="20" />
      </FormItem>
      <FormItem label="区分名" prop="name">
        <Input
          v-model="localValue.name"
          placeholder="区分名"
          :maxlength="40"
        ></Input>
      </FormItem>
    </Form>
    <div class="my-footer">
      <Button type="text" @click="cancel">キャンセル</Button>
      <Button
        class="my-add"
        type="success"
        size="large"
        @click="add('localValue')"
        >追加</Button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-footer {
  text-align: right;
  margin-top: 0.3rem;
  margin-bottom: -0.3rem;
  font-size: 2rem;
}
.my-add {
  margin-left: 0.5rem;
}
</style>

<script>
export default {
  name: 'EmployeeTypeAdd',
  props: [],
  components: {},
  data: function() {
    return {
      localValue: {
        serialNo: '',
        setPlace: ''
      },
      ruleValidate: {
        code: [
          {
            required: true,
            message: '入力してください',
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            message: '入力してください',
            trigger: 'blur'
          }
        ],
        company: [
          {
            required: true,
            message: '選択してください',
            trigger: 'change'
          }
        ],
        group: [
          {
            required: true,
            message: '選択してください',
            trigger: 'change'
          }
        ]
      },
      company: ['A会社'],
      group: ['B支社', 'C支社']
    }
  },
  computed: {},
  methods: {
    add(name) {
      this.$refs[name].validate(valid => {
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
