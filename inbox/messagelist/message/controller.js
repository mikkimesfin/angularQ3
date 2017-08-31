(function() {
  'use strict';
  console.log('message controller');
  angular.module('angular1.6-inbox')
  .controller('msgController', function(){
    console.log('message controller');

      const vm = this;
       console.log(vm);
    //   vm.$onInit = function() {
    //     var data = angular.fromJson(json)
    //     vm.messages= data
    //     console.log(data);
    // }

      

      vm.starMessage = function(message){
      // var status = message.starred;
      message.starred = !message.starred
      console.log(status)





    }


  })
}());
