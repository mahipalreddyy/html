/// <reference path="angular.min.js" />


var app = angular
            .module("mymodule", [])
            .controller("mycontroller", function ($scope) {
                var employees = [
                    { firstname: "laxmi", lastname: "yasa", Age: "40" },
                    { firstname: "yellareddy", lastname: "yasa", Age: "45" },
                    { firstname: "nithin", lastname: "yasa", Age: "20" },
                    { firstname: "mahipal", lastname: "yasa", Age: "24" }
                ];
                $scope.employees = employees;
            });