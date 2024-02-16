// const para=document.getElementById("form");
// para.innerHTML="this is what i want it"
// para.style.backgroundColor="pink";
// para.style.fontSize="20px";

// const heading=document.getElementById("go");
// heading.innerHTML="Table"
// heading.style.color="red";


// const test=document.getElementById("test");
// test.href="https://th.bing.com/th/id/OIP.YEe7jjvj3XtaZgPXX7JJ7QHaE8?rs=1&pid=ImgDetMain"




// const hr=document.getElementById("Happy moment");
// hr.innerHTML="Family is our strength"
// hr.style.fontSize="20px";
// hr.style.backgroundColor="yellow";


// document.getElementById("btn").onclick=displayDate;
// function displayDate(){
//     document.getElementById("demo").innerHTML=Date();
// }

// function upperCase() {
//     const x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
//   }

//   function myFunction() {
//     if (numb%2===0) {
//       const numb=document.getElementById("numb").value;
//       text="This number is even";
//     } else {
//       text="This number is odd";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
//   function mouseDown(over){
//     over.style.backgroundColor="purple";
//     over.innerHTML="Release Me";
//   }
//   function mouseUp(over){
//     over.style.backgroundColor="pink";
//     over.innerHTML="Thank u";
//   }
//   let text1 = "John";
// let text2 = "Doe";
// let text3 = text1 + " " + text2;
// document.getElementById("demo").innerHTML = text3;

let text="zeba,hayyan";
console.log(text);
var s=30;
console.log(s);
{
let x=10;
console.log(x);
}



function myfunction(){
 
  let z=20;

}
myfunction();



let x="2";
let y=2;
console.log(x==y);

let b="cat,dog,cow";
let part=b.slice(4,7);
console.log(part);


let h="fsah";
let j="gsha";
let n = h.concat(" ",j);
console.log(n);


let k="dog";
let result=k.repeat(4);
console.log(result);

let text7="zeba and zeba is good girl";
let index=text.indexOf("hayyan,6");
console.log(index);

const names=["shabana","fathe","hayyan"];

names.push("zeba");
document.getElementById("demo").innerHTML=names;

const veg=["brinjal","potato","tomato","spianch"];
const fr=veg.sort();
console.log(fr);


const food=["burger","piza","icecream","burger"];
let item=food.lastIndexOf("burger")+1;
console.log(item);

const number=[23,45,34,20,23];
let first=number.findLast(x=> x>40);
console.log(first);

const fru=["ura","fsh","zsh"];
let st=fru.reverse();
let st1=fru.sort();
console.log(st);

const numbers1=[27,10,2,9];
 numbers1.sort(function(a,b){return a - b});
 console.log(numbers1);

const animals=["dog","cat","rat","tiger"];
const fruits=["kiwi","grapes","apple","grapes","orange"];

let fs=fruits.reverse();
console.log(fs);

const fsh=[[2,5,7,8,9],[0,1,5,6],[21,22,56,65]];
const sha=fsh.flat();
console.log(sha);


const vehicles=[];
vehicles[0]="cars";
vehicles[1]="bus";
vehicles[2]="pept";

console.log(vehicles);

const ch=[[30,78,90,77],[20,30,59],[90,78,98]];
let hz=ch.flat();
console.log(hz);


const sf=["dog","cat","rat"];

let da=sf.includes("cat");
console.log(da);

//function statement(or)function declaration
function myfunction(){
  console.log("function statement")
}
myfunction();

//function Expression
//Named Function Expression
var a=function fshz(){
  console.log("function Expression")
}
a();

//Anonymous Function
//A function without having name

//Difference between parameters and Arguments

function myfunction(s,f){
  console.log(s*f);
}
myfunction(3,5);

//Firstclass Function (or)First class Citizens

const s1=function(f){
  console.log(f);
}

function sfz(){

}

s1(sfz);

//Returning a Function from a Function
const z=function(f1){
  return function v(){

  }
}
console.log(z());
//Normal Function

h1=function(){
return "Hello world"
}
console.log(h1());

//Arrow Function
b=()=>{
  return "Hayyan"
}
console.log(b());

// //Array Map
// const number1=[98,76,54,34];
// const number2=number1.map(myfunction);

// document.getElementById("demo").innerHTML=number2;
// function myfunction(value,index,array){
//   return value *3;
// }

// const myArr=[2,4,7,8,9];
// const newArray=myArr.flatMap((x)=>x*2);
// document.getElementById("demo").innerHTML=newArray;

// const d=new Date(80,4);
// console.log(d);



// const arr=[21,34,45,20];
// arry1=arr.map(myfunction);
// document.getElementById("demo").innerHTML=arry1;
// function myfunction(value,index,array){
//     return value * 3;
// }
// var a=function(){
//   console.log("function Expression")
// }
// a();

// const f=function(s1){
//   console.log(s1);

// }
// function sfz(){

// }
// f(sfz);
// s1 =()=> {
//   return "Hello World"
// }
// console.log(s1());

// const chaco=["fivestar","dairyMilk","cadbaury"];
// let tex=" ";

// for (let i = 0; i < chaco.length; i++){
//    text += chaco[i] + "<br>";
// }
// document.getElementById("demo").innerHTML=text;

function a(){
  console.log(b1);
}
var b1 =90;
a();




