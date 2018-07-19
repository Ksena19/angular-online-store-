
angular.module('TransactionApp', [])
.controller('TransactionsCtrl', function($scope) {

   $scope.title = 'Add to cart';

   $scope.itemsArray = [
    {  price: 50, name: "Whey protein", img: 'img/item-1.png', quantity: 0},
    {  price: 60, name: "Protein bar", img: 'img/item-1.png', quantity: 0  },
    {  price: 35, name: "BCAA", img: 'img/item-1.png', quantity: 0  },
    {  price: 50, name: "Whey protein", img: 'img/item-1.png', quantity: 0  },
    {  price: 60, name: "Protein bar", img: 'img/item-1.png', quantity: 0  },
    {  price: 80, name: "BCAA", img: 'img/item-1.png', quantity: 0  }

   ];

   $scope.addTo = function(item) {
       item.quantity += 1;
     }
     $scope.getCost = function(item) {
      return item.quantity * item.price;

     }

   $scope.cart = [];
   
   $scope.getTotal = function() {
      return $scope.itemsArray.reduce((a, b) => a + b.price * b.quantity, 0);
   }
   
  
});