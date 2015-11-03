angular.module('starter', ['ionic', 'ngTouch', 'autocomplete'])

.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}])

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        // setup an abstract state for the tabs directive
        .state('tabs', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

        // Home tabs

        .state('tabs.home', {
            url: '/home',
            views: {
                'home-tab': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        .state('tabs.derechos-estudiantiles', {
            url: '/derechos-estudiantiles',
            views: {
                'home-tab': {
                    templateUrl: 'templates/derechos-estudiantiles.html',
                    controller: 'DerechosEstudiantilesCtrl'
                }
            }
        })

        .state('tabs.contacto', {
            url: '/contacto',
            views: {
                'home-tab': {
                    templateUrl: 'templates/contacto.html',
                    controller: 'ContactoCtrl'
                }
            }
        })

        .state('tabs.como-llego', {
            url: '/como-llego',
            views: {
                'home-tab': {
                    templateUrl: 'templates/como-llego.html',
                    controller: 'ComoLlegoCtrl'
                }
            }
        })

        .state('tabs.carpetas-estudiantes', {
            url: '/carpetas-estudiantes',
            views: {
                'home-tab': {
                    templateUrl: 'templates/carpetas-estudiantes.html',
                    controller: 'CarpetasEstudiantesCtrl'
                }
            }
        })

        .state('tabs.guia-de-tramites', {
            url: '/guia-de-tramites',
            views: {
                'home-tab': {
                    templateUrl: 'templates/guia-de-tramites.html',
                    controller: 'GuiaDeTramitesCtrl'
                }
            }
        })

        .state('tabs.donde-curso', {
            url: '/donde-curso',
            views: {
                'home-tab': {
                    templateUrl: 'templates/donde-curso.html',
                    controller: 'DondeCursoCtrl'
                }
            }
        })

        // Chat tabs

        // TBC

        // Configuration tabs

        .state('tabs.configuraciones', {
            url: '/configuraciones',
            views: {
                'configuraciones-tab': {
                    templateUrl: 'templates/configuraciones.html',
                    controller: 'ConfiguracionesCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

});

