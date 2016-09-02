"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
.constant("FirebaseURL", "https://angular-practice-todo.firebaseio.com");
//ngRoute is the name of the module. As we inject this into this it is avaliable. Routing means the URL of the application - not the path to a file. (they look the same)

app.config(function($routeProvider) {
  $routeProvider.
    when("/items/list", {
      templateUrl: "partials/item-list.html",
      controller: "ItemListCtrl"
      //U is capitalized, rl is not!
    }).
    when("/items/new", {
      templateUrl: "partials/item-form.html",
      controller: "ItemNewCtrl"
    }).
    when("/items/view/:itemId", {
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl"
    }).
    //we need a variable that will stand in for a placeholder for any id. After item/ anything after the / will be saved into itemId
    otherwise("/items/list");
});
//hey applicaiton, before you get running, you will need these things

