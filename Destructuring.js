//Is Java script expressions that make it possible

//Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. 
//That is, we can extract data from arrays and objects and assign them to variables.

// destructuring unpacked value and storing the listing 

 
const array1=[1,2,3,4,5,6,7,8,9];

const[a,,b,c]=array1;
console.log(a,b,c);


//you can use the destructing in the spread parameter
const [a,b,c,...num]=array1;
console.log(a,b,c);
console.log(num);



//destructing use in the object


const person={
    name:'nikesh',
    id:102,
    city:'bhopal',
}


const {name,id,city}=person;
console.log(name);
console.log(id);
console.log(city);


const{name: nm, id: i, city: ci}=person;
console.log(nm);
console.log(i);
console.log(ci);





const arry=[12,45,78,65,35,78];
console.log(arry,typeof(arry));

const[a,b,c,]=arry;
console.log(a,b,c);



const[a,b,c,...num]=arry;
console.log(a,b,c);
console.log(num);

console.log(num,typeof(num));
arry.push(405);
arry.unshift(100);
arry.splice(2,0,"nikesh","yadav");


// console.log(arry);



//destructing in the object

const human={
    name: "nikesh",
    surname:"Yadav",
    age:23,

}

console.log(human);
console.log(human,typeof(human));

const{name,surname,age}=human;
console.log(name);
console.log(age);
console.log(surname);

const{name:nm, surname:su, age:ag}=human;
console.log(nm);
console.log(su);
console.log(ag);





