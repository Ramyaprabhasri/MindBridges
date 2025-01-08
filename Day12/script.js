//ASCI
function asci(){
    let str1 = document.getElementById("str1").value;
    let res=0;
    for(let i=0;i<str1.length;i++)
    {
        res+=str1.charCodeAt(i);
    }
    document.getElementById("res1").innerHTML=res;
}

//UpperCase
function upperCase(){
    let str2 = document.getElementById("str2").value;
    let str3 = document.getElementById("str3").value;

    let resStr1 = str2.charAt(0).toUpperCase() + str2.slice(1);
    let restStr2 = str3.charAt(0).toUpperCase() + str3.slice(1);
     document.getElementById("res2").innerHTML=resStr1+" "+ restStr2;

}

//Largest String
function largest(){
    let str = document.getElementById("str4").value;
    let str1=str.split(" ");
    let largest ="";
    for(let i=0;i<str1.length;i++){
        if(str1[i].length>largest.length){
            largest=str1[i];
        }
    }
    document.getElementById('res3').innerHTML=largest;
}

//Replacing
function Replacing(){
    let str = document.getElementById("str5").value;
    let seen = [];
    let res=[];
    let str1 = str.split(" ");
    for(let i=0;i<str1.length;i++){
        if(seen.includes(str1[i])){
            res.push("CHANGED");
        }
        else{
            res.push(str1[i]);
            seen.push(str1[i]);
        }
    }
    res=res.join(" ");
    document.getElementById('res4').innerHTML=res;

}

//Even
function Even(){
    let str = document.getElementById("str6").value;
    let str1=str.split(" ");
    let res=[];
    for(let i=0;i<str1.length;i++){
        if(i%2===0){
             res.push("EVEN");
        }
        else{
            res.push(str1[i]);
                }
    }
    let result =res.join(" ");
    document.getElementById('res5').innerHTML=result;

}

//Removing Duplicates

function RemoveDuplicates(){
    let str = document.getElementById("str7").value;
    let seen=[];
    let res="";
    let str1=str.split("");
    for(let i=0;i<str1.length;i++){
       if(seen.includes(str1[i])){
        continue;
       }
       else{
        seen.push(str1[i]);
        res+=str1[i];
       }
    }
    document.getElementById('res6').innerHTML=res;


}