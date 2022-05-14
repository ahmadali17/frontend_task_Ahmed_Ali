<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <chart-filter @filter-chart="filterChart" />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :chartData="filteredData" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import ChartFilter from "../components/vue-components/chart-filter.vue";
import { mapGetters } from "vuex";

export default {
  name: "PerformancePageComponent",
  components: {
    PerformanceChartComponent,
    ChartFilter,
  },
  created() {
    this.$store.dispatch("getChartData").then((res) => console.log(res));
  },
  computed: {
    ...mapGetters(["filteredData", "startDate", "endDate"]),
  },
  methods: {
    filterChart(filterQuery) {
      this.$store.dispatch("filterChartData", filterQuery);
    },
  },
};
</script>
