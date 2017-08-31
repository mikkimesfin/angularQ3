


(function() {
  'use strict';
  angular.module('angular1.6-inbox', )
  .controller('messagelistController', function(){
    console.log('hey');
    console.log('mikki')
    const vm = this

              vm.$onInit = function() {
                var data = angular.fromJson(json)
                vm.messages= data
                console.log(data);
            }
  })
}());
