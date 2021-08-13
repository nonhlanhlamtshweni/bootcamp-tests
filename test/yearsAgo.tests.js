describe('yearsAgo', function(){

    it('It should take in a year and return how many yearsAgo that year is from current year', function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it('It should return how many years ago from the current given year', function() {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

    });
    });