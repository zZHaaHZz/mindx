// =================== Cau 1 ==================

// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// console.log(names[0]);

// =================== Cau 2 ==================

// const names = ["John", "Jane", "Jim", "Jake"];

// names[1] = "Mary"

// console.log(names)

// =================== Cau 3 ==================

// const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

// for(i = 0; i<names.length; i++){
//     console.log(`Vi tri ${i} = ${names[i]}`);
// }

// =================== Cau 4 ==================

// const names = ["Alice", "Bob", "Charlie", "David"];

// names[names.length] = "Mindx"

// console.log(names)

// =================== Cau 5 ==================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const soLe = [];

// for(i = 0; i<numbers.length; i++){
//     if((numbers[i] % 2) != 0){
//         soLe[soLe.length] = numbers[i]
//     }
// }
// console.log(soLe)

// =================== Cau 6 ==================

// const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

// const nameSearch = "David"

// for(i=0;i<=names.length; i++){
//     if(names[i] == nameSearch){
//         console.log(`${names[i]} nam o vi tri ${i} trong mang`)
//     }
// }

// =================== Cau 7 ==================

// const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];

// const targetCounting = 2;

// let result = 0;

// for(i=0; i<= numbers.length; i++){
//     if(numbers[i] == 2){
//         result = result + 1
//     }
// }
// console.log(result)

// =================== Cau 8 ==================

// const numbers = [5, 2, 9, 3, 7, 11, 8];

// let soLonnhat = 0;

// for(i=0; i<= numbers.length; i++){
//     if(numbers[i] > soLonnhat){
//         soLonnhat = numbers[i];
//     }
// }
// console.log(soLonnhat);

// =================== Cau 9 ==================

// const array = [1, 2, 3, 4, 5];

// let arrRever = []

// for(i = array.length-1; i >= 0; i--){
//     arrRever[arrRever.length] = array[i]
// }

// console.log(arrRever)

// =================== Cau 10 ==================

// const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];

// let result = []
// for (i = 0; i<duplicatesArray.length; i++){
//     let exists = false;
//     for(j = 0; j<result.length; j++){
//         if (duplicatesArray[i] === result[j]){
//             exists = true;
//             break;
//         }
//     }
//     if(!exists){
//         result.push(duplicatesArray[i])
//     }
// }
// console.log(result)

// =================== Cau 10 ==================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = 0;
// for (index = 0; index<numbers.length; index++){
//     result += numbers[index]
// }
// console.log(result)