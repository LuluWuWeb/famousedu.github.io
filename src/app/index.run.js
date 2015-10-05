(function() {
  'use strict';

  angular
    .module('famouseduGithubIo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
