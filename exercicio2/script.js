const arrayNumeros = [33, 1, 11, 19, 354]
const arrayStrings = ["teclado", "mouse", "monitor", "headset"]
const arrayMista = [false, 52, "presunto", 5, true, "true"]

// console.log(arrayNumeros.length)
// console.log(arrayStrings.length)
// console.log(arrayMista.length)

console.log(`O primeiro array tem ${arrayNumeros.length} itens
O segundo array tem ${arrayStrings.length} itens
O terceiro array tem ${arrayMista.length} itens`)

console.log(`O primeiro item do primeiro array eh o ${arrayNumeros[0]}
O segundo item do segundo array eh o ${arrayStrings[1]}
O terceiro item do terceiro array eh o ${arrayMista[2]}`)

console.log(`O primeiro array contem o numero 11? - ${arrayNumeros.includes(11)}
O terceiro array contem a palavra "array" - ${arrayMista.includes("array")}`)