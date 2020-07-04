<template>
  <div id="Mycharts">

  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '1'
    }
  },
  props: [
    'datas'
  ],
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let Mycharts = this.$echarts.init(document.getElementById('Mycharts'))
      // 绘制图表
      Mycharts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['利润', '支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: this.datas.xData
          }
        ],
        series: [
          {
            name: '利润',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data: this.datas.yData1
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true
              }
            },
            data: this.datas.yData2
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'left'
              }
            },
            data: this.datas.yData3
          }
        ]

      })
    }
  }
}
</script>
<style scoped>
#Mycharts {
  width: 300px;
  height: 300px;
}
</style>
