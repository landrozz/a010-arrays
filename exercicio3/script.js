const arrayNumeros = [33, 1, 17, 19, 354]
const arrayStrings = ["teclado", "mouse", "monitor", "headset"]
const arrayMista = [false, 52, "presunto", 5, true, "true"]

const arrayNumerosCopia = arrayNumeros.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMistaCopia = arrayMista.slice()

// Primeira Tarefa
arrayNumerosCopia.push(77)
console.log(arrayNumeros, arrayNumerosCopia)

// Segunda Tarefa
arrayStringsCopia.pop()
console.log(arrayStrings, arrayStringsCopia)

// Terceira Tarefa
arrayMista.splice(1,1)
console.log(arrayMista, arrayMistaCopia)