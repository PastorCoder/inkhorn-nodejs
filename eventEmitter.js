const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// emitter.on("eventName", "function");
// emitter.on("order-pizza", () => {
//     console.log("order received! baking a pizza");
// })

//emitter.emit("order-pizza"); //event dispatching or broadcasting



// emitter.on("eventName", "function");
emitter.on("order-pizza", (size, topping) => {
    console.log(`order received! baking a ${size} pizza with ${topping}`);
});


emitter.on("order-pizza", (size) => {
    if (size === "large") {
        console.log("Serving complementary drink");
    }
});

emitter.emit("order-pizza", "large", "mushrooms"); //event dispatching or broadcasting 

