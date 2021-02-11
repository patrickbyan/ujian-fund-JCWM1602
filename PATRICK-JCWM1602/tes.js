let result = 0
let hasil = 0
let angkaI
let angkaJ
let angka = 10
arrShow = [0, 1, 2]
arrLength = arrShow.length

angkaI = arrShow[arrLength-1]
angkaJ = arrShow[arrLength-2]

do{
    hasil = angkaI + angkaJ
    result += hasil// 2 + 1
    arrShow.push(result)

}while(result < angka) // while 3 <= 10

console.log(result)  