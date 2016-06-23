angular.
  module('plannerApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/course-selection', {
          template: '<course-selection></course-selection>'
        }).
        when('/timetable', {
          template: '<timetable></timetable>'
        }).
        otherwise('/');
    }]);
