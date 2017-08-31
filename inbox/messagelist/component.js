(function(){
  'use strict'
  console.log('messagelist component');
  angular.module('angular1.6-inbox' )
  .component('messagelist', {
    controller: 'messagelistController',
    templateUrl: 'inbox/messagelist/temp.html',
    bindings: {
      messages: "<"
    }

  })
}())
