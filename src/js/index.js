var planner = angular.module('planner', []);

planner.controller('TimetableCtrl', function($scope) {
  $scope.slots = ["CZ2003", "CZ3005", "CZ4011", "CZ4003", "CZ4016", "ET0001"];
  $scope.days = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
});
