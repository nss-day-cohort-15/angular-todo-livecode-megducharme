"use strict";

app.controller("NavCtrl", function($scope, SearchTermData, $location) {
  //no $ on SearchTermData becuase we created it, it's not provided by Angular
    $scope.searchText = SearchTermData;
    $scope.navItems = [
        {url: "#/logout", name: "Logout"},
        {url: "#/items/list", name: "All Items"},
        {url: "#/items/new", name: "New Items"}
    ];

    $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
//this is sharing data with the view. All navItems are avaliale in the HTML to be used. Anywhere wtih in the nav tags can make an expression to bind to the nav controller. Cannot call anything outside the scope of the controller. For example, you cannot call anything nav outside the divs the nav is located.
