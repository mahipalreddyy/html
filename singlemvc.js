/// <reference path="angular.min.js" />



var myapp = angular
               .module("mymodule", [])
               .controller("mycontroller", function mycontroller1($scope) {
                   var employee = {
                       Fn: "Akhil",
                       Ln: "Maram",
                       Age: "22"
                   };
                   $scope.employee = employee;
               });