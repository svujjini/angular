var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.controller('MainController', ['$scope','memberService',function($scope,memberService) { 
  $scope.title = 'UX Society Members'; 
  memberService.success(function(data) { 
    $scope.fiveDay = data; 
  });
}]);

myApp.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: '/index.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

myApp.factory('memberService', ['$http', function($http) { 
  return $http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members') 
            .success(function(data) { 
              return data;
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

