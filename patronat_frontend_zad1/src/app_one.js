AppOne = angular.module('AppOne', []); // rejestrujemy aplikacje pod `AppOne``
AppOne.controller('NameController', ['$scope', function($scope){
$scope.name = 'Wiktor'; //haszmapa odwołanie od razu do adresu 
}]);