const app = angular.module('appModule');

app.component('employeesList', {
  templateUrl: 'components/employees-list/employees-list.html',
  controller: EmployeesListComponent,
  controllerAs: 'EmployeesListComponentVm',
  bindings: {
    employeesList: '<',
    searchKeyword: '<',
  },
});

app.filter('searchFilter', function ($sce, $location) {
  return function (text, search) {
    if (!search) {
      $location.search('filter', null);
      return $sce.trustAsHtml(text);
    }
    $location.search('filter', search);
    return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlighted">$&</span>'));
  };
});

function EmployeesListComponent() {}
