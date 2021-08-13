describe('fromWhere' , function(){

    it('returns "RegNumber" of which town the car is from' , function(){
     assert.equal(fromWhere('CY'), 'Bellville');
     assert.equal(fromWhere('CJ'), 'Paarl');
     assert.equal(fromWhere('CA'), 'Cape Town');
     assert.equal(fromWhere('CC'), 'Some other place!');
        });
    
    it('returns "other" for a car thats from a different town' , function(){
     assert.equal(fromWhere('CC'), 'Some other place!');
          
        });
    
    });