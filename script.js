'use strict'; 

let getToast = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Your toast is ready');
        },2000)
    })
}
let getCoffee = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Your coffee is ready');
        },3000)
    })
}

let breakfast = async function() {
    let toast = await getToast();
    let coffee = await getCoffee();

    let [myToast,myCoffee] = await Promise.all([toast,coffee])
    console.log(myToast,myCoffee);
}
breakfast()