var myApp = angular.module('myApp', []);

/**
 * A filter used to transfer value to Boolean.
 * If the input value is equal to 'f' / 0 / '0' / 'false' / 'no'/ 'n' or an empty array it returns false, otherwise it returns true.
 */
myApp.filter('MyBoolean', function () {
  return function (value) {
    if (value && value.length !== 0) {
        var v = angular.lowercase('' + value);
        value = !(v === 'f' 
          || v === '0' 
          || v === 'false' 
          || v === 'no' 
          || v === 'n' 
          || v === '[]');
    } else {
        value = false;
    }
    return value;
  };//return function
});//filter