angular.module('starter')

.factory('DataService', function ($q, $http) {

    var appDirectory = './';//cordova.file.applicationDirectory + 'www/';
    var derechosEstudiantilesFilePath = appDirectory + 'res/data/derechos-estudiantiles.json';
    var informacionDeContactoFilePath = appDirectory + 'res/data/informacion-de-contacto.json';
    var comoLlegoFilePath = appDirectory + 'res/data/como-llego.json';
    var carpetasEstudiantesFilePath = appDirectory + 'res/data/carpetas-estudiantes.json';
    var guiaDeTramitesFilePath = appDirectory + 'res/data/guia-de-tramites.json';
    var dondeCursoFilePath = appDirectory + 'res/data/donde-curso.json';

    var data = [];

    function getItems(key) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].key === key) {
                return data[i];
            }
        }
        return null;
    }

    function getFile(filePath) {
        var deferred = $q.defer();
        var items = getItems(filePath);

        if (items !== null) {
            deferred.resolve({ data: items.value });
        } else {
            return $http
                .get(filePath)
                .success(function (result) {
                    data.push({ key: filePath, value: result });
                    deferred.resolve(result);
                });
        }

        return deferred.promise;
    }

    return {
        getDerechosEstudiantiles: function () {
            return getFile(derechosEstudiantilesFilePath);
        },
        getInformacionDeContacto: function () {
            return getFile(informacionDeContactoFilePath);
        },
        getComoLlego: function () {
            return getFile(comoLlegoFilePath);
        },
        getCarpetasEstudiantes: function () {
            return getFile(carpetasEstudiantesFilePath);
        },
        getGuiaDeTramites: function () {
            return getFile(guiaDeTramitesFilePath);
        },
        getDondeCurso: function () {
            return getFile(dondeCursoFilePath);
        },
    };
});