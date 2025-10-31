//================== Cau 1 ===================

function fxCau1(x) {
    const ketQuacau1 = 3 * x + 4
    return ketQuacau1;
}

console.log("Ket qua cau 1: ", fxCau1(5));


//================== Cau 2 ===================

function cau2(width, height) {
    return chuVi = (width + height) * 2;
}
console.log("ket qua cau 2: ", cau2(10, 15))

//================== Cau 3 ===================

function cau3(r) {
    return ketQuaCau3 = r * (3.14 * 3.14)
}

const KQCau3 = cau3(5)

console.log("Ket qua cau 3: ", (KQCau3).toFixed(2));

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

console.log("Ket qua cau 4: ", ktSonguyento(6))

//================== Cau 5 ===================

function tinhTOng(...rest) {
    let sum = 0;
    for (i = 0; i < rest.length; i++) {
        sum = sum + rest[i];
    }
    return sum;
}
console.log("Ket qua cau 5: ", tinhTOng(1, 2))

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

console.log("Ket qua cau 6: ",startEnd(3, 1))

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

kiemTraChuoiDoiXung('madam')