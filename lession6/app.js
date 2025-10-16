console.log("================CAU 1=============")

let length =  10;
let width = 5;

let area  = length * width

perimeter  = (length + width) * 2

console.log(`Chu vi hinh chu nhat = ${area}`)
console.log(`Dien tich hinh chu nhat = ${perimeter}`)

/////////////////////////

console.log("================CAU 2=============")


let s = 12345;

let h = ( s - s % 3600) / 3600;
let p = (( s % 3600 ) - ( s % 3600 ) % 60) / 60;
let g = s - p * 60 - h * 3600;

console.log(`${h}h${p}m${g}s`)

console.log("================CAU 3=============")
// let coso = prompt("Nhap co so")

// let somu = prompt("Nhap so mu")

let coso = 2;
let somu = 3;

let luy_thua = 1;

for (let i = 0; i < somu; i++) {
    luy_thua = luy_thua * coso;
}
console.log(`${coso} mu ${somu} = ${luy_thua}`)
//////
console.log("================CAU 4=============")

let n1 = 6;
let n2 = 9;
let n3 = 7;

let tbc = (n1 + n2 + n3) / 3

console.log(`Trung binh cong: ${tbc}`)
////
console.log("================CAU 5=============")

let x1 = 5
let x2 = 2
let y1 = 8
let y2 = 4  


let result = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1, 2));

console.log("Khoang cach: "+result)
///
console.log("================CAU 6=============")

let s1 = 8;
let s2 = 6;
let s3 = 9;

if (s1 > s2 && s1 > s3){
    console.log(`${s1} la so lon nhat`)
}
else if(s2>s1 && s2>s3){
    console.log(`${s2} la so lon nhat`)
}   
else if(s3>s1 && s3>s2){
    console.log(`${s3} la so lon nhat`)
}
else{
    console.log(`Ba so ${s1}, ${s2}, ${s3} bang nhau`)
}

console.log("================CAU 7=============")

let str1 = '6'
let str2 = 5
let rsStr = (str1 === str2) ? true : false

// console.log(`${str1} = ${str2}`, rsStr)



if (str1 === str2){
    let rsStr = true
    console.log(`${str1} = ${str2} : ${rsStr}`)
}else{
    console.log(`${str1} = ${str2} : ${rsStr}`)
}


console.log("================CAU 8=============")

let cau8 = 5;

let rsCau8 = (cau8 > 0) ? true : false;

console.log(`${cau8} ${rsCau8}`);

console.log("================CAU 9=============")


let year = 2024;

let resultYear = ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) ? true : false;

console.log(`${year} ${resultYear}`);

console.log("================CAU 10=============")

let h1  = 1;
let h2 = 7;
let m1 = 40;
let m2 = 20;
let isLater = (h1 > h2) ? true : (h1 === h2) ? (m1 > m2 ? true : false) : false;

// Hiển thị kết quả
console.log(`${h1}h${m1}m lon hon ${h2}h${m2}m`, isLater);