<script setup>
import { ref } from 'vue';

const chartOverviewOptions = ref({
  chart: {
    id: "basic-line",
    animations: {
      speed: 200
    },
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    labels: {
      style: {
        colors: ['#BFBFBF', '#BFBFBF', '#BFBFBF', '#BFBFBF', '#BFBFBF', '#BFBFBF', '#BFBFBF']
      }
    }
  },
  yaxis: {
    tickAmount: 3,
    min: 10,
    max: 40,
    labels: {
      style: {
        colors: ['#BFBFBF']
      }
    }
  },
  colors: ['#AEF378'],
  markers: {
    colors: ['#AEF378']
  },
  fill: {
    colors: ['#AEF378'],
    opacity: 0.9,
    type: 'solid',
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return '<div class="arrow_box">' +
        '<span>' + '$' + series[seriesIndex][dataPointIndex] + '.00' + '</span>' +
        '</div>'
    },
  }
})
const seriesOverview = ref([
  {
    name: "amount",
    data: [25, 25, 25, 25, 25, 25, 25],
  }
])
</script>

<template>
  <apexchart width="100%" height="350" type="line" :options="chartOverviewOptions" :series="seriesOverview"
    class="w-[80%]">
  </apexchart>
</template>

<style scoped></style>