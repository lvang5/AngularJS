let FoodApp = angular.module('FoodApp', []);

FoodApp.controller('FoodController', function(){
    
    let vm = this;
    vm.addFood = function(){
        console.log(vm.food);
        
    }
});