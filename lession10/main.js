//================== Cau 1 ===================

function fxCau1(x) {
    const ketQuacau1 = 3 * x + 4
    return ketQuacau1;
}

// console.log("Ket qua cau 1: ", fxCau1(5));


//================== Cau 2 ===================

function cau2(width, height) {
    return chuVi = (width + height) * 2;
}
// console.log("ket qua cau 2: ", cau2(10, 15))

//================== Cau 3 ===================

function cau3(r) {
    return ketQuaCau3 = r * (3.14 * 3.14)
}

const KQCau3 = cau3(5)

// console.log("Ket qua cau 3: ", (KQCau3).toFixed(2));

//================== Cau 4 ===================

function ktSonguyento(n) {
    if (n < 2) {
        return false;
    }
    for (i = 2; i <= Math.sqrt(n).toFixed(0); i++) {
        if ((n % i) == 0) {
            return false
        }
    }
    return true
}

// console.log("Ket qua cau 4: ", ktSonguyento(6))

//================== Cau 5 ===================

function tinhTOng(...rest) {
    let sum = 0;
    for (i = 0; i < rest.length; i++) {
        sum = sum + rest[i];
    }
    return sum;
}
// console.log("Ket qua cau 5: ", tinhTOng(1, 2))

//================== Cau 6 ===================

function startEnd(start, end) {
    let sumCau6 = 0;

    if (end < start) {
        for(i = end; i <= start; i++) {
            sumCau6 = sumCau6 + i;
        }
    }
    for (i = start; i <= end; i++) {
        sumCau6 = sumCau6 + i;
    }
    return sumCau6;
}

// console.log("Ket qua cau 6: ",startEnd(3, 1))

//================== Cau 7 ===================

const kiemTraChuoiDoiXung = (str) => {
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length /2; i++) {
        const left = str[i];
        const right = str[lastIndex - i]
        if(left!==right)
        {
            console.log("Day khong phai chuoi doi xung!")
            return;
        }
    }
    console.log("Day la chuoi doi xung!")
}

// kiemTraChuoiDoiXung('madam')

//================== Cau 8===================

function kiemTraSoChan (...arrChan){
    result = true;
    for(i = 0; i<arrChan.length; i++){
        if(arrChan[i] % 2 != 0 ){
            result = false;
            break;
        }
    }
    return result;
}

// console.log("Kiem tra arr co phai toan so chan k: ", kiemTraSoChan(2,4,8))

//================== Cau 9===================

function tinhTongSoDuong (...arrDuong){
    result9 = 0
    for(i = 0; i<arrDuong.length; i++){
        if(arrDuong[i] >=0){
            result9 = result9 + arrDuong[i];
        }
    }
    return result9;
}
// console.log("Tong cac so duong: ", tinhTongSoDuong(3,-1,4,-2,5))

//================== Cau 10===================
function timSLN (...arrSLN){
    sln = 0;
    for(i = 0; i < arrSLN.length; i++){
        if(arrSLN[i] > sln){
            sln = arrSLN[i]
        }
    }

    return sln
}

// console.log(timSLN(1, 3, 7, 0, -2))


//================== Cau 11===================

function sapXep (...arr11){
    
    for(i = 0; i< arr11.length; i++){
        for(j = 0; j < arr11.length; j++){
            if(arr11[j] > arr11[j+1]){
                let temp = arr11[j];
                arr11[j] = arr11[j+1];
                arr11[j+1] = temp;
            }
        }
    }
    return arr11
}

// console.log(sapXep(12, 33, 45, 7, 89))

//================== Cau 12===================

function bai12(k, arr12) {
    if (k >= arr12.length){
        k = arr12.length - 1;
    } 
    sln = arr12[0]
    for(i = 0; i <= k; i++){
        if(arr12[i] > sln){
            sln = arr12[i]
        }
    }
    return sln;
}
// console.log(bai12(3, [2,5,2,7,9,10]))

//================== Cau 13===================

function timSotrunglonnhat(arr){
    let arrtrung = [];

    for(i = 0; i< arr.length; i++){
        for(j= i+1; j<arr.length; j++){
            if(arr[i] === arr[j] && !arrtrung.includes(arr[i])){
                arrtrung.push(arr[i]);
            }
        }
    }
    soLonNhat = 0
    for(i = 0; i<arrtrung.length; i++){
        if(arrtrung[i] > soLonNhat){
            soLonNhat = arrtrung[i]
        }
    }
    return soLonNhat;
}

// console.log(timSotrunglonnhat([3,7,2,3,2,9,3,5,6,1,1,2,7]))

//================== Cau 14===================

function tachChuoi (arr){
    arrTach = arr.split(" ")

    return arrTach
}

// console.log(tachChuoi("This is a test"))

function  tinhTong15(obj) {
    let tong = 0
    for ( let key in obj){
        if(typeof obj[key] === "number"){
            tong += obj[key]
        }
    }
    return tong
}
const data = { a: 1, b: 'hello', c: 3, d: 'world' };
console.log(tinhTong15(data))