var app = angular.module("MyApp", ["GoogleBooksServicePY","GoogleBooksServiceCSS","GoogleBooksServicePHP","GoogleBooksServiceJS","GoogleBooksServiceAll","ngMaterial",'ngRoute']);//services injected between brackets but not http or scope because those are built-in services


app.config(function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl:'templates/home.html',
      controller:'HomeController'
    }).when("/js-page", {
      templateUrl:'templates/js.html',
      controller:'JSController'
    }).when("/php-page", {
      templateUrl:'templates/php.html',
      controller:'PHPController'
    }).when("/css-page", {
      templateUrl:'templates/css.html',
      controller:'CSSController'
    }).when("/python-page", {
      templateUrl:'templates/python.html',
      controller:'PYTHONController'
    }).otherwise({
        redirectTo: '/',
    })
  })
