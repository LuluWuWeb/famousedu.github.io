(function() {
  'use strict';

  angular
    .module('famouseduGithubIo')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/main.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/main/main.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .state('class', {
        url: '/class',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('consult', {
        url: '/consult',
        templateUrl: 'app/main/main.html',
        controller: 'ConsultController',
        controllerAs: 'consult'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
