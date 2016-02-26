var app = angular.module('app',[]);

app.controller('mainCtrl',function($scope){
    $scope.title = "BAR STOCK";
    $scope.subtitle = "ORDERS";
    $scope.items = [
    {
      name: 'Vodaka',
      quantity:'750ml'
    },
    {
      name: 'Gin',
      quantity: '1L'
    },
    {
     name: 'Tequila',
     quantity: '750ml'
    },
    {
      name: 'Whiskey',
      quantity: '750ml'
    },
    {
      name: 'Sweet Vermouth',
      quantity: '750ml'
    },
    {
     name: 'Dry Vermouth',
     quantity: '750ml'
    },
    {
      name: 'Bloody Mary Mix',
      quantity: '2L'
    },
    {
      name: 'Agave Nectar',
      quantity: '24oz'
    },
    {
     name: 'Orange Juice',
     quantity: '48oz'
    },
    {
      name: 'Limes',
      quantity: 36
    },
    {
      name: 'cherries',
      quantity: 9
    },
    {
     name: 'Celery Stalks',
     quantity: 16
    },
    {
      name: 'Olives',
      quantity: 24
    }];
    $scope.drinks=[
        {
        name: "Bloody Mary",
        ingredients: "2oz vodka,4oz bloody mary mix,1 celery stalk".split(",")
    },
    {
        name: "Martini",
        ingredients:"2oz gin,1oz dry vermouth,1 olive".split(",")
    },
    {
        name:"Margarita",
        ingredients:"2oz tequila,1oz orange juice,1oz agave nectar,1 lime juice".split(",")
    },
    {
        name:"ScrewDriver",
        ingredients:"2oz vodka,4oz orange juice".split(",")
    },
    {
        name:"Manhattan",
        ingredients:"2oz whiskey,1oz sweet vermouth,1 cherry".split(",")
    }];

   $scope.increase= function(index) { 
       $scope.exercises[index].count += 1; 
   };
   $scope.decrease = function(index) { 
       $scope.exercises[index].count -= 1; 
   };
});


