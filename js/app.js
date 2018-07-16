
angular.module('TransactionApp', [])
.controller('TransactionsCtrl', function($scope) {

   $scope.title = 'Online-store';

   $scope.itemsArray = [
    {  price: 50, name: "Whey protein", img: 'img/item-1.png' },
    {  price: 60, name: "Protein bar", img: 'img/item-2.png'  },
    {  price: 35, name: "BCAA", img: 'img/item-3.png'  },
    {  price: 50, name: "Whey protein", img: 'img/item-1.png'  },
    {  price: 60, name: "Protein bar", img: 'img/item-2.png'  },
    {  price: 80, name: "BCAA", img: 'img/item-3.png'  }

   ];
   $scope.count = 0;
   $scope.addTo = function(item){
     $scope.count += 1;
   }
  
});