const EventEmitter = require("node:events");

const emitter = new EventEmitter();//instance of the event module

// emitter.on("eventName", "function");
// emitter.on("order-pizza", () => {
//     console.log("order received! baking a pizza");
// })

//emitter.emit("order-pizza"); //event dispatching or broadcasting



// emitter.on("eventName", "function");
emitter.on("order-pizza", (size, topping) => {
    console.log(`order received! baking a ${size} pizza with ${topping}`);
})

emitter.emit("order-pizza", "large", "mushrooms"); //event dispatching or broadcasting 

