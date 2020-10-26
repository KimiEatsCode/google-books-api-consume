var app = angular.module("MyApp");


app.directive("topMenuCustomDirective", function () {
  return {
    templateUrl: "templates/topmenu.html",
    restrict: "E",
    scope: true,
    // controller: function ($scope) {
    //   $scope.addCar = function (user) {
    //     user.car = "Ford Pinto"
    //   }
    //
    // }
  }
});

var index=100;

app.directive('topmenu', function () {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                elm.bind("click", function ($item) {

                    var $item = $('div.item');
                    if(index <0) {
                      index=0;
                    }
                    index+=100;
                    console.log(index)
                    $('div#arrowR').click(function(){
                      var y = $item.css("left").replace("px","");
                      console.log(y);

                      $("#list-container").scrollLeft(index)


                        });

                    $('div#arrowL').click(function(){
                        index-=100;

                      var y = $item.css("left");
                      console.log(index);

                     $("#list-container").scrollLeft(index)
                      });

                      if(index < 0) {
                        $("#list-container").scrollLeft(0)
                      }

                });
            }
        };
});
