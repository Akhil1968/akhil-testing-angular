// controllerSpec.js
describe('Controller test Suite', function() {
  // Instantiate a new version of my module before each test
  beforeEach(module('TestingApp'));

  var ctrl;
  var ctrl2;

  // Before each unit test, instantiate a new instance
  // of the controller
  beforeEach(inject(function($controller) {
    ctrl = $controller('JobCtrl');
    ctrl2 = $controller('EmpCtrl');
  }));

  it('should have items available on load', function() {
    expect(ctrl.items).toEqual([
      {id: 1, label: 'Building a Flyover', done: false},
      {id: 2, label: 'Building a Bridge', done: false}
    ]);
  });

  it('should have specific state', function() {
    var item = {id: 1, label: 'Creating of a Flyover', done: true};

    var actualStat = ctrl.getCompletedStatus(item);
    expect(actualStat.jobCompleted).toBeTruthy();

    item.done = false;
    actualStat = ctrl.getCompletedStatus(item);
    expect(actualStat.jobCompleted).toBeFalsy();
  });

  it('testing EmpCtrl: total experience to be ', function() {
    var totalExp = 34;
    expect(ctrl2.totalExp).toEqual(totalExp);
  });

});
