const checkbox = document.querySelector(".checkbox");
const textfields = document.querySelectorAll(".textfield");
const button = document.getElementById("tabort");
const myDiv = document.getElementById("myDiv");

//Uppgift 5
//text input funktion
function TextInput(e) {
  console.log(e.target);

  const fieldId = e.target.id;

  if (fieldId === "content") {
    myDiv.innerHTML = e.target.value;
  }
}

//Funktionen definieras först, men körs inte förrän loopen for (const field of textfields) kopplar den som lyssnare till varje textfält med field.addEventListener("input", TextInput).
//När du skriver i #color körs TextInput(e) och loggar fältet i konsolen, men fieldId === "content" blir falskt så myDiv.innerHTML ändras inte.
//När du skriver i #content blir villkoret sant och texten inuti myDiv uppdateras direkt.

//Uppgift 6
//Eventlyssnare till checkboxen
checkbox.addEventListener("change", function () {
  const colorInput = document.getElementById("color");
  myDiv.style.backgroundColor = colorInput.value;
});

//Själva funktionen körs inte när sidan laddas, utan först när du ändrar checkboxen ("change")
//Om fältet är tomt eller innehåller ett ogiltigt färgnamn ignorerar webbläsaren den ogiltiga färgen eller rensar den beroende på tidigare värde.

//Eventlyssnare till textfälten
for (const field of textfields) {
  field.addEventListener("input", TextInput);
}

//Eftersom vi har två textfält med klassen textfield (#color och #content) körs loopen två varv och kopplar lyssnaren på båda.
//När man skriver i ett av fälten anropas TextInput(e), där e.target pekar på just det textfältet som användaren skirver i.

//Eventlyssnare till knappen
button.addEventListener("click", function () {
  myDiv.remove();
});

//Innan man klickar på knappen ligger myDiv kvar på sidan och kan ta emot färg och text.
//Så fort du klickar på knappen raderas myDiv från DOM:en
