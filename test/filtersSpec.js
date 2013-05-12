describe("Stars filters", function() {

    beforeEach(module("angularMovieApp"));


    it("should display 0 to 5 stars", inject(function(starsFilter) {
        expect(starsFilter(1)).toBe("\u2605");
        expect(starsFilter(2)).toBe("\u2605\u2605");
        expect(starsFilter(3)).toBe("\u2605\u2605\u2605");
        expect(starsFilter(4)).toBe("\u2605\u2605\u2605\u2605");
        expect(starsFilter(5)).toBe("\u2605\u2605\u2605\u2605\u2605");
    }));

    it("should not display stars when invalid input", inject(function(starsFilter) {
        expect(starsFilter('XXX')).toBe('XXX');
        expect(starsFilter('')).toBe('');
    }));

});