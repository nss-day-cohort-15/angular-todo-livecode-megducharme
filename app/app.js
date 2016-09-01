"use strict";

var app = angular.module("TodoApp", ["ngRoute"]);
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
      controller: "ItemListCtrl"
    }).
    otherwise("/items/list");
});
//hey applicaiton, before you get running, you will need these things

