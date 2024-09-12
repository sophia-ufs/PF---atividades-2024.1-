/*
Dada uma lista com 5 elementos, [100, 80, 60, 120, 90], devolva a soma de todos os elementos, 
só que usando Map no resultado
Todas as funções de alta ordem vistas em sala de aula estão liberadas para uso
*/

const lista = [100, 80, 60, 120, 90]
const somar = (acc, x) => acc + x
const lista2 = lista.map((x) => lista.reduce(somar,0))
console.log (lista2[0])
