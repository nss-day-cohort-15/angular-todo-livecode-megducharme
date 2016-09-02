"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location){
  $scope.newTask = {
    assignedTo: "",
    //assigned to nobody
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: "normal"
    //all initial state/default
  };
  // new task will have been updated when the user typed in their

  $scope.addNewItem = function () {
    ItemStorage.postNewItem($scope.newTask)
    .then(function (){
      $location.url("/item/list");
    });
  };
});
