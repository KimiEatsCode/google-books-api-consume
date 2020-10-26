var app = angular.module("GoogleBooksServicePY", []);

this.results=[];

app.service("gbservicePY",['$http', function($http) {

this.maxResults=10;

  this.getResponse = function(isSuc,isFail) {
    $http.get("https://www.googleapis.com/books/v1/volumes?q=python&maxResults="+this.maxResults).then(isSuc,isFail)

  };


}])

//then promise has two default parameters - sucess and fail you can define what
//happens for success and fail using variables which hold callback functions
