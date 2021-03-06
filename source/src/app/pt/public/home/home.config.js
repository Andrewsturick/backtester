(function() {
    'use strict';

    angular
        .module('pt.home')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider)
    {
        $translatePartialLoaderProvider.addPart('app/home');

        $stateProvider
        .state('triangular.admin-default.home', {
            url: '/home/',
            templateUrl: 'app/pt/public/home/home.tmpl.html',
            // set the controller to load for this page

            controller: 'homeController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'Home',
            icon: 'zmdi zmdi-home',
            priority: 1.1,
                state: 'triangular.admin-default.home',
                type: 'link'
        });
    }


})();
