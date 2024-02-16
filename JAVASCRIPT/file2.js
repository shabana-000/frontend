const heading=document.getElementById("demo");
heading.innerHTML="The worlds Best"
heading.style.backgroundColor="purple";
heading.style.color="pink";
heading.style.fontSize="30px";
heading.style.borderRadius="12px";


const para=document.getElementById("frame");
para.innerHTML="The frame work"
para.style.fontSize="30px";
para.style.backgroundColor="grey";
para.style.color="black";


const tr=document.getElementById("take");
tr.href="https://th.bing.com/th?id=OIP.Vtxy0FjT_EfudI4cQk1kzAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"

const ar=document.getElementById("royal");
ar.href="https://th.bing.com/th?id=OIP.MXXcVA3-a55KwAUXCG5HAAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"

 function displayDate(){
    document.getElementById("demo").innerHTML=Date();
 }
 function mouseOver(obj){
    obj.innerHTML="Thank u";
 }
 function mouseOut(obj){
    obj.innerHTML="mouse over";
 }
 
 function mouseDown(obj){
    obj.style.backgroundColor="purple";
    obj.innerHTML="Release me";
 }
function mouseUp(obj){
    obj.style.backgroundColor="red";
    obj.innerHTML="thank u";
}
function myfunction(){
    let x=document.getElementById("numb").value;
    let text;
    if(isNaN(x) || x<2 ||x>15){
        text="input not valid";
     } else{
        text="input ok";
    }
    
document.getElementById("demo").innerHTML=text;
}
document.getElementById("demo").innerHTML="My first msg";

let text1="Fatheshabana";
text1+="made For Each Other"
document.getElementById("demo").innerHTML=text1;

const person={
   firstname:"hayyan",
   lastname:"shaik",
   age:"7",
   grade:"3",
   school:"crayons",
   fullname:function(){
      return this.firstname + " " + this.lastname;
   }


};
document.getElementById("demo").innerHTML=person.fullname();


//function statement (or) function declaration
function myfunction(){
   console.log("function statement")
}

let s1
s1 = () => {
   return "Hello World"
}
console.log(s1());




