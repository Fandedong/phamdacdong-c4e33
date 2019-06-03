// What is nested list?
// 1 array ben trong 1 array khac
// Can a list store both integers and strings in it?
// Yes
// ex1
inventory = {
    'gold' : 500,
    'pouch' : ['flint', 'twine', 'gemstone'],
    'backpack' : ['xylophone', 'dagger', 'bedroll', 'bread loaf']
};
inventory.pocket = "test";
console.log(inventory);



ArrayPocket = ["seashell", "strange berry", "lint"];
inventory.pocket = ArrayPocket;
console.log(inventory);


inventory.backpack.splice(1, 1);
console.log(inventory);



inventory.gold = 50;
console.log(inventory);


//ex2
prices = {};
console.log(prices);

prices.banana = 4;
prices.apple = 2;
prices.orange = 1.5;
prices.pear = 3;
console.log(prices);

stock = {};
console.log(stock);

stock.banana = 6;
stock.apple = 0;
stock.orange = 32;
stock.pear = 15;
console.log(stock);





let moneyTable = [{name: "banana", prices: 4, stock: 6},
		{name: "apple", prices: 2, stock: 0},
		{name: "orange", prices: 1.5, stock: 32},
		{name: "lpear", prices: 3, stock: 15}
		];
let t = 0;

table.forEach((money, index) => {
	let totalmoney = money.prices*money.stock;
	t += totalmoney; 
})
console.log(`Tong tien ban hoa qua la: ${t}`);


//Ex 3

let shop = ["T-Shirt", "Sweater"];
let input = prompt("Welcome to our shop, what do you want (C, R, U, D)?");
if (input.toLowerCase() === "r"){
    console.log(`Our items: ${shop}`);
}
else if(input.toLowerCase() === "c"){
	let newitem = prompt("Nhap item moi: ");
	shop.push(newitem);
	console.log(`Our items: ${shop}`);
}
else if (input.toLowerCase() === "u"){
	let update = prompt("Update position?");
	let newitem = prompt("New item?");
	shop.splice(update-1, 1, newitem);
	console.log(`Our items: ${shop}`);
}
else if (input.toLowerCase() === "d"){
	let deleteItem = prompt("Delete position? ");
	shop.splice(delete-1, 1);
	console.log(`Our items: ${shop}`);
}
else {
	console.log("Pls input C, R, U, D");
}



	
//Ex 4

let SizeCuu = [5, 7, 300, 90, 24, 50, 75];
console.log(`Hello these are my ship sizes : ${SizeCuu} `);


//4.2

let a = 0;

for (let i = 0; i < SizeCuu.length; i++) {
    if (a <= SizeCuu[i]) {
        a = SizeCuu[i];
    }
}
console.log(`Now my biggest sheep has size ${a} let's shear it`);

//4.3
SizeCuu[SizeCuu.indexOf(a)] = 8;

//4.4 
for (let i = 0; i < SizeCuu.length; i++){
	SizeCuu[i] = SizeCuu[i] + 50;
}
console.log(`One month has passed,here are my ship sizes : ${SizeCuu} `);

