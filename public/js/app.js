var app = angular.module("BridgeApp", [])
var databaseLink = new Firebase('https://bridgehacs.firebaseio.com/');  

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

app.controller("BridgeController", function ($scope) {
	$scope.todoAdd = function(name, email) {
		if(validateEmail(email)){
			databaseLink.push({name:name, email:email});
			{window.location.reload();}
		}else{
			alert("Not a valid email? If it is...email us!");
		};
	};
});