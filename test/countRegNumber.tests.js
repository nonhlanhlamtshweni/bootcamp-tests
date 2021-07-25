describe('countRegNumber', function()  {

it('should count how many registration numbers are in a string and return an answer ', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
})

it('should count the number of registration numbers in this string ', function(){
    assert.equal(countRegNumber('CA 182736'), 1);
})

var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);

});