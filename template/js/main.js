
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
//set the openShop variable to a boolean 


 //create order function 
//  let order = (time,work ) => {
//     return new Promise((resolve,reject)=>{
//         if(openShop){
//             //set a timer in order to rsolve the promise; timer is entirely case dependent
//             setTimeout(()=>{
//                 //the work function has to be called to be executed
//                 resolve(work())
//             },time)
            
//         }else{
//             reject(console.log('Shop is closed'))
//         }
//     })
//  }
// //first test case
//  order(2000, ()=> console.log(`${stocks.Fruits[1]} was selected`))
//  //the then keyword chains the second promise once the first promise has been completed
//  .then(() =>{
//     //the then code block executes and returns an order promise that has both time and work funtions and outputs the necessary message   
//     return order(0, ()=>{
//         console.log(`production has started`)
//     })
//  })
//  .then(()=>{
//     return order(2000,() => {
//         console.log(`Fruit has been chopped`)
//     })
//  })
//  .then(()=>{
//     return order(1000,()=> {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`)
//     })
//  })
//  .then(()=>{
//     return order(1000, ()=>{
//         console.log(`Ice cream machine has started`)
//     })
//  })
// .then(()=>{
//     return order(2000, ()=>{
//         console.log(`Ice cream placed in ${stocks.holder[1]}`)
//     })
// })
// .then(() =>{
//     return order(3000,()=>{
//         console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} have been selected`)
//     })
// })
// .then(()=>{
//     return order(2000,()=>{
//         console.log(`Ice cream is ready`)
//     })
// })
// .catch(()=>{
//     console.log(`customer left`)
// })
// .finally(()=>{
//     console.log(`End of day`)
// })


// let openShop = true
// // the time function returns a Promise which resolves if openShop is true and rejects if it is false 
// function time(ms){
// return new Promise((resolve,reject) => {
//     if(openShop){
//         setTimeout(resolve,ms)
//     }else{
//         reject(console.log(`Shop is closed`))
//     }
// })
// }

// async function kitchen(){
//     try {
//         await time(2000)
//         console.log(`${stocks.Fruits[2]} was selected`)

//         await time(0)
//         console.log(`production has started`)

//         await time(2000)
//         console.log(`Fruit has been chopped`)

//         await time(1000)
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added `)

//         await time(1000)
//         console.log("start the machine")

//         await time(2000)
//         console.log(`Ice cream has been placed in ${stocks.holder[1]} `)

//         await time(3000)
//         console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} have been added `)

//         await time(2000)
//         console.log(`Ice cream is ready`)


//     } catch (error) {
//         console.log('Customer left')
//     }
//     finally{
//         console.log(`Day ended, shop closed`)
//     }
// }

// kitchen()

// Simulates an asynchronous operation (e.g., fetching data)

//async function to run a task mulltiple times if it fails 
//retry function accepts two parameters function and the number of retries

//Food ordering system
const menu = {
    items: [
        { name: "Burger", price: 5.99, available: true, preparationTime: 10 },
        { name: "Pizza", price: 7.99, available: true, preparationTime: 15 },
        { name: "Ice Cream", price: 3.49, available: false, preparationTime: 5 },
        { name: "Taco", price: 2.99, available: true, preparationTime: 7 },
    ],
};

async function fetchMenu(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            const success = Math.random() > 0.5
            if(success){
                const availabeItems = menu.items.filter((item) => item.available)
                resolve(availableItems)
            }else{
                reject(`Failed to fetch menu`)
            }
        },1000)
    })
}




async function placeOrder(itemName,maxPrice){
    return new Promise((resolve,reject) =>{
            setTimeout(() => {
                const item = menu.items.find((menuItem) => menuItem.name === itemName)

                if(!item){
                    return reject(`${itemName} not found on the menu`)
                }
                if(!item.available){
                    return reject(`${itemName} is currently unavailable`)
                }
               if(item.price > maxPrice){
                return reject(`${itemName} costs ${item.price.toFixed(2)} which exceeds ${maxPrice.toFixed(2)}`)
               }

               const success = Math.random() > 0.3
               if(success){
                resolve(`Order for ${itemNAme} has been placed successfully`)
               }else{
                reject(`Failed to place order for ${itemName}`)
               }
            })
    })
       

    
}