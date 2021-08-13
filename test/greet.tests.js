describe ('The greet function' , function() {

    it('should return "Hello Felicia" when I greet Felicia' , function()   {
    assert.equal('Hello, Felicia', greet ('Felicia'));

    });
    it('should return "Hello" when no name is entired' , function()   {
        assert.equal('Hello', greet ());
    
        });
    
});