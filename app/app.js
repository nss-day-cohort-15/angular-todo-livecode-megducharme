"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope) {
    $scope.navItems = [
        {name: "Logout"},
        {name: "All Items"},
        {name: "New Items"}
    ];
});
//this is sharing data with the view. All navItems are avaliale in the HTML to be used. Anywhere wtih in the nav tags can make an expression to bind to the nav controller. Cannot call anything outside the scope of the controller. For example, you cannot call anything nav outside the divs the nav is located.


app.controller("TodoCtrl", function($scope) {
    $scope.items = [
      {
        id: 0,
        task: "mow the lawn",
        isCompleted: false,
        dueDate: "12/5/17",
        assignedTo: "Greg",
        location: "Joe's house",
        urgency: "low",
        dependencies: "sunshine, clippers, hat, water, headphones"
      },
      {
        id: 1,
        task: "grade quizzes",
        isCompleted: false,
        dueDate: "12/5/15",
        assignedTo: "Christina",
        location: "NSS",
        urgency: "high",
        dependencies: "wifi, tissues, vodka"
      },
      {
        id: 2,
        task: "take a nap",
        isCompleted: false,
        dueDate: "5/21/16",
        assignedTo: "Joe",
        location: "Porch of lakefront cabin",
        urgency: "medium",
        dependencies: "hammock, silence"
      }
    ];

$scope.newTask = {};
//we have been building up our object already with properties in the HTML - two way binding updates properties
$scope.showListView = true;

$scope.newItem = function(){
    $scope.showListView = false;
};

$scope.allItem = function(){
    $scope.showListView = true;
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














