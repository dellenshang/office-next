<template>
  <div>
    <Form ref="localValue" :model="localValue" :rules="ruleValidate" :label-width="120">
          <FormItem label="端末番号" prop="serialNo" style="width:70%">
            <Input v-model="localValue.serialNo" placeholder="端末番号" :maxlength="20"/>
          </FormItem>
          <FormItem label="設置場所" prop="setPlace" style="width:70%">
            <Input v-model="localValue.setPlace" placeholder="設置場所" :maxlength="40"></Input>
          </FormItem>
    </Form>
    <div class="my-footer">
      <Button type="text" @click="cancel">キャンセル</Button>
      <Button class="my-add" type="success" size="large" @click="add('localValue')">追加</Button>
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
  name: 'MachineAdd',
  props: [],
  components: {},
  data: function() {
    return {
      localValue: {
        serialNo: '',
        setPlace: ''
      },
      ruleValidate: {
        serialNo: [
          {
            required: true,
            message: '端末番号を入力してください',
            trigger: 'blur'
          }
        ],
        setPlace: [
          {
            required: true,
            message: '設置場所を入力してください',
            trigger: 'blur'
          }
        ]
      }
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
