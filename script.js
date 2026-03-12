console.log("Hello World")
document.write("Hello world")

var num = 10;
console.log(num);
console.log(typeof(num));

num = false;
console.log(num);
console.log(typeof(num));

var num ="Prashant";
console.log(num);
console.log(typeof(num));

var num =null;
console.log(num);
console.log(typeof(num));

var num =undefined;
console.log(num);
console.log(typeof(num));

const sym1 =symbol(4);
console.log(sym1);

const sym2 =symbol(4);
console.log(sym1);
if(sym==sym2){
    console.log("true");
}

else{
    console.log("false")//because each symbol is unique

}
//ARITHMATIC OPERATION
var a = 100; var b = 200; var c = 150; var linebreak = "<br>";
document.write("a+b+c=");
result = a + b + c;
document.write(result);
document.write(linebreak)

document.write("a + b = ");
result = a + b;
document.write(result);
document.write(linebreak);

document.write("a - b = ");
result = a - b;
document.write(result);
document.write(linebreak);

document.write("a * b = ");
result = a * b;
document.write(result);
document.write(linebreak);

document.write("a / b = ");
result = a / b;
document.write(result);
document.write(linebreak);

document.write("a % b = ");
result = a % b;
document.write(result);
document.write(linebreak);

//LOGICAL OPERATION
document.write("(a == b) => ");
result = (a == b);
document.write(result);
document.write(linebreak);

document.write("(a < b) => ");
result = (a < b);
document.write(result);
document.write(linebreak);

document.write("(a > b) => ");
result = (a > b);
document.write(result);
document.write(linebreak);

document.write("(a != b) => ");
result = (a != b);
document.write(result);
document.write(linebreak);

document.write("(a >= b) => ");
result = (a >= b);
document.write(result);
document.write(linebreak);

document.write("(a <= b) => ");
result = (a <= b);
document.write(result);
document.write(linebreak);

//ASSIGNMENT OPERATION
document.write("Value of a => (a = b) => ");
result = (a = b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a += b) => ");
result = (a += b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a -= b) => ");
result = (a -= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a *= b) => ");
result = (a *= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a /= b) => ");
result = (a /= b);
document.write(result);
document.write(linebreak);
 
var count;
document.write("startoing loop"+"<br/>");
for(cout=0<10;count<10; count++)
    {
    document.write("current count :" +count);
    document.write("<br/>");
}
document.write("Loop stopped!");

const RAT = {
    fname:"Ajay",
    lname: "singh",
    age: 25

};
for(let x in person){
    console.log(`person details:${x};${person[x]}`)
}

var grade ='A';
document.write("Entering switch block <br/>");
switch (grade){
    case'A':document.write("Good job <br/>");
    break;

    case 'B':document.write("Pretty good <br/>");
    break;

    case'C':document.write("Passsed<br/>");
    break;

    case'D':document.write("Not so good<br/>");
    break;

    case'F':document.write("Failed<br/>");
    break;

    default:document.write()
}
//function

function myFunction()
{
    alert("Hello World");

}

function sayHelo(){
    document.write(name+ "is"+age+"");
}

function add(a, b)
{
    console.log(a+b);
}
 add1(10,20);

var person ={
    name: "John Mac",
    age:30,
    isMarried: true,
    address:{
        street:'vinay nagar',
        flatNo:201
    }
}
    console.log(person);
