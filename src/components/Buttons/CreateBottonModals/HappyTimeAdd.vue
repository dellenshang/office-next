<template>
  <div>
    <Steps :current="currentStep" style="margin-bottom:50px">
      <Step :title="stepOneText"></Step>
      <Step title="詳細設定"></Step>
    </Steps>
    <div v-show="currentStep === 0">
      <Row>
        <Col span="24">
          <Form :label-width="120" class="mb10" style="margin-top:-40px">
            <Row class="mb10" v-if="localValue.paidType === 1">
              <Col span="11">
                <Divider size="small" orientation="left">名称</Divider>
                <Input v-model="localValue.name"/>
              </Col>
              <Col span="11" offset="2">
                <Divider size="small" orientation="left">備考</Divider>
                <Input v-model="localValue.remark"/>
              </Col>
            </Row>
            <div class="titlenorm">
              <Icon type="logo-buffer"></Icon>有休付与種別
            </div>
            <Row>
              <Col span="11">
                <Divider size="small" orientation="left">対象労働者</Divider>
                <RadioGroup class="vertical-radio" v-model="localValue.paidType">
                  <Radio :label="1" class="custom-radio">通常付与</Radio>
                  <Radio :label="2" class="custom-radio">比例付与</Radio>
                </RadioGroup>
              </Col>
              <Col span="11" offset="2" v-show="localValue.paidType === 1">
                <Divider size="small" orientation="left">どのように付与</Divider>
                <RadioGroup class="vertical-radio" v-model="localValue.type">
                  <Radio :label="1" class="custom-radio">勤務年数による付与</Radio>
                  <Radio :label="2" class="custom-radio">指定日による付与</Radio>
                </RadioGroup>
              </Col>
              <Col span="11" offset="2" v-show="localValue.paidType === 2">
                <Divider size="small" orientation="left">どのように付与</Divider>
                <Alert class="primary-info">週の所定労働日数が<strong>4日以下</strong>かつ週所定労働時間<strong>30時間未満</strong>の労働者。</br>比例付与は「<strong>一年間の所定労働日数</strong>」で判断します。</br>年の途中で労働日数の契約が変わった場合であっても、<strong>付与日時点の所定労働日数で計算します。</strong></Alert>
              </Col>
            </Row>
            <!-- 通常和指定日时出现いつ付与 -->
            <Row v-show="localValue.paidType === 1">
              <div class="titlenorm">
                <Icon type="logo-buffer"></Icon>いつ付与
              </div>
                <Alert class="primary-info" v-show="localValue.type === 1">週の所定労働日数が<strong>5日以上</strong>かつ週所定労働時間<strong>30時間以上</strong>の労働者。</Alert>
              <Col span="11" v-show="localValue.type === 2">
                <Divider size="small" orientation="left">入社年</Divider>
                <Alert class="primary-info">入社日あるいは法定（６ヵ月後）付与は次のページに設定してください。</Alert>
              </Col>
              <Col span="11" offset="2" v-show="localValue.type === 2">
                <Divider size="small" orientation="left">入社２年目以降</Divider>
                <Select v-model="localValue.nextYearType" class="custom-select">
                  <Option :value="1" :key="1">法定（６ヵ月＋１年）付与</Option>
                  <Option :value="2" :key="2">一斉付与（基準日一つ）</Option>
                  <Option :value="3" :key="3">一斉付与（入社日に応じて基準日が複数有）</Option>
                </Select>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
    <div v-show="currentStep === 1">
      <Divider size="small" orientation="left">付与表</Divider>
      <!-- 复数基准日和比例的时候有追加行的按钮 -->
      <div style="text-align:right;margin-right:50px" v-if="localValue.type === 2 && localValue.nextYearType === 3 || localValue.paidType===2">
      <RadioGroup v-model="localValue.proportionPaidType" v-if="localValue.paidType === 2" style="line-height: 32px">
        <Radio :label="1">年間労働日数</Radio>
        <Radio :label="2">週間労働日数</Radio>
      </RadioGroup>
        <Button type="success" class="mr5" ghost @click="addMixType" v-if="localValue.paidType === 2 && localValue.proportionPaidType !== 2 || localValue.paidType === 1 && localValue.nextYearType === 3">追加行</Button>
        <Button type="error" ghost @click="minusMixType" v-if="localValue.paidType === 2 && localValue.proportionPaidType !== 2 || localValue.paidType === 1 && localValue.nextYearType === 3">削除行</Button>
      </div>
      <div
        :class="showScrollBar ? localValue.type === 2 && localValue.nextYearType === 3 || localValue.paidType===2 ? 'custom-table muti-first-column' : 'custom-table': 'custom-table hide'"
        >
        <!-- 左侧固定列， 此处为一齐付与多个基准日时，需要根据需要显示入社月-->
        <div class="first-column muti-first-column" v-if="localValue.paidType === 1 && localValue.nextYearType === 3">
          <p class="green-label label mb1">入社月</p>
          <!-- 复数基准日时循环基准日组件 -->
          <div class="non-border-input input-warp" v-for="(item, i) of mixTypeValue" :key="i">
            <Input v-model="item.hireStartMonth" style="padding-right:1px" class="half-input"></Input>
            <Input v-model="item.hireEndMonth" class="half-input"></Input>
          </div>
        </div>


        <div class="first-column">
          <!-- 勤务年数和指定日但按法定走时才出现这个 -->
          <p class="green-label label mb1" v-if="localValue.paidType === 2">{{ localValue.proportionPaidType === 1 ? '年間労働日数':'週労働日数'  }}</p>
          <p :class="hasStandardDate ? 'green-label label mb1' : 'label mb1'" v-if="localValue.paidType === 1">{{ hasStandardDate ? '基準日' :'勤務年数'  }}</p>
          <p
            class="label"
            v-if="localValue.type === 1 && localValue.paidType===1  || localValue.type === 2 && localValue.nextYearType ===1 && localValue.paidType===1"
          >付与日数</p>
          <div
            class="non-border-input input-warp"
            v-if="localValue.type === 2 && localValue.nextYearType === 2"
          >
            <DatePicker
              type="month"
              :value="localValue.standardDate"
              :editable="false"
              :clearable="false"
              @on-change="localValue.standardDate = $event"
              format="MM月dd日"
            />
          </div>
          <!-- 复数基准日时循环基准日组件 -->
          <div v-if="localValue.nextYearType === 3 && localValue.paidType === 1">
            <div class="non-border-input input-warp" v-for="(item,i) of mixTypeValue" :key="i">
              <DatePicker
                type="month"
                :value="item.standardDate"
                :editable="false"
                :clearable="false"
                @on-change="item.standardDate = $event"
                format="MM月dd日"
              />
            </div>
          </div>
          <!-- 比例赋予 -->
          <div v-if="localValue.paidType === 2 && localValue.proportionPaidType === 1">
            <div class="non-border-input input-warp" v-for="(item,i) of mixTypeValue" :key="i">
            <Input v-model="item.startDays" style="padding-right:1px;width:49px"></Input>
            <Input v-model="item.endDays" style="width:49px"></Input>
            </div>
          </div>
          <div v-if="localValue.paidType === 2 && localValue.proportionPaidType === 2">
            <div class="non-border-input input-warp" v-for="(item,i) of mixTypeValue" :key="i">
            <Input v-model="item.weekWorkDays"></Input>
            </div>
          </div>
        </div>

        <!-- 中间循环设置日组件 -->
        <div class="for-column" v-if="localValue.nextYearType !== 3 && localValue.paidType === 1">
          <div v-for="(item,i) of byWorkYearData" :key="i" class="non-border-input input-warp">
            <!-- 按指定日时，表头不可输入 -->
            <div class="input mb1 mr5" v-if="localValue.type === 2">
              <Input
                :class="localValue.nextYearType !== 1 ? 'green-label label-input' : 'label-input'"
              >
                <span slot="append">{{ item.extra? `${item.workYears}` :`${item.workYears}年目` }}</span>
              </Input>
            </div>
            <!-- 按勤务年数时，表头可输入 -->
            <div class="input mb1 mr5" v-else>
              <Input v-model="item.workYears">
                <span slot="append">{{ localValue.type===1 ? '年' :'年目' }}</span>
              </Input>
            </div>
            <!-- 而日子的输入框只有append的在手动指定基准日模式时需要做颜色的区分 -->
            <div class="input mr5">
              <Input v-model="item.paidDays" :class="hasStandardDate ? 'green-label' :''">
                <span slot="append">日</span>
              </Input>
            </div>
          </div>
        </div>
          <!-- 复数基准日时循环中间组件 -->
        <div class="for-column muti-first-column" v-else>
            <div v-for="(item,i) of forMixCenterValue" :key="i" class="non-border-input input-warp">
              <!-- 非比例时，表头不可输入 -->
              <div class="input mb1 mr5" v-if="localValue.paidType === 1">
                <Input class="green-label label-input">
                  <span slot="append">{{ item.extra? `${item.workYears}` :`${item.workYears}年目` }}</span>
                </Input>
              </div>
            <!-- 比例时时，表头可输入 -->
            <div class="input mb1 mr5" v-else>
              <Input class="green-label" v-model="item.workYears">
                <span slot="append">年</span>
              </Input>
            </div>
              <!-- 日子的输入框需要再次循环-->
              <div class="input mr5" v-for="(e,index) of item.paidDays" :key="index">
                <Input v-model="e.value" class="green-label">
                  <span slot="append">日</span>
                </Input>
              </div>
            </div>
          </div>

        <!-- 最大值 -->
        <div
          :class="endColumnTotop ? 'non-border-input top' : 'non-border-input'"
          style="display: inline-block;position: relative;left:100px"
        >
          <!-- 复数基准日时循环最后 -->
          <ul v-if="localValue.nextYearType === 3 || localValue.paidType===2">
            <li class="mb1" style="width:150px">
              <Input
                v-model="mixTypeValuefinal.workYears"
                class="green-label"
              >
                <Button slot="prepend" @click="handleMixAdd">+</Button>
                <span slot="append">年目以降</span>
              </Input>
            </li>
          <li style="width:150px">
              <Input
              v-for="(item,i) of mixTypeValuefinal.paidDays"
              :key="i"
                v-model="item.value"
                class="green-label"
              >
                <Button slot="prepend" @click="handleMixMinus">-</Button>
                <span slot="append">日</span>
              </Input>
          </li>
          </ul>
          <ul v-else>
            <li class="mb1" style="width:150px">
              <Input
                v-model="byWorkYearDatafinal.workYears"
                :class="hasStandardDate ? 'green-label' :''"
              >
                <Button slot="prepend" @click="handleAdd">+</Button>
                <span slot="append">{{ localValue.type===1 ? '年以降' :'年目以降' }}</span>
              </Input>
            </li>
            <li style="width:150px">
              <Input
                v-model="byWorkYearDatafinal.paidDays"
                :class="hasStandardDate ? 'green-label' :''"
              >
                <Button slot="prepend" @click="handleMinus">-</Button>
                <span slot="append">日</span>
              </Input>
            </li>
          </ul>
        </div>
      </div>
      <section class="preview-chart">
        <ve-line
          :data="chartData"
          width="800px"
          height="363px"
          :extend="extend"
          :after-config="afterConfig"
          :settings="chartSettings"
          :colors="colors"
          :legend-visible="false"
        ></ve-line>
      </section>
    </div>

    <div class="my-footer">
      <Button class="back-btn" type="primary" @click="back">前へ</Button>
      <Button v-if="currentStep === 1" class="next-btn" type="success" @click="next">登録</Button>
      <Button v-else class="next-btn" type="primary" @click="next">次へ</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/deep/.custom-select {
  .ivu-select-selection {
    height: 39px;
    border-radius: 23px;
    .ivu-select-selected-value,
    .ivu-select-placeholder {
      padding: 4px 13px;
      font-size: 14px;
      text-align: center;
    }
  }
}
.custom-table {
  text-align: left;
  padding: 0 50px 0 43px;
  &.muti-first-column {
    padding-left: 143px;
  }
}
.custom-radio {
  padding: 8px 13px;
  border-radius: 28px;
  color: $grey;
  border: 1px solid #dcdee2;
  font-size: 14px;
  box-shadow: 5px 6px 2px 0px $light-grey;
  & /deep/.ivu-radio {
    display: none;
  }

  &.ivu-radio-wrapper-checked {
    color: $login-input-border-active;
    border-color: $login-input-border-active;
    box-shadow: 5px 6px 2px 0px $light-blue;
  }
}
.vertical-radio {
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: space-evenly;
  &.paidBymode {
    height: 178px;
  }
}
/deep/.ivu-input-group-append {
  border-radius: 0;
  font-size: 14px;
  background: $primary;
  color: white;
}
.first-column {
  position: absolute;
  width: 100px;
  text-align: center;
  margin-top: 1px;
  &.muti-first-column {
    left: 58px;
    .half-input {
      width: 49px;
    }
  }
  .label {
    display: inline-block;
    width: 100px;
    line-height: 32px;
    background: $primary-background;
    color: $white;
    font-size: 14px;
    &.green-label {
      background: $success-background;
    }
  }
}
/deep/.green-label {
  .ivu-input-group-append {
    background: $table-td-hover;
    color: $text-green;
  }
}
// 第一列在复数的时候，需要加入入社年月的两个区间
/deep/.for-column {
  display: inline-block;
  position: relative;
  // 留出1px空隙
  left: 101px;
  max-width: calc(100% - 251px);
  white-space: nowrap;
  overflow-x: scroll;
  &.muti-first-column {
    max-width: calc(100% - 230px);
  }
  .input-warp {
    display: inline-block;
    width: 79px;
    white-space: normal;
    .label-input {
      display: table;
      .ivu-input {
        display: none;
      }
      .ivu-input-group-append {
        width: 78px;
        height: 32px;
      }
    }
  }
}
.my-add {
  margin-left: 0.5rem;
}
.mar-top {
  font-size: 14px;
  margin-top: 5px;
}
.alert {
  margin-top: 10px;
  text-align: left;
  font-size: 15px;
  .step-two {
    p {
      margin: 10px 0;
    }
  }
}
.inline-btn {
  height: 30px;
  margin-top: 2px;
}
.inline-input {
  position: absolute;
  width: 68.2%;
  margin-left: 10px;
}
.my-footer {
  @include flex-row(space-between);
  margin-top: 2.5rem;
  font-size: 2rem;
  text-align: left;
}
.hide {
  overflow-y: hidden;
}
.top {
  top: -20px;
}
.preview-chart {
  height: 363px;
  padding-left: 30px;
  margin-top: 20px;
}
</style>

