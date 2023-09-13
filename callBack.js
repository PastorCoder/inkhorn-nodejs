function greet(name) {
    console.log("Hello", name);
}


function higherOrderFunction(callback) {
    const name = "Teacher John"
    callback(name)
};



higherOrderFunction(greet);