  //Scrivi un programma che stampi i numeri da 1 a 100,
 //- per i multipli di 3 stampi "Fizz" al posto del numero
 //- per i multipli di 5 stampi "Buzz" al posto del numero
 //- per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero

 //Prima di partire a scrivere codice poniamoci qualche domanda:
 //Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare
 //che possiamo usare?

 //Consigli del giorno:
 //1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 //2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo 
 //faremmo "a mano"
      
 // # DATI
 const numberMin = 1;
 const numberMax = 100; 
 const Fizz = 3;                                                      //multiplo di 3
 const Buzz = 5;                                                      //multiplo di 5
 const FizzBuzz = 15;                                                 //multiplo di 3 * 5
 let  outputText = ""                           


 //# SVOLGIMENTO
for (let i = 1; i <=100; i++) {                                       //numero da 1 a 100
    console.log(i);                                                   //stampa il numero
  if (i % Fizz ===0)
     console.log ("Fizz:", Fizz);                                     //stampa "Fizz" se multiplo di 3  
     outputText += "Fizz";                         
  if (i % Buzz===0 ) 
     console.log ("Buzz:", Buzz)                                         //stampa "Buzz" se multiplo di 5
     outputText += "Buzz";                              
  if (i % Fizz===0  && i % Buzz===0 ) 
     console.log("FizzBuzz:" , FizzBuzz);                                         //stampa "FizzBuzz" se multiplo di 3 e 5
     outputText += "FizzBuzz"                                              
}