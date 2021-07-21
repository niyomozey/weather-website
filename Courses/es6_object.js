// const product = require("../models/product");

const name = 'niyonkuru';
const userAge = 21;

const user ={
    name: name,
    age: userAge,
    Location:'kigali',
    getAge:(yearOfBirth)=>{
        return 2021-yearOfBirth;
    }
}

console.log(user.getAge(1990));
//object destructing
const product = {
    label: 'Macbook pro',
    price: 1000,
    stock : 7,
    salePrice:undefined
}
// const {label,stock,salePrice} = product
// console.log(label)
// console.log(stock)
// console.log(salePrice)

const transaction = (type, {label, stock})=>{
    console.log(type, label, stock)
}
// transaction('ordering',product);

// Other example
const project = {
    title:"Criminal status generation",
    manager : "niyonkuru moise",
    duration: '3 months',
    cost : 2500000,
    getCostPerMonth:function(){
        console.log('project cost : '+this.cost);
        return this.cost/3;
    }
}

const {title,duration,cost} =project 
console.log(title, duration, cost);