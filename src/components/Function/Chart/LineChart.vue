<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import cool from './theme'
import resize from './resize'
export default {
  name: 'LineChart',
  mixins: [resize],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    chartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        this.setOptions()
      }
    }
  },
  mounted() {
    echarts.registerTheme('cool', cool)
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'cool')
      this.setOptions()
    },
    setOptions() {
      let opts = {
        xAxis: [],
        series: [],
        legend: []
      }
      this.chartData.forEach(e => {
        opts.xAxis = e.xAxis // 勤务年数
        opts.series = opts.series.concat({
          name: e.legend, // 每一条的名字，和legend相同
          smooth: true,
          type: 'line',
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
          // symbolSize: '0',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: e.data
        })
        opts.legend = opts.legend.concat(e.legend)
      })
      this.chart.setOption(
        {
          xAxis: {
            data: opts.xAxis,
            nameGap: 35,
            boundaryGap: true,
            axisTick: {
              show: false
            },
            splitLine: { show: false },
            axisLabel: {
              interval: 0,
              margin: 10 //刻度标签与轴线之间的距离。
            }
          },
          grid: {
            left: 30,
            right: 30,
            bottom: 20,
            top: 30,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line',
              label: {
                backgroundColor: 'rgb(45,140,240)'
              }
            },
            // formatter(params) {
            //   console.log(params)
            //   let item = params[0]
            //   return `${item.name}<br/>${item.marker}付与日数: ${item.value[1]}日`
            // },
            padding: [5, 10]
          },
          yAxis: {
            axisTick: {
              show: false
            },
            axisLine: { show: false },
            axisLabel: {
              formatter(value) {
                return `${value}日`
              }
            },
            min: 'dataMin'
          },
          legend: {
            left: 10,
            orient: 'vertical',
            data: opts.legend
          },
          series: opts.series
        },
        true
      )
    }
  }
}
</script>
