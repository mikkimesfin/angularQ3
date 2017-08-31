(function(){
  'use strict'
  angular
  .module('angular1.6-inbox', )
  .component('ngmsg', {
    controller: 'msgController',
    templateUrl: 'inbox/messagelist/message/temp.html',
    bindings:{
      msgs : '<'
    }
    // ,
    // bindings: {
    //   check: '&'
    // }
    // <messagelist check="$ctrl.check"></messagelist>

  })
}())
