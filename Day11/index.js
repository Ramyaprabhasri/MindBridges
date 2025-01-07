// Basic Arithmetic Operation
function calculate(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if(isNaN(num1)|| isNaN(num2)){
        document.getElementById('result1').value="Enter a Valid Number";
    }
    const add = num1+num2;
    const sub = num1-num2;
    const mul=num1*num2;
    const div = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide";
    document.getElementById('result1').innerHTML=`Addition:  ${add} <br> Subtraction: ${sub} <br> Multiplication: ${mul} <br> Division: ${div}`;


}

//Logical Condition
function logic(){
    const input = document.getElementById('inputNumber1').value;
    if(input>10 && input%2==0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

//Ternary Operator
function ternary(){
    const n = Number(document.getElementById('inputNumber2').value);
    const res = n>0 ? "Positive" : "Negative";
    document.getElementById('result2').innerHTML=res;
}
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

//Switch

function grade(){
    const n = parseFloat(document.getElementById('inputNumber3').value);
    switch(true){
        case (n>=90 && n<=100):
            document.getElementById('result3').innerHTML = "Grade A";
            break;
        case (n>=80 && n<=89):
            document.getElementById('result3').innerHTML = "Grade B";
            break;
        case (n>=70 && n<=79):
            document.getElementById('result3').innerHTML = "Grade C";
            break;
        case (n<70):
            document.getElementById('result3').innerHTML = "F";
            break;
    }
}

//Multiplication Table
function table(){
    const n = document.getElementById('inputNumber4').value;
    let result4 = "";
    for(let i=1;i<=10;i++){
        result4 += `${i} * ${n} = ${i * n} <br>`; 
       }
    document.getElementById('result4').innerHTML=result4;
}

//Count the digits
function count(){
    let n = document.getElementById('inputNumber5').value;
    let count=0;
    while(n>=1){
        n/=10;
        count++;
    }
    document.getElementById('result5').innerHTML=count;

}
//Alert Box
 const clicked = () =>{
    alert("Welcome to My Website");
 }

 //User Confirmation
 function user(){
    const userchoice = confirm("DO you want to continue?")
    if(userchoice){
        document.getElementById('result6').innerHTML="You chose to continue!";
     }
     else{
        document.getElementById('result6').innerHTML="You chose to cancel!";

     }
 }

 //Prompt Box
 function checkAge() {
    const age = prompt("Please enter your age:");
    if (age === null) {
        alert("No input provided.");
    } else if (!isNaN(age) && Number(age) >= 18) {
        alert("You are eligible.");
    } else {
        alert("You are not eligible.");
    }
}

//BMI Calculator
function bmi(){
    let height = prompt("Enter your height");
    let weight = prompt("Enter your weight");
    let bmiValue = weight / (height ** 2);
    alert(bmiValue);

}

//Reversed String
  function ReverseString(){
    let str=document.getElementById('inputString1').value;
    let result9="";
    for(let i=str.length-1;i>=0;i--){
      result9+=str[i];
    }
    document.getElementById('res9').innerHTML=result9;
  }

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

  //Palindrome
  function Palindrome(){
    let str=document.getElementById('inputString2').value;
    const str1=str;
    let result10="";
    for(let i=str.length-1;i>=0;i--){
      result10+=str[i];
    }
    if(str1==result10){
    document.getElementById('res10').innerHTML=true;
    }
    else{
        document.getElementById('res10').innerHTML=false;

    }
  }

  //Extract Initials
  function Initials() {
    const name = document.getElementById('fullName').value;
    const parts = name.trim().split(' ');
    let initials = "";
    for (let part of parts) {
        initials += part[0].toUpperCase() + ".";
    }
    document.getElementById('res11').innerHTML = `Initials: ${initials}`;
}

//Replace
function Replace(){
    let str = document.getElementById('str1').value;
    let resStr= str.replace("programming", "JavaScript");
    document.getElementById('res12').innerHTML=resStr;
}

//Split
function SplitString(){
    let str = document.getElementById('str2').value;
    const words=str.split(" ");
    document.getElementById('res13').innerHTML = `Words: [${words.join(', ')}]`;

}

//RemoveSpaces
function RemoveSpaces(){
    let str = document.getElementById('str3').value;
    let str1 = str.split(" ");
    let str2 = "";
    for(let i=0;i<str1.length;i++){
        str2+=str1[i];
    }
    document.getElementById('res14').innerHTML = str2;

}

//Frequency
function Frequency() {
    const str = document.getElementById('str4').value;
    const char = document.getElementById('inputChar').value;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    document.getElementById('res15').innerHTML = count;
}