(function() {
  'use strict';
  angular.module('angular1.6-inbox', )
  .controller('toolbarController', function(){
    console.log('toolbar');
    const vm = this


    vm.checkMessage = function(selected) {
      console.log(selected);
    }
  })
}());
