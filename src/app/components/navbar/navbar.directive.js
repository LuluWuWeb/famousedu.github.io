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
          $('.marker').css('background-color', '#881632');
        } else {
          $('.navbar').removeClass('navbar-default-blue').addClass('navbar-default');
          $('.marker').css('background-color', '#fff');
        }
      });
      var ws = [];
      if($(window).width()>768){
        $('.navbar-nav li').each(function(index){
          ws[index] = $(this).outerWidth();
        });
        var activeBorder = function(){
          var activeIndex = $('.navbar-nav li').index($('.navbar .active'));
          var left=0;
          for(var i =0; i<activeIndex;i++){
            left = left+ ws[i];
          }
          $('.marker').css({
            left:left+20,
            width:ws[activeIndex]-40
          });
        };
        activeBorder();
        $('.navbar-nav li a').on({
            click:function(){
              var index  = $(this).parent().index();
              var left=0;
              for(var i =0; i<index;i++){
                left = left+ ws[i];
              }
              $('.marker').css({
                left:left+20,
                width:ws[index]-40
              });
            }
          }
        );
      }

      /* When user clicks the Icon */
      $(".nav-toggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay-boxify").toggleClass("open");
      });

      ///* When user clicks a link */
      //$(".navbar-nav li a").click(function() {
      //  $(".nav-toggle").toggleClass("active");
      //  $(".navbar-collapse").toggleClass("in");
      //});

      /* When user clicks outside */
      $(".navbar-collapse").click(function() {
        $(".nav-toggle").toggleClass("active");
        $(".navbar-collapse").toggleClass("in");
      });
    }
  }

})();
