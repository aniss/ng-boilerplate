/**
* App Modul;
*
* Description
*/
angular.module('App', ['ui.router'])
	   .config(function($stateProvider, $urlRouterProvider){
	   	$stateProvider
		   	.state('state1',{
		   		url: '/',
		   		template: 'aniss bouraba',
		   		controller: function() {
		   		},
		   		data: {
		   			title: 'home'
		   		}
		   	})
		   	.state('state2', {
		   		url: '/login/:id',
		   		templateUrl: 'js/templates/sidebar.html',
		   		controller: 'HomeController',
		   		data: {
		   			title: 'aniss bouraba'
		   		}
		   	});
	   	$urlRouterProvider.otherwise('/');
	   })
	   .run(function($rootScope){
	   	  $rootScope.$on('$stateChangeSuccess', function(event, toState){
	   	  	$rootScope.title = toState.data.title;
	   	  });
	   });