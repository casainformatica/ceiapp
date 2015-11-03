angular.module('starter')

.controller('ContactoCtrl', function ($scope, $window, DataService) {

    DataService
        .getInformacionDeContacto()
        .then(function (result) {
            $scope.info = result.data.info;
            $scope.items = result.data.items;
        });

    $scope.openLink = function (url) {
        $window.open(url, '_blank', 'location=yes');
    };
})
