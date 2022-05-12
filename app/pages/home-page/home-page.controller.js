angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.keyword = $location.search().filter ? $location.search().filter : '';

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
}
