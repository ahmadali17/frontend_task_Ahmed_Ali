import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import NotFoundPage from './pages/not-found.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import SearchComponent from './components/vue-components/Search.vue';
import store from './store/store.js';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule').config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store: store,
  });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vNotFound', (createVueComponent) => {
  return createVueComponent(Vue.component('NotFoundPage', NotFoundPage));
});

angular.module('appModule').directive('searchComponent', (createVueComponent) => {
  return createVueComponent(Vue.component('SearchComponent', SearchComponent));
});
