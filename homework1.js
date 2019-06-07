
let btndemo = document.getElementById('btn- demo');
let value = document.getElementById("demo-input")
let a = document.getElementById("demo-a")
btn_demo.addEventListener('click', () => { 
    value.value = a.href
})





















// 3
let table_button = document.getElementById("table-button")
table_button.addEventListener('click', () => {
    let row = prompt("At which row do you want to make a change? ")
    let column = prompt("At which column do you want to make a change? ")
    let content = prompt("Enter new content? ")
    let x = document.getElementById('myTable').rows[parseInt(row-1,10)].cells;
    x[parseInt(column-1,10)].innerHTML=content;
})