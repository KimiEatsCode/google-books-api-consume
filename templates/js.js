var app = angular.module("MyApp");//services injected between brackets but not http or scope because they are builtin

app.controller("JSController", ["$scope", "$http" , "gbserviceJS", "gbserviceAll", function($scope, $http, gbserviceJS, gbserviceAll) {

$scope.topMenuItems = gbserviceAll.topMenuItems;
$scope.topMenuItemsLinks = gbserviceAll.topMenuItemsLinks;
$scope.langlogoJS = gbserviceAll.langlogoJS;
$scope.serverResponse;
$scope.results=[];
$scope.maxResults;
$scope.endResults="hide";

//success and fail callback functions for book titles
$scope.isSuc = function (response) {
    $scope.results = [];
    $scope.serverResponse = response.data;

    console.log("success");
        console.log($scope.serverResponse);

        for (var i = 0; i < $scope.serverResponse.items.length; i++) {
            console.log($scope.serverResponse.items.length);
          var items = $scope.serverResponse.items[i];
          $scope.results.push({
                  title:items.volumeInfo.title,
                  image:items.volumeInfo.imageLinks.smallThumbnail,
                  author:items.volumeInfo.authors,
                  description:items.volumeInfo.description,
                  pageCount:items.volumeInfo.pageCount,
                  published:parseInt(items.volumeInfo.publishedDate),
                  publisher:items.volumeInfo.publisher,
                  sample:items.accessInfo.webReaderLink,
                  price: items.saleInfo.saleability === "FOR_SALE" ? (items.saleInfo.retailPrice.amount.toFixed(2)) : 0

          });
        }
          console.log($scope.results);

}

$scope.isFail = function () {
$scope.serverResponse=0;
$scope.endResults="endResults";
$scope.endOfResults="End of Results";
console.log("fail");
}


//sendRequest function runs when view JS button clicked to view JS titles and images

// $scope.sendRequest=function() {
gbserviceJS.getResponse($scope.isSuc,$scope.isFail);
console.log($scope.results.length)


$scope.sortNewest = function() {
  $scope.results.sort(function(a,b) {
    return b.published - a.published;
  })
$scope.showingNew={"background-color":"#673ab7","color":"white"};
$scope.showingOld={"background-color":"#FFE57F"};
}

$scope.sortOldest = function() {

  $scope.results.sort(function(a,b) {
    return a.published - b.published;
  })
$scope.showingOld={"background-color":"#673ab7","color":"white"};
$scope.showingNew={"background-color":"#FFE57F"};
}

$scope.add20 = function() {
  gbserviceJS.maxResults = gbserviceJS.maxResults + 10;
   gbserviceJS.getResponse($scope.isSuc,$scope.isFail);
}


}])
