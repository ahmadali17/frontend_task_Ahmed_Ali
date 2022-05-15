angular.module('appModule').service('Employees', EmployeesService);
const employeesUrl = 'https://fe-task.getsandbox.com/employees';

function EmployeesService($http) {
  const getEmployees = () => {
    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = (pageIndex) => {
    return $http.get(`${employeesUrl}?page=${pageIndex}`);
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
