// order
// fetch ingredients
// start production
// serve


let stocks = {
    fruits:["strawberry","grapes","orange","peach","apple"],
    liquids:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["choclate","peanut"]
}

// order taking function taking parameter to connect production so production starts immediately once the order is taken
let order = (selected_fruit,call_production)=>{

    // console.log("order given");
   
    setTimeout(()=>{
        // selecting the fruit
        console.log(`${stocks.fruits[selected_fruit]} flavour is selected `);
        // calling the production function
        call_production();
        // production is called inside the settimeout because the production function has been given 2 seconds and it will start before this function

    },0000)
 
   
};

// production starting function
let production = ()=>{

setTimeout(()=>{
        // printing the start of poduction
        console.log("production started");

        // after two seconds fruits chopped
    setTimeout(()=>{
            console.log("fruits is being chopped");

            // after one second adding liquids
        setTimeout(()=>{
            console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} is being added`);

            // starting the machine after onw second
            setTimeout(()=>{
                console.log("machine started grinding");

                // selecting the cone
                setTimeout(()=>{
                    console.log(`${stocks.holder[0]} is selected to cup the ice cream`);

                    // toppings was added for 3 seconds
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} is being added`);

                        setTimeout(()=>{
                            console.log("ICE CREAM SERVED");
                        },2000)

                    },3000)

                },2000)

            },1000)

        },1000)

    },2000)

},0000)
  
};
// the above process of having settime out inside set time out is called call back hell


// the argument call production 
order(0,production);