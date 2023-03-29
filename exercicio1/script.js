let coxinha = prompt("Quer uma coxinha? Responda 'S' para sim, e 'N' para não.")

let conta = 0

while(coxinha !== "N".toLowerCase()){
    conta = conta + 2.5
    coxinha = prompt("Quer mais uma cozinha? Responda 'S' para sim, e 'N' para não.")
}
console.log(conta)