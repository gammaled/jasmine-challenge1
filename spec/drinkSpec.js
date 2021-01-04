describe("drink test", function() {
    
    beforeEach(function() {
        age = 0;
    });
    describe("When age is less than 0", function() { 
        it("Should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
            var result = drinkAbout(0);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("Drink Toddy", function() {
        var result = drinkAbout(13);
        expect(result).toBe("Drink Toddy");
        });
        it("Drink Coke", function() {
        var result = drinkAbout(17);
        expect(result).toBe("Drink Coke");
        });
        it("Drink Whisky", function() {
        var result = drinkAbout(20);
        expect(result).toBe("Drink Whisky");
        });
    });
}); 