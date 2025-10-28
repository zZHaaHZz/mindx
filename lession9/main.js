 //=======================Cau 1 =====================
//  student = { name: "John", age: 20 }

//  student.major = "Computer Science"

//  console.log(student)

//=======================Cau 2=====================

// person = { name: "Alice", age: 25, job: "Designer" }

// delete person.job

// console.log(person)

//=======================Cau 3=====================

// car = { brand: "Toyota", model: "Camry", year: 2020 }

// const coutKeyobj = Object.keys(car).length

// console.log(coutKeyobj)

//=======================Cau 4=====================

// product = { name: "Laptop", price: 1000 }
// const converstToArr = Object.entries(product)
// console.log(converstToarr)

//=======================Cau 5=====================

// const products = [{ name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 }]

// const search = "Camera"
// let result = null;

// for(i =0; i<=products.length; i++){
//     if(products[i].name === search){
//         result = products[i];
//         break
//     }
// }
// console.log(result);

//=======================Cau 6=====================
// products = [ { name: "Phone", price: 50 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]

// let priceBigger100 = [];

// for(i = 0; i<products.length; i++){
//     if(products[i].price >= 100){
//         priceBigger100.push(products[i])
//     }
// }

// console.log(priceBigger100)

//=======================Cau 7=====================
// person = { name: "Bob", age: 25, job: "Developer" }

// person.age = 30

// console.log(person)

//=======================Cau 8=====================

// obj1 = { a: 1, b: 2 }

// obj2 = { c: 3, d: 4 }

// for (let num in obj2){
//     obj1[num] = obj2[num]
//     delete obj2.num
// }

// console.log(obj1)

//=======================Cau 9=====================
// animal = { type: "Dog", name: "Buddy", age: 3 }

// for(key in animal){
//     console.log(`"${key}: ${animal[key]}"`)
// }

//=======================Cau 10=====================

car = { brand: "BMW", model: "X5"}

for(key in car){
     result = key == "color" ? true : false;
}
console.log(result)