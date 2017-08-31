(function() {
  'use strict';
  angular.module('angular1.6-inbox' )
  .controller('messagelistController', function(){
    console.log('messagelist controller');
    const vm = this
    console.log(vm.messages);

  })
}());
