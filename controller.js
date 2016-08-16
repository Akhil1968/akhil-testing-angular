// controller.js
angular.module('TestingApp', [])
  .controller('JobCtrl', [function() {

    var self = this;
    self.items = [
      {id: 1, label: 'Building a Flyover', done: true},
      {id: 2, label: 'Building a Bridge', done: false}
    ];

    self.getCompletedStatus = function(item) {
      return {
        jobCompleted: item.done
      };
    };
}])

  .controller('EmpCtrl', [function() {
    var self = this;
    self.items = [
      {Name: 'Robert', exp: 18},
      {Name: 'Mohan', exp: 16}
    ];
    self.totalExp = self.items[0].exp + self.items[1].exp;
    //console.log("Total exp = " + self.totalExp);

}]);
