<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import cool from './theme'
import resize from './resize'
export default {
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
        xName: [],
        series:[],
        legendName:[]
      }
      this.chartData.forEach((e, i) => {
        opts.xName[i] = e.xName // 勤务年数
        opts.series = {
          name: e.LName, // 每一条的名字，和legend相同
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
        }
        opts.legendName = e.LName
      })
      this.chart.setOption({
        xAxis: {
          data: opts.xName,
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
          orient: 'vertical',
          left: 10,
          data: opts.legendName
        },
        series: opts.series
      })
    }
  }
}
</script>