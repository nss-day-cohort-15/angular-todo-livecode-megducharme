"use strict";

app.controller("ItemViewCtrl", function($scope, ItemStorage, $routeParams){
  $scope.items = [];

  ItemStorage.getItemList()
  .then( (itemCollectionArr) => {
    $scope.items = itemCollectionArr;

    $scope.selectedItem = $scope.items.filter(function (item) {
      return item.id === $routeParams.itemId;
    })[0];
    //filter takes an array and adds only ones that pass a certain criteria and adds them to the new array
  });
  //before we used the RESTFUL API - OrderBy, Filter
  //routeParams give us access to whatever is in the URL bar and grab it - it will grab the id that is in the route so we can use it
});
