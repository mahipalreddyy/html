

var flintstones = angular.module("flintstones", []);
flintstones.controller("flintstoneCtrl", function flintstoneCtrl($scope) {
    $scope.yourName = "Fred";
});

var rumbles = angular.module("rumbles", []);
rumbles.controller("rumbleCtrl", function rumbleCtrl($scope) {
    $scope.yourName = "Barney";
});