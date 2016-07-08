var app = angular.module("BridgeApp", [])

app.controller("BridgeController", function ($scope) {
	$scope.hello = "Hello from the other side";
});