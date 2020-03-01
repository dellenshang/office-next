<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import cool from './theme'
import resize from './resize'
export default {
  name: 'PineChart',
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
          type: 'pine',
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
      this.chart.setOption({
        xAxis: {
          data: opts.xAxis,
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
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
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          left: 10,
          orient: 'vertical',
          data: opts.legend
        },
        series: opts.series
      })
    }
  }
}
</script>
