<template>
  <div>
    <Table stripe border :columns="columns" :loading="loading" :data="data">
      <template slot-scope="{ row, index }" slot="holidayDate">
        <span>{{ holidayDateView[index] }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="memo">
        <Input
          type="text"
          v-model="row.memo"
          :maxlength="30"
          @on-blur="handleBlur($event.target.value, row, data[index].memo)"
        />
      </template>
      <template slot-scope="{ row, index }" slot="lawOrSetVacationFlg">
        <RadioGroup
          v-model="row.lawOrSetVacationFlg"
          @on-change="checkThis(index)"
        >
          <Radio label="1">
            <span>法定休日</span>
          </Radio>
          <Radio label="2">
            <span>所定休日</span>
          </Radio>
        </RadioGroup>
      </template>
      <template v-if="fixProMode" slot-scope="{ row }" slot="check">
        <Checkbox @click.native="show(row, $event)" />
      </template>
    </Table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// import HolidayData from '@/components/BackupData/HolidayData.js'
export default {
  name: 'HolidayTable',
  data() {
    return {
      columns: [
        {
          title: '祝日',
          slot: 'holidayDate',
          width: 200,
          align: 'center'
        },
        {
          title: '表示名称',
          slot: 'memo',
          align: 'center'
        },
        {
          title: '休日種別',
          slot: 'lawOrSetVacationFlg',
          align: 'center'
        },
        {
          title: '対象',
          align: 'center',
          width: 100,
          slot: 'check'
        }
      ],
      fetchSign: false,
      value: [],
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
    ...mapState(['currentYear', 'holidayList', 'loading']),
    data() {
      return [
        {
          id: '20200101',
          holidayDate: '2020-01-01',
          lawOrSetVacationFlg: '2',
          memo: '元日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200102',
          holidayDate: '2020-01-02',
          lawOrSetVacationFlg: '2',
          memo: '年始休暇',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200103',
          holidayDate: '2020-01-03',
          lawOrSetVacationFlg: '2',
          memo: '年始休暇',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200113',
          holidayDate: '2020-01-13',
          lawOrSetVacationFlg: '2',
          memo: '成人の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200211',
          holidayDate: '2020-02-11',
          lawOrSetVacationFlg: '2',
          memo: '建国記念の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200223',
          holidayDate: '2020-02-23',
          lawOrSetVacationFlg: '2',
          memo: '天皇誕生日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200224',
          holidayDate: '2020-02-24',
          lawOrSetVacationFlg: '2',
          memo: '振替休日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200320',
          holidayDate: '2020-03-20',
          lawOrSetVacationFlg: '2',
          memo: '春分の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200429',
          holidayDate: '2020-04-29',
          lawOrSetVacationFlg: '2',
          memo: '昭和の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200503',
          holidayDate: '2020-05-03',
          lawOrSetVacationFlg: '2',
          memo: '憲法記念日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200504',
          holidayDate: '2020-05-04',
          lawOrSetVacationFlg: '2',
          memo: 'みどりの日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200505',
          holidayDate: '2020-05-05',
          lawOrSetVacationFlg: '2',
          memo: 'こどもの日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200506',
          holidayDate: '2020-05-06',
          lawOrSetVacationFlg: '2',
          memo: '振替休日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200723',
          holidayDate: '2020-07-23',
          lawOrSetVacationFlg: '2',
          memo: '海の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200724',
          holidayDate: '2020-07-24',
          lawOrSetVacationFlg: '2',
          memo: 'スポーツの日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200810',
          holidayDate: '2020-08-10',
          lawOrSetVacationFlg: '2',
          memo: '山の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200921',
          holidayDate: '2020-09-21',
          lawOrSetVacationFlg: '2',
          memo: '敬老の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20200922',
          holidayDate: '2020-09-22',
          lawOrSetVacationFlg: '2',
          memo: '秋分の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20201103',
          holidayDate: '2020-11-03',
          lawOrSetVacationFlg: '2',
          memo: '文化の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        },
        {
          id: '20201123',
          holidayDate: '2020-11-23',
          lawOrSetVacationFlg: '2',
          memo: '勤労感謝の日',
          updateUserId: 132,
          updateDateTime: '2019-11-28 18:33:03'
        }
      ]
    },
    holidayDateView() {
      return this.data.map(e =>
        this.utils.formatDate(e.holidayDate, 'MM月DD日')
      )
    }
  },
  methods: {
    // 共通：変更された行のチェックボックスを選択
    checkThis(i) {
      const checkBoxs = this.getcha.allChildrens(this, 'Checkbox')
      if (checkBoxs[i].currentValue === false) {
        checkBoxs[i].$el.click()
      }
    },

    handleBlur(e, row, old) {
      // 基本入力チェック
      if (e === '') {
        const id = row.hourRestCode
        return this.$Modal.warning({
          title: `コード ${id}`,
          content: '値を入れてください。'
        })
      }

      // 変更があったらチェックを付ける
      // eslint-disable-next-line eqeqeq
      if (e != old) {
        this.checkThis(row._index)
      }
    },
    show(row, e) {
      const currentId = row._index
      if (e.target.checked) {
        const isExist = this.value.some(e => e._index === currentId)
        if (isExist) {
          return
        }
        this.value.push(row)
      }
      if (e.target.checked === false) {
        this.value = this.value.filter(e => e._index !== currentId)
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
