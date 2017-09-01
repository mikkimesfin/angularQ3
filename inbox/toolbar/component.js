(function(){
  'use strict'
  console.log('toolbar component');

  angular.module('angular1.6-inbox' )
  .component('ngtoolbar', {
    controller: 'toolbarController',
    templateUrl: 'inbox/toolbar/temp.html',
    bindings: {
      checkall: '&',
      readall: '&',
      unreadall: '&',
      addlabel: '&'
    }
    // in the inbox.template.html write: <toolbar dis="$ctrl.disabled"><toolbar>

  })
}())
