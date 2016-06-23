angular.
  module('courseSelection').
  component('courseSelection', {
    templateUrl: 'course-selection/course-selection.template.html',
    controller: function CourseSelectionController() {
      this.selectedCourses = ['CZ3005', 'CZ4003', 'CZ4011', 'CZ4016'];
    }
  });
