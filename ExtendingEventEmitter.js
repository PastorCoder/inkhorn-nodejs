const PizzaShop = require("./PizzaShop");
const DrinkMachine = require("./DrinkMachine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();


pizzaShop.on("order", (size, topping) => {
    console.log(`order received! baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
})


pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();