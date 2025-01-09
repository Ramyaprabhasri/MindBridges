function RemoveA(){
    let str = document.getElementById('str1').value;
    let seen=[];
    let res=[];
    let str1 = str.split("");
    for(let i=0;i<str1.length;i++){
       if(str1[i]==='a' && seen.includes('a')){
        continue;
       }
       if (str[i] === 'a') {
        seen.push('a'); 
    }
    res += str[i]; 
}
document.getElementById('res1').innerHTML=res;

}

//Sorting Object Array

const employees = [ 
    { name: 'John', age: 28 }, 
    { name: 'Anna', age: 22 }, 
    { name: 'Mike', age: 32 },
     ];
employees.sort(function (a,b){
    return a.age - b.age;
}   ); 
console.log(employees);


//Task 2 
const nums = [1, 2, 3, 4, 5, 6];
function myfun(){
    let res = {
        odd:[],even:[]};
        let k = nums.keys();

    for(let i of k ){
        if(nums[i]%2===0){
            res.even.push(nums[i]);
        }
        else{
            res.odd.push(nums[i]);
        }
    }
    return res;
}
console.log(myfun());



//Frequent Occurence 
const arr = [1, 2, 2, 3, 3, 3];
function frequency(){
    arr.sort((a,b) => a-b);
    let max=1;
    let current = 1;
    let res = arr[0];
    for(let i=1;i<=arr.length;i++){
        if(arr[i]===arr[i-1]){
            current++;
        }
        else{
            current=1;
        }
        if(current>max){
            max=current;
            res=arr[i];
        }
    }
    return res;
}
console.log(frequency());

//Common elements
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
function common(){
    let res=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                res.push(arr1[i]);
            }
        }
    }
    return res;
}
console.log(common());


//Removing dupicates from array of objects
const data = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }, ];
function removeDuplicates(){
    const res = data.filter(function(obj,index,self){
        const first = self.findIndex(function (t){
            return t.id === obj.id ;
        });
        return index === first;
    });
    return res;
}
console.log(removeDuplicates());

// Key Value Pair
const arr3= [ { id: 1, value: 'A' }, { id: 2, value: 'B' }, ];
    const res ={};
    arr3.forEach(function(keyValue){
        res[keyValue.id]=keyValue.value;
    });
console.log(res);

//Elements that appear once
const arr4 = [1, 2, 2, 3, 4, 4, 5];
function appearOnce(){
    let seen=[];
    let res=[];
    for(let i=0;i<arr4.length;i++){
       if(seen[arr4[i]]){
        seen[arr4[i]]+=1;
       }
       else{
        seen[arr4[i]]=1;
       }
    }
    for(let i in seen){
        if(seen[i]===1){
            res.push(i);
        }
    }
    return res;
}
console.log(appearOnce());

//object into an array of [key, value] pairs.
const obj = { a: 1, b: 2 };
let res1 = [];
Object.entries(obj).forEach(function([key,value]){
 res1.push({key:key,value:value});
});
console.log(res1);

//Reducing pairs 
const obj1 = { a: 1, b: 2, c: 3 };
const res2 = Object.fromEntries(Object.entries(obj).filter(function(pair){
    return pair[0]!== 'C';
})
);
console.log(res2);

//Task 10
const input1 = [1, 2, 3, 5];
const input2 = [4,7];
const input3 = [6];
const merge = new Set([...input1,...input2,...input3]);
const resultSet = [...merge];
console.log(resultSet);