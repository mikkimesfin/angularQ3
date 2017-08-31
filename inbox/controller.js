(function() {
  'use strict';
  angular.module('angular1.6-inbox' )
  .controller('inboxController', function(){
    console.log('inbox cotroller');
    const vm = this

    vm.$onInit = function() {
        var data = angular.fromJson(json)
        vm.messages= data
        console.log(data);
    }
    vm.checkAll= function() {
      for (var i = 0; i < vm.messages.length; i++) {
        vm.messages[i].selected = true
      }
    }
    //all logic should go in here
  })
}());
