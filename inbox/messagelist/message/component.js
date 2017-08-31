(function(){
  'use strict'
  console.log('message component');

  angular
  .module('angular1.6-inbox')
  .component('ngmsg', {
    controller: 'msgController',
    templateUrl: 'inbox/messagelist/message/temp.html',
    bindings:{
      msg : '<'
    }
    // ,
    // bindings: {
    //   check: '&'
    // }
    // <messagelist check="$ctrl.check"></messagelist>

  })
}())
