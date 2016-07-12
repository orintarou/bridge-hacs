var app = angular.module("BridgeApp", [])
var databaseLink = new Firebase('https://senpai-notice-me.firebaseio.com/');  

app.controller("BridgeController", function ($scope) {

	$scope.todoAdd = function() {
        alert(name);
    };

	$scope.hello = "Hello from the other side";
});