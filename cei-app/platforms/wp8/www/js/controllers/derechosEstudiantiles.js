angular.module('starter')

.controller('DerechosEstudiantilesCtrl', function ($scope, DataService) {

    DataService
        .getDerechosEstudiantiles()
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
