describe('countAllFromTown' , function(){

    it('returns "3" for three sets of registration numbers from Pretoria' , function(){
       var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)    
        });
    
    it('returns "1" for only one set of registration numbers from Centurion' , function(){
         var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
         assert.equal(fromKuilsriver, 1)
    
        });
    
    });