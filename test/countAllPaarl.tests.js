describe('countAllPaarl' , function(){

    it('returns number of cars with registrations from Paarl' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        });
    
    it('returns "2" for all registration numbers from Paarl' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
          
        });
    
    });