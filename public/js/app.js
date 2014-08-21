/**
* App Modul;
*
* Description
*/
angular.module('App', ['ui.router', 'restangular', 'ngAnimate'])
	   .config(function($stateProvider, $urlRouterProvider, RestangularProvider){
	   	$stateProvider
		   	.state('main',{
		   		url: '/home',
		   		templateUrl: 'js/templates/home.html',
		   		controller: 'HomeController',
		   	})
		   	.state('main.about',{
		   		url: '/about',
		   		views: {
		   			'about': {
		   				templateUrl:'js/templates/about.html'
		   			}
		   		}
		   	});
	   	$urlRouterProvider.otherwise('/home');
        RestangularProvider.setBaseUrl('http://localhost:8882/');
	   });