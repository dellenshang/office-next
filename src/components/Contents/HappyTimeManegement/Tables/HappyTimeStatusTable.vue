<template>
  <Table border :columns="columns" :row-class-name="()=>'select-col'" v-loading="loading" :data="data" @on-row-click="handleRowClick(arguments)">

    <!-- <template slot-scope="{ row }" slot="hireYears">
      <span>{{`${row.hireYears}年 ${monthHelper[row.hireMonths]}`}}</span>
    </template> -->

    <template v-if="row.lastYearRemainDays" slot-scope="{ row }" slot="lastYearRemainDays">
      <span>{{ row.lastYearRemainDays |  addDecimal}}</span>
    </template>

    <!-- <template v-if="row.prepaymentDays" slot-scope="{ row }" slot="prepaymentDays">
      <span :class="row.prepaymentDays === row.calcPaymentDays ? '' : 'red'">{{ row.modeType === 1 ? row.prepaymentDays : '' |  addDecimal}}</span>
    </template> -->

    <template slot-scope="{ row }" slot="totalDays">
      <span :class="row.paymentDays === row.calcPaymentDays ? '' : 'red'">{{ row.paymentDays |  addDecimal}}</span>
    </template>

    <template slot-scope="{ row }" slot="usedDays">
      <Progress
        :percent="row.totalDays ? (row.totalDays - row.histories[row.histories.length-1].totalUsedDays)/row.totalDays * 100 : 0"
        hide-info
        :class="row.totalDays && (row.totalDays - row.histories[row.histories.length-1].totalUsedDays)/row.totalDays * 100 < 30 ? 'urge-progress custom-progress' : 'custom-progress'"
      />
      <!-- class="custom-progress ivu-progress-active" -->
      <span style="margin-left:10px">{{`${row.histories[row.histories.length-1].totalUsedDays} / ${row.totalDays}`}}</span>
    </template>

    <template slot-scope="{ row }" slot="vaildTime">
      <span　:class="new Date().getFullYear() === new Date(row.startDate).getFullYear() ? '' : 'red'">{{`${row.startDate} ～ ${row.expiryDate}`}}</span>
    </template>

    <template slot-scope="{ row }" slot="nextTotalDays">
      <span>{{ row.nextTotalDays |  addDecimal}}</span>
    </template>

  </Table>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HappyTimeStatusTable',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: Array
  },
  data() {
    return {
      fetchSign: false,
      value: [],
      fixProMode: true,
      columns: [
        {
          title: 'コード',
          key: 'code',
          minWidth: 40,
          maxWidth: 90,
          align: 'right'
        },
        {
          title: '社員名称',
          key: 'empName',
          width: 100,
        },
        {
          title: '入社日',
          key: 'hireDate',
          minWidth: 90,
          maxWidth: 120,
          align: 'center'
        },
        {
          title: '繰越日数',
          slot: 'lastYearRemainDays',
          minWidth: 50,
          maxWidth: 80,
          align: 'center'
        },
        {
          title: '有休付与体系',
          key: 'modeName',
          minWidth: 70,
          maxWidth: 120,
          align: 'center'
        },
        {
          title: '付与日数',
          slot: 'totalDays',
          minWidth: 40,
          maxWidth: 90,
          align: 'center'
        },
        {
          title: '年休残(消化数/総数)',
          slot: 'usedDays',
          minWidth: 230
        },
        {
          slot: 'vaildTime',
          width: 180,
          renderHeader: (h, params) => {
            return h(
              'Tooltip',
              {
                props: {
                  content:
                    '開始時間は当年ではない場合、付与日数は前倒し日数で、次の基準日に付与日数まで補います。',
                  theme: 'light',
                  placement: 'top-start',
                  maxWidth: '300',
                  transfer: true
                }
              },
              [
                h('Icon', {
                  props: {
                    type: 'md-help-circle table-icon'
                  }
                }),
                '年休有効期限'
              ]
            )
          },
          align: 'center'
        },
        {
          title: '基準日',
          key: 'standardDate',
          width: 80,
          align: 'center'
        },
        {
          title: '次回付与',
          slot: 'nextTotalDays',
          minWidth: 35,
          maxWidth: 100,
          align: 'center'
        }
      ]
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
  computed: {},
  filters: {
    addDecimal(e) {
      if (!e) {
        return ''
      }
      return parseInt(e, 10) === e ? `${e}.0` : e
    }
  },
  methods: {
    handleBlur(e, row, old) {
      if (e === '') {
        const id = row.restTypeId
        return this.$Modal.warning({
          title: `ID ${id}`,
          content: '名称を入れてください。'
        })
      }
      if (e.trim() != old) {
        this.checkThis(row._index)
      }
    },
    checkThis(i) {
      const checkBoxs = this.getcha.allChildrens(this, 'Checkbox')
      if (checkBoxs[i].currentValue === false) {
        checkBoxs[i].$el.click()
      }
    },
    show(e, row) {
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
    },
    handleRowClick(args) {
        this.$emit('openDraw', args)
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-progress {
  width: 73%;
}

/deep/ {
  &.ivu-progress-success .ivu-progress-bg,
  &.ivu-progress-bg {
    background: $primary-background;
    box-shadow: 1px 1px 4px 0px $box-shadow;
  }
  &.table-icon {
    vertical-align: baseline;
  }
  &.urge-progress .ivu-progress-bg {
    background: $error-background;
  }
}
</style>
