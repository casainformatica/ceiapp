angular.module('starter')

.controller('HomeCtrl', function ($scope, $state) {

    $scope.goToDerechosEstudiantiles = function (event) {
        event.preventDefault()
        $state.go('tabs.derechos-estudiantiles');
    };

    $scope.goToContacto = function (event) {
        event.preventDefault()
        $state.go('tabs.contacto');
    };

    $scope.goToComoLlego = function (event) {
        event.preventDefault()
        $state.go('tabs.como-llego');
    };

    $scope.goToCarpetasEstudiantes = function (event) {
        event.preventDefault()
        $state.go('tabs.carpetas-estudiantes');
    };
    
    $scope.goToGuiaDeTramites = function (event) {
        event.preventDefault()
        $state.go('tabs.guia-de-tramites');
    };

    $scope.goToDondeCurso = function (event) {
        event.preventDefault()
        $state.go('tabs.donde-curso');
    };
})
