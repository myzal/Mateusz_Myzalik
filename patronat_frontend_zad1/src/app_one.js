AppOne = angular.module('AppOne', []); // rejestrujemy aplikacje pod `AppOne``
AppOne.controller('NameController', ['$scope', function($scope){
$scope.name = 'Mateusz'; //haszmapa odwołanie od razu do adresu 
}]);
AppOne.directive('ptrngName',function()
{
return{
restrict: 'E',
template: 'Your name is {{name}}'
};
});