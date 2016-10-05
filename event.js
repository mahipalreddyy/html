/// <reference path="angular.min.js" />

var myapp = angular
                .module("mymodule", [])
                .controller("mycontroller", function ($scope) {
                    var technologies = [
                        { name: "mahipal", Likes: 0, Dislikes: 0 },
                        { name: "nithi", Likes: 0, Dislikes: 0 },
                        { name: "mani", Likes: 0, Dislikes: 0 },
                        { name: "tharuni", Likes: 0, Dislikes: 0 },
                    ];
                    $scope.technologies = technologies;

                    $scope.incrementLikes = function (technology) {
                        technology.Likes++;
                    }

                    $scope.incrementDislikes = function (technology) {
                        technology.Dislikes++;
                    }
                });
                