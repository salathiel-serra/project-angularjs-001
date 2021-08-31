angular.module("myModule",["ngRoute"])
.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		templateUrl:"templates/home.html",
		controller:"indexController"
	})
	.when("/contact",{
		templateUrl:"templates/contact.html"
	});

	$routeProvider.otherwise({redirectTo:"/home"});

})