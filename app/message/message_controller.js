const baseURL =

(function() {
  'use strict';
  angular
  .module('angular-inbox')
  .controller('messageController', function messageController  ( ){
    const vm=this
  //   star(id){
  //   let starred
  //   this.state.messages.forEach(message => {
  //   if(message.id === id) {
  //     starred = !message.starred
  //   }
  // })
  // }

    vm.starMessage=function(message){
const body = {
  "messageIds": [id],
  "command": "star",
  "star": starred
}
const settings = {
  method: 'PATCH',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(body)
}
fetch(`${baseURL}/messages`, settings)
// .then(data => data.json())

.then(response => {
  // console.log(response)
  if(response.ok) {
    const newMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.starred = !message.starred
      }
      return message;
    })
    this.setStateWithSelection(newMessages)
    }
  })
}

// check(id){
//   const newMessages = this.state.messages.map(message => {
//     if (message.id === id) {
//
//     }
//   })
// }
    vm.checkedMessage=function(selected,message){
        message.selected=selected
    }
  })
}());
