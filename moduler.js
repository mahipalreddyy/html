/// <reference path="angular.min.js" />


var myapp = angular.module("mymodule", []);

var mycontroller = function ($scope) {
    $scope.message = "my name is mahipal";
};

myapp.controller("mycontroller", mycontroller);
