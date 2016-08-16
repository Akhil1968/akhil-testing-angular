// File: chapter3/simpleSpec.js
// A Test Suite in Jasmine
describe('Function Testing Suite', function() {

  var t;
  // Similar to setup
  beforeEach(function() {
    t = true;
  });

  afterEach(function() {
    t = null;
  });

  it('test case 1', function() {
    expect(t).toBeTruthy();
  });
  
  it('test case 2', function() {
    var expectedValue = true;
    expect(t).toEqual(expectedValue);
  });
});
