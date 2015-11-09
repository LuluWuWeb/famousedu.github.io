(function() {
  'use strict';

  angular
    .module('famouseduGithubIo')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      var t;
      $(window).scroll(function () {
        t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t > 0) {
          $('.navbar').removeClass('navbar-default').addClass('navbar-default-blue');
          $('.marker').css('background-color', '#025499');
        } else {
          $('.navbar').removeClass('navbar-default-blue').addClass('navbar-default');
          $('.marker').css('background-color', '#fff');
        }
      });
    }
  }

})();