<script>
/* eslint-disable prettier/prettier */
// import { Debounce } from '@/api/utils'
export default {
  name: 'HappyTimeAdd',
  components: {},
  data: function() {
    return {
      currentStep: 0,
      byWorkTable: [
        {
          title: '勤務年数（年）',
          slot: 'year'
        },
        {
          title: '付与日数（日）',
          slot: 'paidDays'
        }
      ],
      chartSettings: {
        area: true,
        xAxisName: ['付与プレビュー']
      },
      extend: {
        series: {
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgb(45, 140, 240)'
                },
                {
                  offset: 1,
                  color: 'rgba(233, 243, 255,0.8)'
                }
              ]
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(45, 140, 240, 0.7)'
                },
                {
                  offset: 1,
                  color: 'rgba(233, 243, 255,0.7)'
                }
              ]
            }
          },
          smooth: true
        },
        yAxis: {
          axisLabel: {
            formatter(item) {
              return `${item}日`
            }
          },
          nameGap: 25,
          min: 'dataMin'
          // splitLine:{
          //   lineStyle:{
          //     color:['rgba(233, 243, 255)']
          //   }
          // }
        },
        xAxis: {
          nameLocation: 'center',
          nameGap: 35,
          nameTextStyle: {
            color: 'rgb(48,118,242)',
            fontSize: 14,
            borderColor: 'rgb(48,118,242)',
            borderWidth: 1,
            borderRadius: 4,
            padding: [7, 5]
          }
        },
        tooltip: {
          formatter(params) {
            let item = params[0]
            return `${item.name}<br/>${item.marker}付与日数: ${item.value[1]}日`
          }
        },
        animationEasing: 'cubicInOut'
      },
      colors: ['rgb(45, 140, 240)'],
      byWorkYearData: [
        { workYears: 0.5, paidDays: 10 },
        { workYears: 1.5, paidDays: 11 },
        { workYears: 2.5, paidDays: 12 },
        { workYears: 3.5, paidDays: 14 },
        { workYears: 4.5, paidDays: 16 },
        { workYears: 5.5, paidDays: 18 }
      ],
      byWorkYearDatafinal: { workYears: 6.5, paidDays: 20, ending: true },
      localValue: {
        //勤务年数还是指定日
        type: 1,
        //比例还是通常
        paidType: 1,
        advanceDays: 5,
        limitFlag: false,
        proportionPaidType: 1,
        standardDateConfigType: 1,
        prepaymentDays: 0,
        validYears: 1,
        standardDateType: 1,
        standardDate: '04-01',
        maxPaymentDays: 20
      },
      mixTypeValue: [
        {
          standardDate: '',
          startDays: 0,
          endDays: 0,
          hireStartMonth: 0,
          weekWorkDays: 0,
          hireEndMonth: 0,
          advanceDays: 0,
          // 中间辅助字段
          workYears: 0,
          standardDateSequence: [
            { workYears: '入社日', paidDays: 0, extra: true },
            { workYears: '1年目', paidDays:10, extra: true }
          ]
        }
      ],
      forMixCenterValue: [],
      mixTypeValuefinal: {
        workYears: 0,
        paidDays: [{ value: 0, ending: true }]
      }
    }
  },
  mounted: function() {},
  computed: {
    stepOneText() {
      if (this.currentStep === 0) {
        return '基本情報'
      }
      if (this.localValue.type === 1) {
        return '勤務年数により'
      }
      if (this.localValue.type === 2) {
        return '指定日により'
      }
      return '選択待ち'
    },
    // 是否是根据手动指定基准日，此模式下，为绿色
    hasStandardDate() {
      if (this.localValue.type === 2 && this.localValue.nextYearType !== 1) return true
      else return false
    },
    showScrollBar() {
      if (this.localValue.type === 2 && this.localValue.nextYearType === 3) {
        return true
      }
      if (this.byWorkYearData.length > 6) {
        return true
      }
      return false
    },
    endColumnTotop() {
      if (this.byWorkYearData.length === 0) {
        return false
      }
      return true
    },
    daynamicChart() {
      const isYearFixed = this.localValue.type === 1 ? false : true
      const rows = this.byWorkYearData.map(e => {
        if (e.extra) return { workYears: `${e.workYears}`, paidDays: e.paidDays }
        else
          return {
            workYears: isYearFixed ? `${e.workYears}年目` : `${e.workYears}年`,
            paidDays: e.paidDays
          }
      })
      const finalRow = {
        workYears: isYearFixed
          ? `${this.byWorkYearDatafinal.workYears}年目以降`
          : `${this.byWorkYearDatafinal.workYears}年以降`,
        paidDays: this.byWorkYearDatafinal.paidDays
      }
      if (this.byWorkYearData.length > 0) {
        return {
          columns: ['workYears', 'paidDays'],
          rows: rows.concat(finalRow)
        }
      }
      return {
        columns: ['workYears', 'paidDays'],
        rows: [finalRow]
      }
    },
    daynamicMixChart() {
      // 在这里做出表头
      let centerColumns = []
      // 如果是多个基准日
      if (this.localValue.paidType === 1 && this.localValue.nextYearType === 3) {
        centerColumns = this.mixTypeValue.map(e => {
          let hireStartMonth = e.hireStartMonth || ''
          let hireEndMonth = e.hireEndMonth || ''
          return `${hireStartMonth}月~${hireEndMonth}月`
        })
      }
      if (this.localValue.proportionPaidType === 1) {
        centerColumns = this.mixTypeValue.map(e => {
          let standardDays = e.startDays || ''
          let endDays = e.endDays || ''
          return `${standardDays}日~${endDays}日`
        })
      } else {
        centerColumns = this.mixTypeValue.map(e => {
          let weekWorkDays = e.weekWorkDays || ''
          return `週${weekWorkDays}日`
        })
      }
      // const finalColumn = [`${this.mixTypeValuefinal.workYears}年目以降`]
      const headRow = ['workYears'].concat(centerColumns)
      let formatedFinalCloumn = { ...this.mixTypeValuefinal }
      formatedFinalCloumn.workYears = `${formatedFinalCloumn.workYears}年以降`
      const rowData = this.forMixCenterValue.concat(formatedFinalCloumn)

      const a = this.dataTableToGraph(headRow, rowData)
      const result = {
        columns: headRow,
        rows: a
      }
      console.log(result)
      return result
    },
    chartData() {
      if (this.localValue.paidType === 2 || (this.localValue.paidType === 1 && this.localValue.nextYearType === 3))
        return this.daynamicMixChart
      else return this.daynamicChart
    }
  },
  watch: {
    'localValue.type': {
      handler(newValue) {
        this.$nextTick(() => {
          if (newValue === 1) {
            this.byWorkYearData = [
              { workYears: 0.5, paidDays: 10 },
              { workYears: 1.5, paidDays: 11 },
              { workYears: 2.5, paidDays: 12 },
              { workYears: 3.5, paidDays: 14 },
              { workYears: 4.5, paidDays: 16 },
              { workYears: 5.5, paidDays: 18 }
            ]
            this.byWorkYearDatafinal = {
              workYears: 6.5,
              paidDays: 20,
              ending: true
            }
            return
          }
          if (newValue === 2) {
            this.byWorkYearData = [
              { workYears: '入社日', paidDays: 0, extra: true },
              { workYears: '1年目', paidDays: 10, extra: true },
              { workYears: 2, paidDays: 11 },
              { workYears: 3, paidDays: 12 },
              { workYears: 4, paidDays: 14 },
              { workYears: 5, paidDays: 16 }
            ]
            this.byWorkYearDatafinal = {
              workYears: 6,
              paidDays: 20,
              ending: true
            }
            return
          }
        })
      },
      immediate: true
    },
    'localValue.paidType': {
      handler(newValue) {
        this.$nextTick(() => {
          this.mixTypeValue = [
            {
              standardDate: '',
              hireStartMonth: 0,
              hireEndMonth: 0,
              advanceDays: 0,
              workYears: 0,
              standardDateSequence: [
                { workYears: '入社日', paidDays: 0, extra: true },
                { workYears: '1年目', paidDays:10, extra: true }
              ]
            }
          ]
          this.mixTypeValuefinal = {
            workYears: 0,
            paidDays: [{ value: 0, ending: true }]
          }
          if (newValue === 1) {
            this.forMixCenterValue = [
              {
                workYears: '入社日',
                extra: true,
                paidDays: [{ value: 0 }]
              },
              {
                workYears: '1年目',
                extra: true,
                paidDays: [{ value: 10 }]
              }
            ]
            return
          }
          if (newValue === 2) {
            this.localValue.nextYearType = null
            this.localValue.type = 1
            this.forMixCenterValue = [
              {
                workYears: '0',
                extra: true,
                paidDays: [{ value: 0 }]
              },
              {
                workYears: '0.5',
                extra: true,
                paidDays: [{ value: 10 }]
              }
            ]
            return
          }
        })
      },
      immediate: true
    },
    'localValue.proportionPaidType': {
      handler(newValue) {
        if (newValue === 1) {
          this.mixTypeValue = [{ startDays: 48, endDays: 72 }]
          this.forMixCenterValue = [
            {
              workYears: '0',
              extra: true,
              paidDays: [{ value: 0 }]
            },
            {
              workYears: '0.5',
              extra: true,
              paidDays: [{ value: 10 }]
            }
          ]
          this.mixTypeValuefinal = {
            workYears: 0,
            paidDays: [{ value: 0, ending: true }]
          }
          return
        }
        if (newValue === 2) {
          // 周所定时为4个固定的值
          this.mixTypeValue = [{ weekWorkDays: 1 }, { weekWorkDays: 2 }, { weekWorkDays: 3 }, { weekWorkDays: 4 }]
          this.forMixCenterValue = [
            {
              workYears: '0',
              extra: true,
              paidDays: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }]
            },
            {
              workYears: '0.5',
              extra: true,
              paidDays: [{ value: 10 }, { value: 10 }, { value: 10 }, { value: 10 }]
            }
          ]
          this.mixTypeValuefinal = {
            workYears: 0,
            paidDays: [{ value: 20 }, { value: 20 }, { value: 20 }, { value: 20 }]
          }
          return
        }
      },
      immediate: true
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    handleAdd() {
      // 指定日付与时，第一个得是第二年目
      let newOne = { workYears: this.localValue.type === 2 ? 1 : 0 }
      if (this.byWorkYearData.length > 0) {
        // 指定日付与时，必须大于两个条目才能取值
        if (this.localValue.type === 1 || this.byWorkYearData.length > 2) {
          newOne = this.byWorkYearData[this.byWorkYearData.length - 1]
        }
      }
      // 当末尾年增到最大数的时候，最大数永远比它多1
      if (+newOne.workYears + 1 >= +this.byWorkYearDatafinal.workYears) {
        this.byWorkYearDatafinal.workYears = +newOne.workYears + 2
      }
      this.byWorkYearData.push({
        workYears: +newOne.workYears + 1 || 0,
        paidDays: ''
      })
    },
    handleMixAdd() {
      // 复数基准日中间加一行
      const length = this.forMixCenterValue.length
      let newOne = { workYears: 2, paidDays: this.utils.deepClone(this.forMixCenterValue[0].paidDays) }
      if (length > 2) {
        newOne.workYears = +this.forMixCenterValue[length - 1].workYears + 1
      }
      this.forMixCenterValue.push(newOne)
    },
    handleMinus() {
      // 指定日付与时，不可以删除最开始的两个
      if (this.localValue.type === 2 && this.byWorkYearData.length === 2) return
      this.byWorkYearData.pop()
    },
    handleMixMinus() {
      // if (this.forMixCenterValue.length === 2) return
      // this.forMixCenterValue.pop()
      // 调试循环用
      console.log(this.daynamicMixChart)
    },
    // 复数基准日下追加行时
    addMixType() {
      this.mixTypeValue = this.mixTypeValue.concat({
        standardDate: '',
        hireStartMonth: 0,
        hireEndMonth: 0,
        advanceDays: 0,
        // 中间辅助字段
        workYears: 0,
        standardDateSequence: [{ workYears: 1, paidDays: 0, ending: false }]
      })
      // 中间加其实是加每一条的深度
      this.forMixCenterValue.forEach(e => {
        // 这里使用push的话会导致有些被push两次，但是打印次数发现是正确的
        e.paidDays = e.paidDays.concat({ value: 1 })
      })
      this.mixTypeValuefinal.paidDays = this.mixTypeValuefinal.paidDays.concat({ value: 0, ending: true })
    },
    minusMixType() {
      if (this.mixTypeValue.length === 1) return
      this.mixTypeValue.pop()
      this.forMixCenterValue.forEach(e => {
        e.paidDays.pop()
      })
      this.mixTypeValuefinal.paidDays.pop()
    },
    next() {
      // if (this.currentStep === 0) {
      //   return (this.currentStep += 1)
      // }
      if (this.currentStep === 1) {
        this.addVactionMode()
        return
      }
      // if (this.currentStep === 2) {
      //   console.log(this.localValue)
      // }
      this.currentStep += 1
      return
    },
    addVactionMode() {
      const value = this.localValue
      const that = this
      if (value.paidType === 2) {
        const vacation = this.mixTypeValue.map((e, i) => {
          // 比例付与中不需要判断提前付玉
          let otherForData = []
          that.forMixCenterValue.forEach((e) => {
            return otherForData.push({
              workYears: +e.workYears,
              paidDays: +e.paidDays[i].value
            })
          })
          const stepData = otherForData.concat([
            { workYears: +that.mixTypeValuefinal.workYears, paidDays: +that.mixTypeValuefinal.paidDays[i].value }
          ])
          const workYearsList = stepData.map(e => {
            return { workYears: e.workYears, paidDays: e.paidDays }
          })
          // 如果是按年间劳动日
          if (this.localValue.proportionPaidType === 1) {
            return {
              byWeek: false,
              startDays: +e.startDays,
              endDays: +e.endDays,
              workYearsList
            }
          }
          // 如果是按周所定劳动日
          return {
            byWeek: true,
            weekWorkDays: +e.weekWorkDays,
            workYearsList
          }
        })
        console.log('比例付与')
        console.log(vacation)
        this.api
          .happy('addRate', vacation)
          .then(() => this.api.happy('fetch'))
          .then(() => this.$Message.success('完了'))

        return
      }
      if (value.paidType === 1) {
        if (value.type === 1) {
          console.log('通常-勤务年数')
          // todo: 这里还需要判断第一条是不是为0
          const hasAdvance = +this.byWorkYearData[0].workYears === 0
          const vacation = {
            type: 1,
            normalVacation: {
              type: 1,
              name: this.localValue.name,
              advanceDays: hasAdvance ? +this.byWorkYearData[0].paidDays : 0,
              workYearList: hasAdvance
                ? this.byWorkYearData.slice(1, this.byWorkYearData.length - 1).concat(this.byWorkYearDatafinal)
                : this.byWorkYearData.concat(this.byWorkYearDatafinal)
            }
          }
          console.log(vacation)
          this.api
            .happy('add', vacation)
            .then(() => this.api.happy('fetch'))
            .then(() => this.$Message.success('完了'))
          return
        }
        if (value.nextYearType === 1) {
          console.log('通常-指定日-法定')
          const hasAdvance = +this.byWorkYearData[0].paidDays !== 0
          let PreTwoData = [{ workYears: 1, paidDays: this.byWorkYearData[1].paidDays }]
          let stepData = PreTwoData.concat(this.byWorkYearData.slice(2, this.byWorkYearData.length)).concat(
            this.byWorkYearDatafinal
          )
          const _stepData = stepData.map(e => {
            return { workYears: e.workYears - 0.5, paidDays: +e.paidDays }
          })
          const vacation = {
            type: 1,
            normalVacation: {
              type: 2,
              name: this.localValue.name,
              advanceDays: hasAdvance ? +this.byWorkYearData[0].paidDays : 0,
              workYearList: _stepData
            }
          }
          console.log(vacation)
          this.api
            .happy('add', vacation)
            .then(() => this.api.happy('fetch'))
            .then(() => this.$Message.success('完了'))
          return
        }
        if (value.nextYearType === 2) {
          console.log('通常-指定日-单基准日')
          const hasAdvance = +this.byWorkYearData[0].paidDays !== 0
          let PreTwoData = [{ workYears: 1, paidDays: this.byWorkYearData[1].paidDays }]
          let stepData = PreTwoData.concat(this.byWorkYearData.slice(2, this.byWorkYearData.length)).concat(
            this.byWorkYearDatafinal
          )
          stepData = stepData.map(e => {
            return { stepYears: e.workYears, paidDays: +e.paidDays }
          })
          const standardDate = this.localValue.standardDate
          const vacation = {
            type: 2,
            standardDateVacation: {
              name: this.localValue.name,
              standardDate: `${standardDate.substring(0, 2)}-${standardDate.substring(3, 5)}`,
              advanceDays: hasAdvance ? +this.byWorkYearData[0].paidDays : 0,
              stepYearList: stepData
            }
          }
          console.log(vacation)
          this.api
            .happy('add', vacation)
            .then(() => this.api.happy('fetch'))
            .then(() => this.$Message.success('完了'))
          return
        }
      }
      const vacation = {
        type: 3,
        remark: this.localValue.remark,
        mixedVacation: {
          name: this.localValue.name,
          mixedVacationList: this.mixTypeValue.map((e, i) => {
            // 每一条都要判断是不是有提前付与
            const advanceDays = +that.forMixCenterValue[0].paidDays[i].value
            let otherForData = []
            // 去除每一条的头两项付与日数（入社和半年后）
            that.forMixCenterValue.forEach((e, j) => {
              if (j === 0) return
              return otherForData.push({
                paidDays: +e.paidDays[i].value
              })
            })
            const stepData = otherForData.concat([
              { paidDays: +that.mixTypeValuefinal.paidDays[i].value }
            ])
            const standardDateList = stepData.map((e, i) => {
              return { stepYears: i + 1, paidDays: e.paidDays }
            })
            return {
              hireStartMonth: +e.hireStartMonth,
              hireEndMonth: +e.hireEndMonth,
              standardDate: `${e.standardDate.substring(0, 2)}-01`,
              advanceDays: advanceDays > 0 ? advanceDays : 0,
              standardDateList
            }
          })
        }
      }
      console.log('多基准日')
      console.log(vacation)
      this.api
        .happy('add', vacation)
        .then(() => this.api.happy('fetch'))
        .then(() => this.$Message.success('完了'))
    },
    back() {
      if (this.currentStep === 0) {
        return
      } else {
        return (this.currentStep = this.currentStep - 1)
      }
    },
    afterConfig(options) {
      // options.series[0].itemStyle = {
      //   emphasis: {
      //     shadowBlur: 10,
      //     shadowOffsetX: 0,
      //     shadowColor: 'rgba(0, 0, 0, 0.5)'
      //   },
      //   normal:{
      //     label:{
      //       show: true,
      //       formatter: '{b} : {c} ({d}%)'
      //     },
      //     labelLine :{show:true}
      //   }
      // }
      // options.series[0].data = [55,100,200,300]
      return options
    },
    dataTableToGraph(headRow, rowData) {
      console.log(rowData)
      let result = []
      const len = rowData.length
      // 有几个基准日就循环几次
      for (let i = 0; i < len; i++) {
        let t = {}
        // 创建echarts显示用数据
        headRow.forEach((e, j) => {
          if (j === 0) {
            return (t[e] = rowData[i].workYears)
          }
          t[e] = rowData[i].paidDays[j - 1].value
        })
        result = result.concat(t)
      }
      return result
    }
  }
}
</script>
