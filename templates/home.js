var app = angular.module("MyApp");//services injected between brackets but not http or scope because they are builtin

app.controller("HomeController", ["$scope", "$http","gbserviceAll", function($scope,$http, gbserviceAll) {

$scope.langlogoJS = gbserviceAll.langlogoJS;
$scope.langlogoPHP = gbserviceAll.langlogoPHP;
$scope.langlogoCSS = gbserviceAll.langlogoCSS;
$scope.langlogoPY = gbserviceAll.langlogoPY;



}])
