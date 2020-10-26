var app = angular.module("GoogleBooksServiceAll", []);

app.service("gbserviceAll",['$http', function($http) {

this.langlogoJS="images/js-logo.jpg";
this.langlogoPHP="images/php-logo.jpg";
this.langlogoPY="images/python-logo.jpg";
this.langlogoCSS="images/css-logo.jpg";

this.topMenuItems = [this.langlogoJS,this.langlogoPHP, this.langlogoPY, this.langlogoCSS]; //putting //top menu list in service so easy
this.logoLinks=["#/js-page","#/php-page","python-page","css-page"];

//to update - add and take out languages - otherwise top menu list has to be updated
//in each controller

}])

//then promise has two default parameters - sucess and fail you can define what
//happens for success and fail using variables which hold callback functions
