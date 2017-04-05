var myApp = angular.module('myApp', []);


myApp.controller('BaseController', ['$scope', '$http', function($scope, $http){
    $scope.firstmessage = {
      name : "Bri",
      message : "Hello from the MEANest stack you know!"
    };

    $http.post('/message', $scope.firstmessage).then(function(response){
        console.log(response);
        console.log(response.data);
    });

    
}]);
