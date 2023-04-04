/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in Javascript sono :
Dato Stringa : Singolo Carattere o sequenza / esempio: var name : 'Paolo'
Dato Numerico: Numero / esempio: var numero : 3
Dato Booleno: ammette solo due valori: True o False
Le tipizazioni dei data types possono essere le seguenti:
Tipizazione Statica : Il dato non può essere cambiato
Tipizazione Forte: Bisogna sempre specificare il di tipo di dato
Tipizazione Debole: Non è obbligatorio specificare il tipo di dato
Tipizazione Dinamica : Il dato pùò essere cambiato */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var name = 'Gabriel'
console.log(name)
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
 var numero1 = 12
  var numero2 = 20
  console.log(12+20)
  document.getElementById('addizione').innerHTML = numero1 + numero2

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = 'Toncelli'
console.log(name)
//const name = 'Gabriel'
// console.log(name) // non si può modificare

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var numero3 = 4
console.log(x-4)
document.getElementById('sottrazione').innerHTML = x - numero3

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = 'john'
var name2 = 'John'

if(name1!= name2 ){
  document.getElementById('true').innerHTML= 'I nomi sono diversi'
} else {
  document.getElementById('true').innerHTML='I nomi sono uguali'
}
console.log(name1!=name2)

if(name1!= name2.toLowerCase() ){
  document.getElementById('false').innerHTML= 'I nomi sono diversi'
} else {
  document.getElementById('false').innerHTML='I nomi sono uguali'
}
console.log(name1!=name2)

