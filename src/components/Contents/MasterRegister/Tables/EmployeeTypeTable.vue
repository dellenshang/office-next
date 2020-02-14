<template>
  <Table stripe border :columns="columns" :data="data">
    <template slot-scope="{ row }" slot="name">
      <Input
        v-model="row.name"
        @on-blur="handleDivisionName($event.target.value, row)"
      />
    </template>

    <template v-if="fixProMode" slot-scope="{ row }" slot="check">
      <Checkbox @click.native="show($event, row)"></Checkbox>
    </template>
  </Table>
</template>
<style lang="scss" scoped>
.input-like-span {
  display: inline-block;
  background-color: $white;
  border-radius: 4px;
  height: 32px;
  line-height: 30px;
  width: 100%;
  position: relative;
  border: 1px solid $input-border-grey;
}
</style>
<script>
import { mapState } from 'vuex'
export default {
  name: 'EmployeeTypeTable',
  data() {
    return {
      columns: [
        {
          title: 'コード',
          key: 'code',
          width: 100,
          align: 'right'
        },
        {
          title: '区分名',
          slot: 'name',
          minWidth: 80,
          align: 'left'
        },
        {
          title: '対象',
          width: 65,
          align: 'center',
          slot: 'check'
        }
      ],
      value: [],
      company: ['A会社'],
      group: ['B支社', 'C支社'],
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
    ...mapState(['employeeType']),
    data() {
      return [
        { code: 1, name: '正社員', company: 'A会社', group: 'B支社' },
        { code: 2, name: '契約社員', company: 'A会社', group: 'C支社' }
      ]
    }
  },
  methods: {
    show(e, row) {
      const currentId = row.memberDivisionCode
      if (e.target.checked) {
        const isExist = this.value.some(e => e.memberDivisionCode === currentId)
        if (isExist) {
          return
        }
        this.value.push(row)
      }
      if (e.target.checked === false) {
        this.value = this.value.filter(e => e.memberDivisionCode !== currentId)
      }
    },
    handleChange(e, i, row, name) {
      // 处理表格里的每一次操作
      const checkboxs = this.getcha.allChildrens(this, 'Checkbox')

      // 首次修改的话，模拟一次点击事件,并新建一条value，下面cover四种特殊情况
      if (checkboxs[i].currentValue === false) {
        row[name] = e
        this.value.push(row)

        return checkboxs[i].$el.click()
      }

      // 再次修改的话，只是更新此条value
      // 因为行内index不是value中的index,所以下面找真正的index
      let code = row.memberDivisionCode
      let realIndex = -1
      let isFind = this.value.some(function(e, i) {
        if (e.memberDivisionCode === code) {
          realIndex = i
          return true
        }
      })
      if (isFind) {
        return (this.value[realIndex][name] = e)
      }
    }
  }
}
</script>
