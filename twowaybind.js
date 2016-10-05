/// <reference path="angular.min.js" />

var myapp = angular
               .module("mymodule", [])
               .controller("mycontroller", function ($scope) {
                   var employee = {
                       Fn: "Akhil",
                       Ln: "Maram",
                       Age: "22"
                   };
                   $scope.employee = employee;
               });