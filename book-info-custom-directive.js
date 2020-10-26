var app = angular.module("MyApp");


app.directive("bookInfoCustomDirective", function () {
  return {
    templateUrl: "templates/bookInfo.html",
    restrict: "E",
    scope: true,
    // controller: function ($scope) {
    //   $scope.addCar = function (user) {
    //     user.car = "Ford Pinto"
    //   }
    //
    // }
  }
})
