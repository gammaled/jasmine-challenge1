drinkAbout = function(age) {
    if (age <= 0 || age > 130) {
    return "Sorry. I can’t tell what drink because that age is incorrect!";
    
    } else if (age <= 14) {
        return "Drink Toddy";

    } else if (age <= 18) {
        return "Drink Coke";

    } else if (age <= 21) {
        return "Drink Beer";

    } else if (age <= 130) {
        return "Drink Whiskey";

    } else if (typeof age === 'string'){
        return "Error!";

    } else {
        return "Error!";
    };
};