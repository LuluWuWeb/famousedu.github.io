(function() {
  'use strict';

  angular
    .module('famouseduGithubIo')
    .directive('acmeBanner', acmeBanner);

  /** @ngInject */
  function acmeBanner() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/banner/banner.html',
      scope: {
        creationDate: '='
      },
      controller: BannerController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function BannerController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      var owl = $("#banner");
      owl.owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

      });
      vm.next = function(){
        owl.trigger('owl.next');
      };
      vm.prev = function(){
        owl.trigger('owl.prev');
      }
    }
  }

})();
