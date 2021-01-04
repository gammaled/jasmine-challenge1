describe("drink test", function() {
    
    beforeEach(function() {
        age = 0;
    });
    describe("When age is less than 0", function() { 
        it("Should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
            var result = drinkAbout(0);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
    describe("When age is less than 14", function() { 
        it("Drink Toddy", function() {
        var result = drinkAbout(13);
        expect(result).toBe("Drink Toddy");
        });
    });
    describe("When age is less than 18", function() { 
        it("Drink Coke", function() {
        var result = drinkAbout(17);
        expect(result).toBe("Drink Coke");
        });
    });
    describe("When age is less than 21", function() {
        it("Drink Beer", function() {
        var result = drinkAbout(20);
        expect(result).toBe("Drink Beer");
        });
    });
    describe("When age is less than 130", function() {
        it("Drink Whiskey", function() {
        var result = drinkAbout(129);
        expect(result).toBe("Drink Whiskey");
        });
    });
}); 