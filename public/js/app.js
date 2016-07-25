var app = angular.module("BridgeApp", []);
var databaseLink = new Firebase('https://bridgehacs.firebaseio.com/');  

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// function validateBirthday(birthday){
// 	var re = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
// 	return re.test(birthday);
// }

function show(answer){
	document.getElementById(answer + 'Questions').style.display = "block";
	if (answer == "yes") {
		document.getElementById('noQuestions').style.display = "none";
	} else if (answer == "no") {
		document.getElementById('yesQuestions').style.display = "none";
	}
}

app.controller("BridgeController", function ($scope) {
	$scope.RSVP = function(){
		{window.location.href = '/rsvp.html'}
	};

	$scope.addUser = function(firstName, lastName, email, birthday, location,
	 college="", gradYear="", major="", 
	 nonGrad="", progExp, fact=""){
	 	if(validateEmail(email)){
	 		databaseLink.push({firstName:firstName, lastName:lastName,
	 			email:email, birthday:birthday, location:location, college:college,
	 			gradYear:gradYear, major:major, nonGrad:nonGrad, 
	 			progExp:progExp, fact:fact});
	 		{window.location.href = '/thanks.html'}
	 	}else{
	 		if(validateEmail(email) == false){
	 			alert("Please make sure you answered all the required questions!");
	 		}
	 	}
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