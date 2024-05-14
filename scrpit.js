// for (let i = 4; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j + ' ';
//     }
//     console.log(row);
// }

// Q17. Write a JavaScript function to check whether a string is blank or not. 



// function isBlank(str) {
//     return str.trim().length === 0;
//   }

//   console.log(isBlank(" hello "));
//   console.log(isBlank(""))



//   Q18. Write a java script program to find area of rectangle when width and height are given.

// function rectangle(){
//   let x=document.getElementById("x").value;
//   let y=document.getElementById("y").value;
// document.getElementById("demo").innerHTML=x*y;
//     console.log(x*y);
// }


// Q19. Write a JavaScript function to capitalize the first letter of a string.	        4    
// Sample Input: cybrom technology bhopal
// Ans : Cybrom Technology Bhopal.

// function capitalize(string){
//     // return str.charAt(0).toUpperCase()+str.slice(1);
//     return string.charAt(0).toUpperCase() + string.slice(1);

// }
// const output="this is nikesh yadav";
// const input = capitalize(output);
// console.log(input);

// // function capitalizeFirstLetter(string) {
// //     return string.charAt(0).toUpperCase() + string.slice(1);
// //   }


// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
  
  
//   const input = "cybrom technology bhopal";
//   const output = capitalizeFirstLetter(input);
//   console.log(output);



//   Q20. Write a JavaScript program to check the given number is positive or not.  


// function postive(c){
//     let c=prompt("enter the number ");
//     if(c<0){
//         console.log("number is negative");

//     }
//     else
//     console.log("number is postive");
// }




// Q21. Write a JavaScript program to find maximum of given three number.



// let x=prompt("forst number");
// let y=prompt("secondnumber");
// let z=prompt("third number");

// if(x>y&&x>z){
//     // console.log(x+" "+"is greater");
// document.getElementById("demo").innerHTML=`${x} is grreater`

// }
// else if(y>x&&y>z){
//     // console.log(y+" "+ " is greater");
// document.getElementById("demo").innerHTML=`${y} is grreater`

// }
// else
// // console.log(z+" "+" is greater");
// document.getElementById("demo").innerHTML=`${z} is grreater`


// . Create a JavaScript function that returns the Fibonacci sequence up to a given number.

// function Fibonacci(n){
//     if(n==1) return 0;
//     if(n==2) return 1;
//     return Fibonacci(n-1)+Fibonacci(n-2);
// }
// const n=prompt("enter the term");
// const fb=[];
// for(let i=1;i<n;i++){
//     fb.push(Fibonacci(i));
// }
// console.log(fb);


// Q22. Write a JavaScript function to split a string and convert it into an array of words.


// let str="nikesh yadav is best boy";
// let y= str.split(' ');
// console.log(y);

// function split(){
//     let str=document.getElementById("str").value;
//     let y=str.split(' ');
//     document.getElementById("demo").innerHTML=y;
//     console.log(y);
// }


// Q23. Write a JavaScript program to print 1 to 20 even number using while loop


// let i=2;
// while(i<=20){
//     if(i%2==0){
//         console.log(i);
//     }
//     i+=2;

// }


    // for(let i=2;i<=20;i++){
    //     if(i%2==0){
    //         console.log(i);
    //     }
    // }


    // Q24. Write a Java script code to find factorial of a given number.

    // function fact(){
    //     let n=document.getElementById("n").value;
    //     // if(n==0){
    //     // return 1;
    //     // }
    //     let t= n*fact(n-1); 
    // }

    // console.log(t);



//     const myImg = document.getElementById("myImg");
// const myButton = document.getElementById("myButton");
// const myButton1=document.getElementById("myButton1");

// myButton.addEventListener("click", function() {
//   myImg.src = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg";
// });

// myButton1.addEventListener('click' ,function(){
//     myImg.src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715472000&semt=sph";
// })


// const btn=document.getElementById("one");
// const img=document.getElementById("img");
// const btn2=document.getElementById("two");

// btn2.addEventListener('click',function(){
//     img.src="https://pixlr.com/images/index/ai-image-generator-one.webp";
// });

// btn.addEventListener('click',function(){
//     img.src="https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH";
// });

   

// let day;
// let date = new Data();
// switch(date.getDay())
// {
//     case 0:{
//         day="sunday";
//         break;
//     }
//     case 1:{
//         day="monday";
//         break;
//     }
//     case 2:{
//         day="tuesday";
//         break;
//     }
//     case 3:{
//         day="wensday";
//         break;
//     }
//     case 4:{
//         day="thurshday";
//         break;
//     }
//     case 5:{
//         day="friday";
//         break;
//     }
//     case 6:{
//         day="saturday";
//         break;
//     }
// }


// let hour=date.getHour();
// let dim;
// if(hour>12){
//     hour-=12;
//     dim="pm";
// }
// else if(hour==12) dim="pm";
// else dim="am";

// document.getElementById("demo").innerHTML=`today date is ${day} current ttime is ${hour} :${dim}`;






// let number =prompt("enter the number");

// if(number<0){
//     console.log("error becuse the ${number} is less the 0");
// }
// else if(number===0){
//     console.log("the factorail of ${number} is 1");
// }
// else{
// let fact=1;
// for(i=1;i<=number;i++){
//     fact*=i;
// }
// console.log(`the factorail of  ${number} is ${fact}`)
// }





// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38



let days=["monday","tuesday","wensday","thurday","friday","saturday"];
let today=new Date();
let day=today.getDay();

console.log(`month is: ${today.getMonth()}`);
console.log(`today days is: ${days[day]}`);
console.log(`time is :${today.getHours()}:${today.getMinutes()}:${today.getUTCSeconds()}`)


