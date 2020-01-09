<template>
  <Table size="small" stripe border :columns="columns" :data="data">
    <template slot-scope="{ row }" slot="memberDivisionCode">
      <span>{{ row.memberDivisionCode }}</span>
    </template>

    <template slot-scope="{ row }" slot="memberDivisionName">
      <Input
        type="text"
        v-model="row.memberDivisionName"
        @on-blur="handleDivisionName($event.target.value, row)"
      />
    </template>

    <template slot-scope="{ row, index }" slot="separateDay">
      <span class="input-like-span" v-if="row.memberDivisionCodeHaveWork">{{ handleSeparateDay(row.separateDay) }}</span>
      <Select v-else :value="handleSeparateDay(row.separateDay)" @on-change="handleChange($event, index, row, valueName[9])" :transfer="true">
        <Option v-for="item of day" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </template>

    <template slot-scope="{ row, index }" slot="startFraction">
      <Select
        :value="row.startFraction"
        @on-change="handleChange($event, index, row, valueName[0])"
        :transfer="true"
      >
        <Option v-for="item of fraction" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </template>

    <template slot-scope="{ row, index }" slot="endFraction">
      <Select :value="row.endFraction" @on-change="handleChange($event, index, row, valueName[1])" :transfer="true">
        <Option v-for="item of fraction" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </template>

    <template slot-scope="{ row, index }" slot="outFraction">
      <Select :value="row.outFraction" @on-change="handleChange($event, index, row, valueName[2])" :transfer="true">
        <Option v-for="item of fraction" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </template>

    <template slot-scope="{ row, index }" slot="inFraction">
      <Select :value="row.inFraction" @on-change="handleChange($event, index, row, valueName[3])" :transfer="true">
        <Option v-for="item of fraction" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </template>

    <template slot-scope="{ row, index }" slot="separateTime">
      <span class="input-like-span" v-if="row.memberDivisionCodeHaveWork">{{ handleSeparateTime(row.separateTime) }}</span>
      <Select v-else
        :value="handleSeparateTime(row.separateTime)"
        @on-change="handleChange($event, index, row, valueName[7])"
        :transfer="true"
      >
        <Option v-for="item of time" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </template>

    <template slot-scope="{ row }" slot="workPatternCode">
      <span class="input-like-span">{{ handleWorkPattern(row.workPatternCode) }}</span>
      <!-- 目前版本只有固定勤务 -->
      <!-- <Select v-else
        :value="handleWorkPattern(row.workPatternCode)"
        @on-change="handleChange($event, index, row, valueName[8])"
      >
        <Option v-for="item of workPattern" :value="item" :key="item">{{ item }}</Option>
      </Select> -->
    </template>

    <template slot-scope="{ row, index }" slot="isMorningApproved">
      <Select
        :value="handleApproved(row.isMorningApproved)"
        @on-change="handleChange($event, index, row, valueName[4])"
        :transfer="true"
      >
        <Option v-for="item of approved" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </template>

    <template slot-scope="{ row, index }" slot="isOvertimeApproved">
      <Select
        :value="handleApproved(row.isOvertimeApproved)"
        @on-change="handleChange($event, index, row, valueName[5])"
        :transfer="true"
      >
        <Option v-for="item of approved" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </template>

    <template slot-scope="{ row, index }" slot="isVacationApproved">
      <Select
        :value="handleApproved(row.isVacationApproved)"
        @on-change="handleChange($event, index, row, valueName[6])"
        :transfer="true"
      >
        <Option v-for="item of approved" :value="item" :key="item">{{ item }}</Option>
      </Select>
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
          title: '区分コード',
          slot: 'memberDivisionCode',
          key: 'memberDivisionCode',
          minWidth: 80,
          align: 'center'
        },
        {
          title: '区分名',
          slot: 'memberDivisionName',
          key: 'memberDivisionName',
          minWidth: 80,
          align: 'center'
        },
        {
          title: '締日',
          slot: 'separateDay',
          key: 'separateDay',
          minWidth: 60,
          align: 'center'
        },
        {
          title: '端数単位(分)',
          align: 'center',
          children: [
            {
              title: '出勤',
              key: 'startFraction',
              slot: 'startFraction',
              align: 'center',
              minWidth: 40
            },
            {
              title: '退勤',
              key: 'endFraction',
              slot: 'endFraction',
              align: 'center',
              minWidth: 40
            },
            {
              title: '外出',
              key: 'outFraction',
              slot: 'outFraction',
              align: 'center',
              minWidth: 40
            },
            {
              title: '戻り',
              key: 'inFraction',
              slot: 'inFraction',
              align: 'center',
              minWidth: 40
            }
          ]
        },
        {
          title: '日付変更時刻',
          slot: 'separateTime',
          key: 'separateTime',
          minWidth: 65,
          align: 'center'
        },
        {
          title: '勤務形態',
          slot: 'workPatternCode',
          key: 'workPatternCode',
          minWidth: 90,
          align: 'center'
        },
        {
          title: '打刻時の残業計上有無',
          align: 'center',
          children: [
            {
              title: '早出',
              key: 'isMorningApproved',
              slot: 'isMorningApproved',
              align: 'center',
              minWidth: 40
            },
            {
              title: '超過',
              key: 'isOvertimeApproved',
              slot: 'isOvertimeApproved',
              align: 'center',
              minWidth: 40
            },
            {
              title: '休出',
              key: 'isVacationApproved',
              slot: 'isVacationApproved',
              align: 'center',
              minWidth: 40
            }
          ]
        },
        {
          title: '対象',
          width: 65,
          align: 'center',
          slot: 'check'
        }
      ],
      fetchSign: false,
      margin: {
        'margin-right': '10px'
      },
      fraction: [1, 5, 10, 15, 30, 60],
      day: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        '月末'
      ],
      approved: ['有', '無'],
      time: [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00'
      ],
      workPattern: ['固定勤', 'フリー', 'フレックス'],
      value: [],
      valueName: [
        'startFraction',
        'endFraction',
        'outFraction',
        'inFraction',
        'isMorningApproved',
        'isOvertimeApproved',
        'isVacationApproved',
        'separateTime',
        'workPatternCode',
        'separateDay'
      ],
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
      return this.employeeType.list
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
    handleDivisionName(e, row) {
      if (e === '') {
        const id = row.memberDivisionCode
        return this.$Modal.warning({
          title: `区分コード ${id}`,
          content: '区分名を入れてください。'
        })
      }
    },
    handleSeparateDay(e) {
      if (e === 99) {
        return '月末'
      }
      return e
    },
    handleWorkPattern(e) {
      if (e === '1') {
        return '固定勤'
      }
      if (e === '2') {
        return 'フリー'
      }
      return 'フレックス'
    },
    handleSeparateTime(e) {
      if (e === 0) {
        return '00:00'
      }
      const result = `${e / 60}:00`
      const a = result.split(':')[0]
      if (a.length === 1) {
        return `0${result}`
      }
      return result
    },
    handleApproved(e) {
      if (e === true) {
        return '有'
      }
      return '無'
    },
    handleChange(e, i, row, name) {
      // 处理表格里的每一次操作
      const checkboxs = this.getcha.allChildrens(this, 'Checkbox')

      // 首次修改的话，模拟一次点击事件,并新建一条value，下面cover四种特殊情况
      if (checkboxs[i].currentValue === false) {
        // 1.日付変更時刻，则value要被处理成分钟再保存
        if (name === 'separateTime') {
          row[name] = this.utils.timeToMinute(e)
          this.value.push(row)
          return checkboxs[i].$el.click()
        }

        // 2.勤務形態,要变成对应的字符123
        if (name === 'workPatternCode') {
          const result = e === '固定勤' ? '1' : e === 'フリー' ? '2' : '3'
          row[name] = result
          this.value.push(row)

          return checkboxs[i].$el.click()
        }

        // 3.选中了月末
        if (e === '月末') {
          row[name] = 99
          this.value.push(row)

          return checkboxs[i].$el.click()
        }

        // 4.选中了有和无
        if (e === '有') {
          row[name] = true
          this.value.push(row)

          return checkboxs[i].$el.click()
        }
        if (e === '無') {
          row[name] = false
          this.value.push(row)

          return checkboxs[i].$el.click()
        }

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
        if (name === 'separateTime') {
          this.value[realIndex][name] = this.utils.timeToMinute(e)
          return
        }

        if (name === 'workPatternCode') {
          const result = e === '固定勤' ? '1' : e === 'フリー' ? '2' : '3'
          this.value[realIndex][name] = result
          return
        }
        if (e === '月末') {
          this.value[realIndex][name] = 99
          return
        }
        if (e === '有') {
          this.value[realIndex][name] = true
          return
        }
        if (e === '無') {
          this.value[realIndex][name] = false
          return
        }

        return (this.value[realIndex][name] = e)
      }
    }
  }
}
</script>
