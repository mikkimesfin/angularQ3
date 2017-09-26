(function() {
  'use strict';
   angular
   .module('angular-inbox', )
   .controller('composeController', composeController )
   function composeController($http){
       var url = "https://calm-meadow-71621.herokuapp.com/messages"
     const vm=this
    vm.$onInit=function(){
    }
    vm.addMessage=function(messages,txtBody,txtSubject,hideform){
      hideform.flag=true
      var mainBody ={
        subject:txtSubject,
        body:txtBody
      }

      $http.post(url,JSON.stringify(mainBody))
      .then(function(response){
       messages.push(response.data)
      })
    }

    }
})();
