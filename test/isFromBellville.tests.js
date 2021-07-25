describe('The isFromBellville function', function()   {
    
it('should return true if registration startsWith CY', function(){
  assert.equal(isFromBellville('CY 123'), true);

})
it('should return false if the registration startsWith CJ', function() {
  assert.equal(isFromBellville("CJ 123"), false)
})

});