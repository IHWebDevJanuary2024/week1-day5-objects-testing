const user = {
    name: "Marcel",
    surname: "Bosch",
    isAdmin: false,
    hobbies: ["Music", "Dancing", "Gaming", "Earning a lot of money"]
};

const valueIwantToDisplay = "hobbies"

// We can use the square brackets to display the property stored in a variable
console.log(user[valueIwantToDisplay]);

// or using the string inside the square brackets
console.log(user["hobbies"]);

// or we can just use the dot
console.log(user.hobbies);

// ADD PROPERTIES

user.email = "marcel.fdsds@dsadsa.com";
user["bootcamp"] = "Barcelona Web dev"

console.log(user);


delete user.bootcamp;
console.log(user);

console.log("name" in user);

if("email" in user){
    console.log(`Nice! We are going to contact you to ${user.email}`);
}else{
    console.log(`Before we proceed please add an email`);
}

user.email = "marcel@hello.com";

console.log(user);

/*
THIS IS NOT POSSIBLE because we are trying to assign a new value to a const 
user = {
    name: "Fer"
} 
*/

// we can also check keys and values of the object with the keyword Object
console.log(Object.values(user))
console.log(Object.keys(user))

for (key in user){
    console.log(key);
}