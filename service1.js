var mymodule = angular.module('MyServiceApp', []);

//module.factory() method of creating a service
mymodule.factory('MessageService', function () {
  var message = 'Hello Message';
  var getMessage = function () {
      return message;
  };
  var setMessage = function (m) {
      message = m;
  };

  return {
      getMessage: getMessage,
      setMessage: setMessage
  }
});

//module.service() method of defining a service  
//begin with creating an independent function
function techServiceFunction(){
  var preserveTechRec = {};
  this.getTech = function(){return preserveTechRec;}
  this.setTech = function(mytech){preserveTechRec = mytech;}
}
  
//service: create a service on the basis of function
mymodule.service('TechService', [techServiceFunction]);