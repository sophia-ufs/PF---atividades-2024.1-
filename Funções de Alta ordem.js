const lista = [100, 80, 60, 120, 90]
const somar = (acc, x) => acc + x
const lista2 = lista.map((x) => lista.reduce(somar,0))
console.log (lista2[0])
