<template>
  <div>
    <Form :label-width="120" ref="localValue" :model="localValue" :rules="ruleValidate">
      <FormItem label="祝日" prop="holidayDate">
        <DatePicker
          type="date"
          format="yyyy-MM-dd"
          :value="localValue.holidayDate"
          @on-change="localValue.holidayDate=$event"
          :options="rangeOptions"
          :clearable="false"
          :editable="isEditable"
          style="width:95%"
        ></DatePicker>
      </FormItem>
      <FormItem label="表示名称" prop="memo">
        <Input v-model="localValue.memo" placeholder="表示名称" :maxlength="30" style="width:95%"/>
      </FormItem>
      <FormItem label="休日種別" prop="lawOrSetVacationFlg">
        <RadioGroup v-model="localValue.lawOrSetVacationFlg" class="radio-fix">
          <Radio label="1">
            <span>法定休日</span>
          </Radio>
          <Radio label="2">
            <span>所定休日</span>
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
  name: 'HolidayAdd',
  components: {},
  data: function() {
    return {
      isEditable: false,
      localValue: {
        holidayDate: '2019-01-01',
        memo: '',
        lawOrSetVacationFlg: '1'
      },
      ruleValidate: {
        memo: [
          {
            required: true,
            message: '表示名称を入力してください',
            trigger: 'blur'
          }
        ],
        lawOrSetVacationFlg: [
          { required: true, message: 'This cannot be empty', trigger: 'blur' }
        ]
      },
      rangeOptions: {
        disabledDate: date => {
          let curYear = this.currentYear
          let beginDate = new Date(curYear, 0, 1)
          let endDate = new Date(curYear, 11, 31)
          return (
            date.valueOf() < beginDate.getTime() ||
            date.valueOf() > endDate.getTime()
          )
        }
      }
    }
  },
  computed: {
    ...mapState(['currentYear'])
  },
  watch: {
    currentYear() {
      this.localValue.holidayDate = this.currentYear + '-01-01'
    }
  },
  methods: {
    add() {
      this.$refs.localValue.validate(valid => {
        if (valid) {
          if (new Date(this.localValue.holidayDate) < new Date()) {
            this.$Modal.confirm({
              title: '注意',
              content: `<h3>過去の日が指定されています。
          <br>平日→祝日に変更、または祝日を削除しようとしている過去の日に、
          <br>出勤されている人がいる場合、休日出勤の扱いなどは自動的に
          <br>変更されませんのでご注意ください。
          <br>追加 します。よろしいですか？</h3>`,
              onOk: () => {
                return this.$emit('add')
              }
            })
            return
          }
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
