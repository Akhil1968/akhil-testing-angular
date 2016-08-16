var filters = angular.module('myNameSpace.filters', []);

filters.filter('reverse', function() {
  return function(text) {
    return text.split('').reverse().join('');
  };
});