describe('transportFee', function(){

    it('It should return "R20" for morning shift' , function(){
          assert.equal(transportFee('morning'), 'R20');
        });
    
    it('It should return "R10" for afternoon shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
          
        });
    
        it('It should return "free" for night shift' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    
          
        });
    
    });