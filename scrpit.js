//most of thd timec we declare tyher array in Cosy
//new constructer
// const arr=["scropio","tata","mahindera","harrier"];
// arr.push("kia","mercedes");
// arr.splice(2,0,"nikesh","yadav");
// it change the content by removing or adding the existing content form the Array splice method;
// arrayname.splice(start,deletecount,additem1,additem2...);
// arr.pop();
// arr.shift();// it usualyy remove from starting 
// arr.unshift("nikesh") it add the element in starting of the Array;
// arr.sort(); it make the order wise alphabet;
// let n = arr.toString();
// console.log(typeof n); it ususally give the srting in 
// Array.isArray(arr);

//splice add new iteam in the array postion wise;

// arr.splice(2,1,"benz","maybac");

// slice is the method to make the array in two different array it does not impact the existing array

// let m = arr.slice(2);
// console.log(m);

// console.log(typeof  arr); it provide the type of array

// const veggies =["okra","carrot","cabbage","chilly"];
// const newarray = arr.concat(veggies);

// console.log(newarray);


// const x = arr.length;
// // console.log(x);
// let text = "<ul>";
// for (let i = 0;i<x;i++){
//     text += "<li>" + arr[i] + "</li>";
// }

// text += "<ul>";
// let y = arr[arr.length-1];
// document.getElementById("head").innerHTML = arr.join("*");//it will join whatrever symol you will provide to the array
// document.getElementById("head").innerHTML = text;


// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// document.getElementById("head").innerHTML = arr[0];
// document.getElementById("head").innerHTML = arr;

// function display(){
//     console.log("hello")
// }

// const arr1 = ["nikesh",23,{name: "yadav",age: 22},display];
// document.getElementById("head").innerHTML = arr1;
// console.log(arr1);


// const  array2=[{
//     name:"nikeshh",
//     age: 24,
//     id:101
// }



// ,{
//     name:"jalaj",
//     age: 23,
//     id:1101
// }
// ,{
//     name:"ajeet",
//     age: 29,
//     id:111
// }





// ]


// console.log(array2);



// const array2 =[
//     {
//         name :"nikesh",
//         last :"yadav",
//         age :23,
//     }

//     ,{
//         name :"abishek",
//         last :"yadav",
//         age :24
//     }
// ]

// console.log(array2);
// // let e=array2.length;
// // console.log(e);

// array2.unshift({
//     name:"vivek",
//     last:"yadav",
//     age:22,
// });

// array2.shift();





//compare function in afray inn the numericc form
const array1 =[13,15,45,78,35];
array1.sort(function(a,b){
    return a-b;
});

console.log(array1);
array1.reverse();
console.log(array1);//reverse method in the 