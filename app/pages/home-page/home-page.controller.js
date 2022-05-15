angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.keyword = $location.search().filter ? $location.search().filter : '';
  homePageVm.loading = false;
  homePageVm.currentPageIndex = 1;
  homePageVm.hideLoadBtn = false;

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({
        data,
      }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }

  homePageVm.handleSearch = (keyword) => {
    homePageVm.keyword = keyword;
  };

  homePageVm.loadMoreEmployees = () => {
    homePageVm.loading = true;
    Employees.loadMoreEmployees(++homePageVm.currentPageIndex).then(res => {
      homePageVm.employees.push(...res.data.employees);
      homePageVm.loading = false;
      if (res.data.current_page === res.data.pages) {
        homePageVm.hideLoadBtn = true;
      }
    });
  };
}
