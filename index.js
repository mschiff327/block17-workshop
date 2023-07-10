const coffeeMenu = require("./coffee_data.js");

console.log(coffeeMenu);

const cheaperDrinks = coffeeMenu.filter(drink => drink.price <= 5);

console.log(cheaperDrinks)

const evenPricedDrinks = coffeeMenu.filter(drink => drink.price %2 ===0);

console.log(evenPricedDrinks);

const totalCost = coffeeMenu.reduce((total, drink) => {
    return total + drink.price;
}, 0);

console.log(totalCost);

const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);

console.log(seasonalDrinks);

const seasonalBeanDrinks = coffeeMenu.filter(drink => drink.seasonal).map(drink => ({...drink, name: `${drink.name} with imported beans`
}))

console.log(seasonalBeanDrinks);

