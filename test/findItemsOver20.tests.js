describe('findItemsOver20' , function(){
    it('should return items with a quantity over 20 when an object is inputed.' , function(){
        assert.deepEqual([
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ], findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]));
    });

    it('should return items with a quantity over 20 when an object is inputed.' , function(){
        assert.deepEqual([
        ], findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ]));
    });
});