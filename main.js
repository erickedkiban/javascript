require('./tao.js');

//variables
//declare var, let and constant
var Name = "Erick";
var Name = "Mean"; //pwedeng ideclare ng ilang beses
const pangalan = "Bok"; //ndi pwedeng ideclare ng paulit ulit dapat laging my value kahit empty
console.log(Name);
//data types
//String, Numbers, Boolean, null, undefined
const firstName = "Erick";
const age = 31;
const isAdmin = true;
const val = null;
const udf = undefined;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isAdmin);
console.log(typeof val);
console.log(typeof udf);

//concatenate
//double backticks template string
let String = `My name is ${firstName} 
and my age is ${age}`;
console.log(String);

//length of string
console.log(firstName.length);

//lowercase and upper case

console.log(firstName.toLocaleLowerCase(firstName));
console.log(firstName.toUpperCase(firstName));

//Array
//to declare need an open and close braket
//pwedeng ibaibang data type

const fruits = ["manga", "banana", "apple", "grapes"];
fruits.push("santol"); //add on current array
fruits.unshift("santol"); //sa unahan maadd
fruits.pop(); //delete the last value

console.log(fruits);
console.log(fruits[2]);
console.log(Array.isArray(fruits)); //will use on if statement
console.log(fruits.indexOf("manga"));
console.log(fruits.splice(0, 1)); // 0 san magsisimula ano ang tatangalin


//Object literals
//kalimitan nakikita na to sa mga API (application programmer interface)

//data strature sya na may mga key value pairs
//so this is the example
//1. pag gagawa kau ng object start with curcle braces
//2. key is firstname and erick value
//3.So sa object pwede rin maglagay ng arrays
//4.Object sa loob ng object

const tao = {
  firstName: "Erick",
  lastName: "Edquiban",
  age: 32,
  favorites: ["green", "basketball", "tipsy coding PH"],
  familyMember: {
    wife: "Mean",
    pet: "Tipsy",
    mother: "Analyn De Guzman",
  },
};
//kalimitan sa API is nka object format or JSON
//Javascript object notation
console.log(tao);
console.log(tao.firstName, tao.lastName); // access data inside the object
console.log(tao.favorites); //array sa loob ng object
console.log(tao.familyMember.pet); //object sa loob ng object

//pano naman ung object sa loob ng array
const contacts = [
  {
    id: 1,
    fullname: "Erick Edquiban",
    isSaved: "Phone",
  },
  {
    id: 2,
    fullname: "Tipsy D",
    isSaved: "Cloud",
  },
  {
    id: 3,
    fullname: "Mean Edquiban",
    isSaved: "Memory Card",
  },
];
//tephical list of data na galing sa API's
console.log(contacts[0].fullname);

//LESSON 2 LOOPING

// array of object loops
//while loop
let i = 0;
while (i < 10) {
  console.log(`while loop ang value ${i}`);
  i++;
}
//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//loop of arrays of object

for (let i = 0; i < contacts.length; i++) {
  console.log(contacts[i].fullname);
}
//best practice
for (let contact of contacts) {
  console.log(contact.id);
}

//mi practice
let contactID = [];
for (let contact of contacts) {
  contactID.push(contact.id);
  console.log("modern", contact.id);
}

//dot map MI practice


const contactMap = contacts.map(function (contactFullname) {
  return contactFullname.fullname;
});
console.log("map", contactMap);

//Filter

const ContactsPhone = contacts.filter(function (contact) {
  return contact.isSaved == "Phone";
}).map(function(contact){  //pwede dugtungan ung mga function
    return contact.fullname
});

console.log("filter", ContactsPhone);

//forEach pero di na recommended kasi medyo madumi

contacts.forEach(function (contact) {
  console.log("forEach", contact.fullname);
});

//contacts to json
//isuspply lang natin ung contacts na array


const ContactJson = JSON.stringify(contacts)

console.log('json',ContactJson)
console.log('hoy',JSONData)




