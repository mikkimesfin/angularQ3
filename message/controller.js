(function() {
  'use strict';
  angular.module('angular1.6-inbox', )
  .controller('msgController', function(){
    console.log('hey');

      const vm = this;

      vm.$onInit = function() {
        var data = angular.fromJson(json)
        vm.messages=data
        // vm.messages = data
        console.log(data);
    }
    //   vm.starMessage = function(message){
    //   var status = message.starred;
    //   message.starred= !message.starred
    // }


    // vm.showMessages = function() {
    //   if(vm.newTodo && vm.newTodo.title && vm.newTodo.priority) {
    //     vm.todos.push({
    //       title: vm.newTodo.title,
    //       priority: vm.newTodo.priority
    //     });
    //
    //     vm.newTodo.title = '';
    //     vm.newTodo.priority = '';
    //   }
    // }

  })
}());
