angular.module('starter')

.controller('DondeCursoCtrl', ['$scope', 'DataService', function ($scope, DataService) {

    $scope.materias = [];
    $scope.materiasAll = null;
    $scope.materiasFiltered = null;
    $scope.departamentosAll = null;
    $scope.departamentosFiltered = null;
    $scope.data = {
        departamento: '',
        materia: '',
        docente: '',
        horaDeInicio: '',
        status: 'Podes elegir una o mas opciones de busqueda (tipea y van a aparecer sugerencias)'
    };
    $scope.items = [];

    DataService
        .getDondeCurso()
        .then(function (result) {
            $scope.materias = Defiant.getSnapshot(result.data.materias);
        });

    angular.element(document).ready(function () {
        document.getElementById('departamentoInput').addEventListener('keyup', $scope.suggestDepartamentos);
        document.getElementById('materiaInput').addEventListener('keyup', $scope.suggestMaterias);
    });

    $scope.suggestDepartamentos = function () {
        var value = document.getElementById('departamentoInput').value;
        if (value && value.length === 1) {
            var query = "//*[contains(departamento,\"" + value.toUpperCase() + "\")]/departamento";
            $scope.departamentosFiltered = getUniqueValues(JSON.search($scope.materias, query));
        }
    };

    $scope.suggestMaterias = function () {
        var materiaValue = document.getElementById('materiaInput').value;
        if (materiaValue && materiaValue.length === 1) {
            var departamentoValue = document.getElementById('departamentoInput').value;
            var query = "//*"
                + "[contains(departamento,\"" + departamentoValue.toUpperCase() + "\")]"
                + "[contains(materia,\"" + materiaValue.toUpperCase() + "\")]/materia";
            $scope.materiasFiltered = getUniqueValues(JSON.search($scope.materias, query));
        }
    };

    $scope.submit = function () {
        if (!$scope.data.departamento && !$scope.data.materia && !$scope.data.docente && !$scope.data.horaDeInicio) {
            $scope.data.status = 'Elige una o mas opciones de busqueda y luego presiona el boton';
            return;
        }
        $scope.data.status = 'Buscando..';
        var query = "//*"
        query += (!!$scope.data.departamento) ? "[contains(departamento,\"" + $scope.data.departamento.toUpperCase() + "\")]" : "";
        query += (!!$scope.data.materia) ? "[contains(materia,\"" + $scope.data.materia.toUpperCase() + "\")]" : "";
        query += (!!$scope.data.docente) ? "[contains(docente,\"" + $scope.data.docente + "\")]" : "";
        query += (!!$scope.data.horaDeInicio) ? "[inicio=\"" + time($scope.data.horaDeInicio) + "\"]" : "";

        var results = JSON.search($scope.materias, query);
        $scope.data.status = 'Se encontraron ' + results.length + ' resultados' + (results.length > 50 ? ' (solo mostraremos 50)' : '');
        $scope.items = results.slice(0, 50);
    };

    // Hash Sieving method - faster for large arrays O(2n)
    function getUniqueValues(arr) {
        var o = {}, r = [], n = arr.length, i;

        for (i = 0 ; i < n ; ++i) {
            o[arr[i]] = null;
        }

        for (i in o) {
            r.push(i);
        }

        return r;
    }

    function time(str) {
        if (!/:/.test(str)) { str += ':00'; }
        var str = str.replace(/^\d{1}:/, '0$&').replace(/:\d{1}$/, '$&0');
        return str.charAt(0) === '0' ? str.substr(1) : str;
    }
}]);
