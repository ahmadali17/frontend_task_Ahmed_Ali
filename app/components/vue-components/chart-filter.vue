<template>
  <div>
    <label for="startDate">Start date : </label>
    <input
      id="startDate"
      type="date"
      v-model="filterQuery.startFilterDate"
      :min="dateRange.startDate"
      :max="dateRange.endDate"
      @change="filterChart"
    />

    <label for="endDate">End date : </label>
    <input
      id="endDate"
      type="date"
      v-model="filterQuery.endFilterDate"
      :min="dateRange.startDate"
      :max="dateRange.endDate"
      :disabled="filterQuery.startFilterDate > filterQuery.endFilterDate"
      @change="filterChart"
    />
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ChartFilter",

  data() {
    return {
      filterQuery: {
        startFilterDate: this.formatDate(this.$store.getters.startDate),
        endFilterDate: this.formatDate(this.$store.getters.endDate),
      },
    };
  },

  computed: {
    dateRange() {
      const startDate = this.$store.getters.startDate;
      const endDate = this.$store.getters.endDate;
      return {
        startDate: this.formatDate(startDate),
        endDate: this.formatDate(endDate),
      };
    },
  },

  methods: {
    filterChart() {
      this.$emit("filter-chart", {
        startDate: new Date(this.filterQuery.startFilterDate).getTime(),
        endDate: new Date(this.filterQuery.endFilterDate).getTime(),
      });
    },
    formatDate(dateInMs) {
      return moment(dateInMs).format("YYYY-MM-DD");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>