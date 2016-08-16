describe('myApp', function () {
    var flt;

    beforeEach(function () {
        module('myApp');
    });

    beforeEach(inject(function ($filter) {
        flt = $filter('MyBoolean');
    }));
    

    it('has a bool filter', inject(function($filter) {
        expect($filter('MyBoolean')).not.toBeNull();
    }));

    it("should return true if the input is not equal to 'f' / 0 / '0' / 'false' / 'no'/ 'n' or an empty array ", function () {
        expect(flt(true)).toBeTruthy();
        expect(flt('any string')).toBeTruthy();
        expect(flt(1)).toBeTruthy();
        expect(flt([1234])).toBeTruthy();
        expect(flt({})).toBeTruthy();
    });

    it("should return false if the input is equal to 'f' / 0 / '0' / 'false' / 'no'/ 'n' or an empty array ", inject(function (MyBooleanFilter) {
        expect(MyBooleanFilter(false)).toBeFalsy();
        expect(MyBooleanFilter('false')).toBeFalsy();
        expect(MyBooleanFilter('f')).toBeFalsy();
        expect(MyBooleanFilter(0)).toBeFalsy();
        expect(MyBooleanFilter('n')).toBeFalsy();
        expect(MyBooleanFilter([])).toBeFalsy();
    }));

});