// odd or even
function OddOrEven(){
   const n =document.getElementById('inputNumber').value;
   if(n===""){
    document.getElementById('result').innerHTML="Please enter a number";
    return;
   }
   if(n%2===0){
    document.getElementById('result').innerHTML="Even Number";
   }
   else{
    document.getElementById('result').innerHTML="Odd Number";

   }
}

// Printing numbers from 1 to 10
let res="";
for(let i=1;i<=10;i++){
  res += i + "<br>";
}
document.getElementById('res').innerHTML=res;

// Multiples of 3
function Multiples(){
  let res2="";
  const n = document.getElementById('inputNumber1').value;
  for(let i=1;i<=10;i++){
    res2+=i*n + "<br>";
  }
  document.getElementById('res2').innerHTML=res2;

}
//Prime
function Prime(){
  const n = document.getElementById('inputNumber2').valueAsNumber;
  let flag = true;
if(n==1 || n==0){
  flag=false;
  return;
}
else if(n>1){
  for(let i=2;i*i<=n;i++){
    if(n%i==0){
      flag=false;
      break;
    }
  }
}
if(flag){
  document.getElementById('res3').innerHTML="Prime Number";
}
else{
  document.getElementById('res3').innerHTML="Not a Prime Number";
}
} 

//Sum of Integers from 1 to 100
let res4=0;
for(let i=1;i<=100;i++){
  res4+=i;
}
document.getElementById('res4').innerHTML="Sum of All Integers from 1 to 100 is " + res4;

//Largest Element in an Array
const arr =[3,5,7,9,10];
let largest = arr[0];
for(let i=1;i<arr.length;i++){
  if(arr[i]>largest){
    largest=arr[i];
  }
}
document.getElementById('res5').innerHTML="Largest Element in the Array is " + largest;

//Vowel Count
function VowelCount(){
  var str=document.getElementById('inputString').value;
  let str1 = str.toLowerCase();
  let count = 0;
  for (let i=0;i<str1.length;i++){
    if('aeiou'.includes(str1[i])){
      count++;
    }
  }
  document.getElementById('res6').innerHTML="Number of Vowels in the String is " + count;
}

//Star pattern
function Pattern(){
  const n = document.getElementById('inputNumber3').value;
  let result7="";
  for(let i=1;i<=n;i++){
    result7 += "*".repeat(i) + "<br>";
  }
    document.getElementById('res7').innerHTML=result7;
  }

  //Fizz Buzz
  let result8 ="";
  for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
      result8+="FizzBuzz<br>"
    }
    else if(i%3==0){
      result8+="Fizz<br>"
    }
    else if(i%5==0){
      result8+="Buzz<br>"
    }
    else{
      result8+=i+"<br>"

    }
  }
  document.getElementById('res8').innerHTML=result8;

  //Reversed String
  function ReverseString(){
    let str=document.getElementById('inputString1').value;
    let result9="";
    for(let i=str.length-1;i>=0;i--){
      result9+=str[i];
    }
    document.getElementById('res9').innerHTML=result9;
  }