describe('EchoService', function() {
	var myFilter;

	beforeEach(module('myNameSpace.filters'));

	beforeEach(inject(function($filter) {
	  myFilter = function() {
	    return $filter('reverse');
	  };
	}));

	it('should reverse', function() {
	  var filter = myFilter();
	  expect(filter('hello')).toBe('olleh');
	});
});