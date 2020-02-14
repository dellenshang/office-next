<template>
  <Content class="content">
    <div class="content_head">
      <div class="header">
        <div class="title1">
          <h1><Icon type="i-profile colored"></Icon>個人情報変更</h1>
        </div>
      </div>
    </div>
    <div class="content_body">
      <div style="width: 100%;height: 500px;" ref="chart" class="tl"></div>
    </div>
  </Content>
</template>
<style lang="scss" scoped></style>
<script>
import echarts from 'echarts'
import cool from './theme'
import resize from './resize'
export default {
  name: 'profile',
  data: function() {
    return {
      chart: null
    }
  },
  mixins: [resize],
  mounted() {
    echarts.registerTheme('cool', cool)
    this.drawLine()
  },
  computed: {},
  methods: {
    drawLine() {
      this.chart = echarts.init(this.$refs.chart, 'cool')
      let option = {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            type: 'cross'
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
          data: ['expected', 'actual']
        },
        series: [
          {
            name: 'expected',
            smooth: true,
            type: 'line',
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
            data: [100, 120, 161, 134, 105, 160, 165]
          },
          {
            name: 'actual',
            type: 'line',
            // symbolSize: '0',
            data: [120, 82, 91, 154, 162, 140, 145],
            label: {
              normal: {
                show: true,
                position: 'top'
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
                    color: 'rgba(84,216,159, 0.5)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(84,216,159, 0.1)'
                  }
                ]
              }
            }
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>
