var app = angular.module("BridgeApp", []);
var databaseLink = new Firebase('https://bridgehacs.firebaseio.com/');  

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function wasup(answer){
	document.getElementById(answer + 'Questions').style.display = "block";
	if (answer == "yes") {
		document.getElementById('noQuestions').style.display = "none";
	} else if (answer == "no") {
		document.getElementById('yesQuestions').style.display = "none";
	}
}

app.controller("BridgeController", function ($scope) {
	$scope.RSVP = function(){
		{window.location.href = '/RSVP.html'}
	};

	$scope.changeForm = function() {
		alert("yoo");
	};

	$scope.todoAdd = function(name, email) {
		if(validateEmail(email)){
			databaseLink.push({name:name, email:email});
			{window.location.href = '/thanks.html'}
		}else{
			alert("Not a valid email? If it is...email us!");
		};
	};
});