angular.module('App').controller('HomeController',  function($scope, $location, $state){
	$scope.fullName = $state.current.data.fullName;
});