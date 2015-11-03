angular.module('starter')

.controller('ComoLlegoCtrl', ['$scope', '$window', 'DataService', function ($scope, $window, DataService) {

    var map = null;
    $scope.coords = [{
        'id': 'Paseo Colon',
        'title': 'Facultad de Ingenieria - Paseo Colon',
        'lat': -34.61807,
        'long': -58.36873
    }, {
        'id': 'Las Heras',
        'title': 'Facultad de Ingenieria - Las Heras',
        'lat': -34.58873,
        'long': -58.39601
    }, {
        'id': 'Ciudad Universitaria',
        'title': 'Facultad de Ingenieria - Ciudad Universitaria',
        'lat': -34.54127,
        'long': -58.44595
    }];
    $scope.currentCoods = $scope.coords[0];

    function showCoordinatesInMap(item) {
        if (!!map) {
            var locationSelected = null;
            for (var i = 0; i < $scope.coords.length; i++) {
                var location = $scope.coords[i];
                if (location.id === item.coords) {
                    locationSelected = location;
                    break;
                }
            }
            if (!!locationSelected && locationSelected !== $scope.currentCoods) {
                $scope.currentCoods = locationSelected;
                var latLong = new $window.google.maps.LatLng($scope.currentCoods.lat, $scope.currentCoods.long);
                map.setCenter(latLong);
            }
        }
    }

    if (!!$window.google && $window.google.maps) {

        var mapOptions = {
            center: new $window.google.maps.LatLng($scope.currentCoods.lat, $scope.currentCoods.long),
            zoom: 16,
            mapTypeId: $window.google.maps.MapTypeId.ROADMAP
        };
        map = new $window.google.maps.Map(document.getElementById("map"), mapOptions);

        for (var i = 0; i < $scope.coords.length; i++) {
            var location = $scope.coords[i];
            var myLocation = new $window.google.maps.Marker({
                position: new $window.google.maps.LatLng(location.lat, location.long),
                map: map,
                title: location.title
            });
        }
    }

    DataService
        .getComoLlego()
        .then(function (result) {
            $scope.comoLlego = result.data.comoLlego;
            $scope.dondeQueda = result.data.dondeQueda;
        });

    $scope.toggleComoLlegoItem = function (item) {
        $scope.toggleItem(item);
        showCoordinatesInMap(item);
    }

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
}]);