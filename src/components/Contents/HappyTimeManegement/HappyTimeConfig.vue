<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1>
            <Icon type="i-happytime colored"></Icon>
            {{ $route.meta.name }}
          </h1>
        </div>
        <div class="btnbox ml5">
          <CreateButton
            v-auth="['add']"
            @add="onAdd"
            modalWidth="850"
            name="HappyTimeAdd"
            v-if="forReset"
            key="forReset-1"
          />
          <CreateButton v-auth="['add']" @add="onAdd" modalWidth="850" name="HappyTimeAdd" v-else key="forReset-2" />
          <RefreshButton @refresh="onRefresh" />
        </div>
      </div>
    </div>
    <div class="content_body" v-loading="loading">
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row }" slot="type">
          <span>
            {{
              row.isRate
                ? '比例付与'
                : row.vacationType === 1 && row.type && row.type === 1
                ? '勤務年数による付与'
                : '指定日による付与'
            }}
          </span>
        </template>

        <template slot-scope="{ row }" slot="vacationType">
          <span>{{ paidVacationView(row) }}</span>
        </template>

        <template slot-scope="{ row }" slot="remark">
          <span>{{ row.remark ? row.remark : '' }}</span>
        </template>

        <template slot-scope="{ row }" slot="action">
          <Button type="primary" ghost size="small" icon="md-eye" style="margin-right: 5px" @click="handleView(row)">
            照会
          </Button>
          <DeleteButton v-auth="['delete']" :isLight="true" @remove="onRemove(row)" />
        </template>
      </Table>
      <Modal v-model="isShow" :title="modalTitle" width="850" draggable @on-cancel="cancel">
        <LineChart :chartData="chartData" width="800px"></LineChart>
        <div slot="footer">
          <!-- <Button type="er商品ror" size="large" long :loading="loading" @click="del">删除</Button> -->
        </div>
      </Modal>
    </div>
  </Content>
</template>

<style lang="scss" scoped></style>

<script>
import { createNamespacedHelpers } from 'vuex'
import LineChart from '../../Function/Chart/LineChart'
const { mapState, mapActions } = createNamespacedHelpers('happy')
import Buttons from '../../Buttons'
export default {
  name: 'HappyTimeConfig',
  components: {
    CreateButton: Buttons.CreateButton,
    LineChart,
    RefreshButton: Buttons.RefreshButton,
    DeleteButton: Buttons.DeleteButton
  },
  data: function() {
    return {
      searchVal: {},
      columns: [
        {
          title: '名称',
          key: 'name',
          align: 'center'
        },
        {
          title: 'どのように付与',
          slot: 'type',
          align: 'center'
        },
        {
          title: 'いつ付与',
          slot: 'vacationType',
          align: 'center'
        },
        {
          title: '備考',
          slot: 'remark'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      isShow: false,
      chartData: [],
      loading: false,
      modalTitle: '',
      forReset: false
    }
  },
  computed: {
    ...mapState(['list', 'rate']),
    data() {
      if (this.rate && this.rate.length > 1) {
        console.log('xixi')
        return [...this.list, { name: '比例付与', isRate: true, dateList: this.rate }]
      }
      return this.list
    }
  },

  created() {
    this.Action_Happy_Get({ context: this })
  },
  methods: {
    ...mapActions(['Action_Happy_Add', 'Action_Happy_Update', 'Action_Happy_Delete', 'Action_Happy_Get']),
    onAdd() {
      const value = this.getcha.nearChildren(this, 'HappyTimeAdd').localValue
      console.log(value)
      this.forReset = !this.forReset
      if (value) {
        this.Action_Happy_Add({ value, context: this })
      }
    },
    onRefresh() {
      this.Action_Happy_Get({ context: this })
    },
    onRemove(row) {
      if (row.isRate) this.Action_Happy_Delete({ isRate: true, context: this })
      else {
        let value = {}
        value.id = row.vacationId
        if (row.vacationType) value.type = row.vacationType
        this.Action_Happy_Delete({ value, context: this })
      }
    },
    handleView(row) {
      this.isShow = true
      this.chartData = []
      if (row.name) this.modalTitle = row.name
      else this.modalTitle = '比例付与'
      this.dataToChart(row)
    },
    paidVacationView(row) {
      if (row.vacationType === 1 && row.type === 2) {
        return '法定（６ヵ月＋１年）付与'
      }
      if (row.vacationType === 2) {
        return '一斉付与（基準日一つ）'
      }
      if (row.vacationType === 3) {
        return '一斉付与（入社日に応じて基準日が複数有）'
      }
      return
    },
    cancel() {
      this.chartData = []
    },
    dataToChart(row) {
      let result = {
        xAxis: [],
        data: []
      }
      const type = row.vacationType
      if (type === 1) {
        // 通常付与涵盖法定付与和6个月后+一年付与
        const length = row.sequence.length - 1
        if (row.advanceDays) {
          result.xAxis.push(`入社日`)
          result.data.push(row.advanceDays)
        }
        row.sequence.forEach((e, i) => {
          if (row.type === 2) {
            if (i === length) {
              result.xAxis.push(`${e.workYears + 0.5}年目以降`)
            } else {
              result.xAxis.push(`${e.workYears + 0.5}年目`)
            }
          } else {
            if (i === length) {
              result.xAxis.push(`${e.workYears}年以降`)
            } else {
              result.xAxis.push(`${e.workYears}年`)
            }
          }
          result.data.push(e.paidDays)
        })
        this.chartData.push(result)
      }
      if (type === 2) {
        // 一齐付与
        const length = row.sequence.length - 1
        if (row.advanceDays) {
          result.xAxis.push(`入社日`)
          result.data.push(row.advanceDays)
        }
        row.sequence.forEach((e, i) => {
          if (i === length) {
            result.xAxis.push(`${e.stepYears}年目以降`)
          } else {
            result.xAxis.push(`${e.stepYears}年目`)
          }

          result.data.push(e.paidDays)
        })
        this.chartData.push(result)
      }
      if (type === 3) {
        // 复数一齐付与
        row.dateList.forEach(e => {
          let _result = {
            xAxis: [],
            data: [],
            legend: []
          }
          const length = e.sequence.length - 1
          _result.legend = `${e.hireStartMonth}月~${e.hireEndMonth}月入社  ${e.standardDate}基準日`
          _result.xAxis.push(`入社日`)
          if (e.advanceDays) {
            _result.data.push(e.advanceDays)
          } else {
            _result.data.push(0)
          }
          e.sequence.forEach((e, i) => {
            if (i === length) {
              _result.xAxis.push(`${e.stepYears}年目以降`)
            } else {
              _result.xAxis.push(`${e.stepYears}年目`)
            }

            _result.data.push(e.paidDays)
          })
          this.chartData = this.chartData.concat(_result)
        })
      }
      if (!type) {
        // 比例付与
        row.dateList.forEach(e => {
          let _result = {
            xAxis: [],
            data: [],
            legend: []
          }
          if (e.byWeek) {
            _result.legend = `週労働日数${e.weekWorkDays}`
          } else {
            _result.legend = `年間労働日数${e.startDays}日~${e.endDays}日`
          }
          const length = e.workYearsList.length - 1
          e.workYearsList.forEach((e, i) => {
            if (i === length) {
              _result.xAxis.push(`${e.workYears}年目以降`)
            } else {
              _result.xAxis.push(`${e.workYears}年目`)
            }
            _result.data.push(e.paidDays)
          })
          this.chartData = this.chartData.concat(_result)
        })
      }
    }
  }
}
</script>
