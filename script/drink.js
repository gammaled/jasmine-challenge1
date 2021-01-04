drinkAbout = function(age) {
    if (age <= 0) {
    return "Sorry. I can’t tell what drink because that age is incorrect!";
    
    } else if (age <= 14) {
        return "Drink Toddy";

    } else if (age <= 18) {
        return "Drink Coke";

    } else {
        return "Drink Beer";
    }
};