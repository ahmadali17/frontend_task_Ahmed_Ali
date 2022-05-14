import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    chartData: [],
    filteredData: [],
    startDate: null,
    endDate: null,
  },
  actions: {
    getChartData(context) {
      axios.get('https://fe-task.getsandbox.com/performance').then(res => {
        context.commit('setChartData', res.data);
      }).catch(err => console.log(err));
    },
    filterChartData(context, filterQuery) {
      context.commit('filterChart', filterQuery);
    },
  },
  mutations: {
    setChartData(state, data) {
      state.chartData = data;
      state.filteredData = data;
      state.startDate = Math.min(...data.map(item => item.date_ms));
      state.endDate = Math.max(...data.map(item => item.date_ms));
    },
    filterChart(state, filterQuery) {
      const data = state.chartData;
      state.filteredData = data.filter((item) => {
        return item.date_ms >= filterQuery.startDate && item.date_ms <= filterQuery.endDate;
      });
    },
  },
  getters: {
    chartData: (state) => state.chartData,
    filteredData: (state) => state.filteredData,
    startDate: (state) => state.startDate,
    endDate: (state) => state.endDate,
  },
});
