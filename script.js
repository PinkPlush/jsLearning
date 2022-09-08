/*
let login = prompt("Enter   your    login: \n ");

if (login == "Admin") {
    let password = prompt("Enter your password: \n ");

    if (password == "TheMaster") {
        alert("Welcome");
        }
        else {
            alert("try again");
            }
}
else if (login == "") {
    alert("again");
}
else {
    alert("ligma")
}
*/
//FizzBuzz game

let number =parseInt(prompt("Enter your number: \n "));

function FizzBuzz(initial = 1) {
    while (number > initial) {
        initial++;
        
        if(initial % 15 == 0){
            console.log("FizzBuzz");
        }
        else if (initial%3 == 0){
            console.log("Fizz");
        }
        else if (initial%5 == 0){
        console.log("Buzz");
        }
        else {
            console.log(initial);
        }
}
}

FizzBuzz();
