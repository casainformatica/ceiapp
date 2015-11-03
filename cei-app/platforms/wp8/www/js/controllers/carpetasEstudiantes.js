angular.module('starter')

.controller('CarpetasEstudiantesCtrl', function ($scope, DataService) {

    DataService
        .getCarpetasEstudiantes()
        .then(function (result) {
            $scope.items = result.data;
        });

    $scope.toggleItem = function (item) {
        if ($scope.isItemShown(item)) {
            $scope.shownItem = null;
        } else {
            $scope.shownItem = item;
        }
    };

    $scope.isItemShown = function (item) {
        return $scope.shownItem === item;
    };
})
