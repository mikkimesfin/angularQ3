(function() {
  'use strict';
  angular.module('angular1.6-inbox' )
  .controller('toolbarController', function(){
    console.log('toolbar controller');
    const vm = this
    // vm.checkall()
    // vm.check = function(){
    //
    // }
    console.log(vm);
    vm.checkMessage = function(selected) {
      console.log(selected);
    }
  })
}());
