import * as readline from "readline-sync";

let jumlah = parseInt(readline.question("Masukkan jumlah bilangan: "));

let i: number = 1;
let genap = 0;
let ganjil = 0;

while (i <= jumlah) {
    let bilangan = parseInt(readline.question(`Masukkan bilangan ke-${i}: `));

    if (bilangan % 2 === 0) {
        genap++;
    } else {
        ganjil++;
    }

    i++;
}

console.log(`Jumlah bilangan genap: ${genap}`);
console.log(`Jumlah bilangan ganjil: ${ganjil}`);