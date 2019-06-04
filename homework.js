
//-Why should we use functions at all? Để sử dụng code nhiều lần

//-How to define/declare a function?- Let namefuntion = (name1, name2, name3) {};

//-How to call/use a function?- namefunction(value/function)

//-What is return, why and how do we use it?...

//Do we have to use return in every function? ko nên

//What are function arguments/parameters, why and how we use it? 
//Function parameters are listed inside the parentheses () in the function definition.
//Function arguments are the values received by the function when it is invoked.
//Inside the function, the arguments (the parameters) behave as local variables.

//How to use function from a different file other than our currently working file? 
//The function could be called as if it was in the same JS File as long as the file containing the definition of the function has been loaded before the first use of the function. (chắc vậy ...)
// ex1
// let words = () =>{
// 	for ( i = 0; i <= 3; i++ ) {
// 		console.log("hello world");
// 	}
// }
// 	words();







// //ex2
// let tong = (x, y) =>{
// 	let resutl = x + y;
// 	console.log(resutl);
// }
// let x = Number(prompt(" nhap x"));
// let y = Number(prompt("nhap y"));
// tong(x, y);





// // ex3
// clear();
// let square = (a, b) => {
// color(b);
// fd(a);
// rt(90);
// fd(a);
// rt(90);
// fd(a);
// rt(90);
// fd(a);
// };
// let a = Number(prompt(" nhap a "));
// let b = prompt(" nhap color ");
// square(a, b);

// 5
clear();
let star = (a) => {
rt(18);
fd(a);
rt(144);
fd(a);
rt(144);
fd(a);
rt(144);
fd(a);
rt(144);
fd(a);
};
let a = Number(prompt("Input a "));
star(a);






// ex8


	let list = (a) => {
		for ( let i = 0; i < a.length, i++ ) {
			if (a[i] % 2  === 0){
				conslole.log(a);
			}
			else if (a[i]%2 === 1){
				a.splice(i, 1);
				console.log(a);
			}
		}
		return a;
	}
	let num = [1, 4, 5, -1, 10];
	list(num);
