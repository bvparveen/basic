let food = ['mango','rice','pepper','pear'];
food.forEach(function(foodItem){
    console.log('I want to eat '+foodItem);
});

let cost = [100,400,300,700];
let newCost = cost.map(function(costItem){
    return costItem / 10;
});
console.log(newCost);


let cost = [100,400,50,40,700];
let smallCost = cost.filter(function(costItem){
    return costItem < 200
});
console.log(smallCost);