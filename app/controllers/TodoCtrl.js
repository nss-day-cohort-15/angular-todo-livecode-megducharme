"use strict";

app.controller("TodoCtrl", function($scope, $location) {
    // $scope.items = null;
    $scope.newTask = {};
//we have been building up our object already with properties in the HTML - two way binding updates properties


$scope.newItem = function(){
    $location.url("/items/new");
};

$scope.allItems = function(){
    $location.url("/items/list");
};

$scope.addNewItem = function(){
    $scope.newTask.isCompleted = false; //we are not going to add something to our todo list so we can check it off
    $scope.newTask.id = $scope.items.length;
    //adds a new unique id to each item in the list based on the length of the array
    $scope.items.push($scope.newTask);
    //add new item to our array
    $scope.newTask = {};
    //cheap guard keeping someone from not filling the entire form out - not checking to make sure they filled the form out. Not entirely necessary.
    };
});
