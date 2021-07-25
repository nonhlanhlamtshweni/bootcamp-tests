describe('regCheck', function()  {

    it('should check if regNum is from GP', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        
    })
        
    it('should check if regNum is from EC', function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        

    })  
    
    

})

