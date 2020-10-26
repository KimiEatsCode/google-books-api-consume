var app = angular.module("GoogleBooksServiceJS", []);

this.results=[];

app.service("gbserviceJS",['$http', function($http) {

this.maxResults=10;

  this.getResponse = function(isSuc,isFail) {
    $http.get("https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults="+this.maxResults).then(isSuc,isFail)

  };


}])

//then promise has two default parameters - sucess and fail you can define what
//happens for success and fail using variables which hold callback functions
