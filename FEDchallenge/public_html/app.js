var myApp = angular.module('myApp',[]);
myApp.controller('mainCtrl',function($scope,$http){
    $scope.title = "UX Society Members";
    $http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members')
            .success (function(data){
                $scope.members = data;                           
        })
                .error(function(){
                    console.log("unexpected error occured");
                });  
});