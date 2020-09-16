$(document).ready(function() {

  // Esercizio 1: Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  var studente = {
    "nome" : "Davide",
    "cognome" : "Cesare",
    "eta" : 27
  }

   //1.2 Stampare a schermo (console.log) attraverso il for in tutte le proprietà.
   for (var k in studente) {
     console.log(k + " => " + studente[k]);
   }


  // Esercizio 2: Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
  var source = $("#first_part").html();
  var template = Handlebars.compile(source);

  var studenti = [
    {
      "nome" : "Pinco",
      "cognome" : "Pallino",
      "eta" : 30
    },
    {
      "nome" : "Scooby",
      "cognome" : "Doo",
      "eta" : 20
    },
    {
      "nome" : "Mago",
      "cognome" : "Forest",
      "eta" : 25
    }
  ];

  // Esercizio 3: Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  var inputName = prompt("Inserisci il nome:");
  var inputSurname = prompt("Inserisci il cognome:");
  var inputAge = prompt("Inserisci l'età:");

  var totalInput = {
    "nome" : inputName,
    "cognome" : inputSurname,
    "eta" : inputAge
  }

  studenti.push(totalInput);

  for (var i = 0; i < studenti.length; i++) {
    var context = {
      "name" : studenti[i]["nome"],
      "surname" : studenti[i]["cognome"]
    }
    var visual = template(context);

    $("#dati_list").append(visual);
  }

});
