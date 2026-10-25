import * as readline from "readline-sync";

let maksimal: number = parseInt(readline.question("Masukkan batas nilai maksimum: "));

let total: number = 0;
let output: string = "";

for (let i = 1; i <= maksimal; i++) {
    if (i % 2 === 1) {
        total += i;
        output += i === 1 ? `${i}` : ` + ${i}`;
    } else {
        total -= i;
        output += ` - ${i}`;
    }
}

console.log(`Hasil: ${output} = ${total}`); 