const checkbox = document.querySelector(".checkbox");
const textfields = document.querySelectorAll(".textfield");
//query selector eturnerar ett enda element (HTMLElement), inte en array/lista.
//Eftersom det bara finns en checkbox som ska kopplas till en enskild addEventListener("change", ...)
//vill viarbeta direkt mot själva elementet och inte plocka ut index [0] ur en lista.

const button = document.getElementById("tabort");
const myDiv = document.getElementById("myDiv");
//document. är HTML-dokumentet (DOM-trädet) i webbläsaren.
//getElementById(...) Söker i HTML-dokumentet efter det första element som har exakt det angivna id-värdet.
//const button = document.getElementById("tabort");: Hittar knappen <button type="button" id="tabort">Ta bort</button> i din HTML och lagrar referensen i button.
/*  const myDiv = document.getElementById("myDiv");: Hittar <div id="myDiv">...</div> i HTML och lagrar referensen i myDiv,
    så att man kan ändra dess innerHTML, style.backgroundColor eller ta bort det med myDiv.remove(). */

//text input funktion
function TextInput(e) {
  console.log(e.target);

  const fieldId = e.target.id;

  if (fieldId === "content") {
    myDiv.innerHTML = e.target.value;
  }
}
//function TextInput(e): Skapar en funktion med namnet TextInput som tar emot parametern e (eventobjektet som webbläsaren skickar med när en händelse inträffar).
//console.log(e.target);: Skriver ut själva HTML-elementet (<input>) som orsakade händelsen i webbläsarens konsol, så du kan se vilket fält som just användes.
//const fieldId = e.target.id;: Läser av id-attributet på det triggade elementet (till exempel "color" eller "content") och sparar texten i variabeln fieldId.
//if (fieldId === "content") { ... }: Kontrollerar om händelsen kom från just textfältet med id="content" (och inte t.ex. från "color").
//myDiv.innerHTML = e.target.value;: Om villkoret stämmer tas det som just nu står i textfältet (e.target.value) och skrivs in som innehåll i myDiv (<div id="myDiv">).

//Eventlyssnare till checkboxen
checkbox.addEventListener("change", function () {
  const colorInput = document.getElementById("color");
  myDiv.style.backgroundColor = colorInput.value;
});

/*  checkbox.addEventListener("change", function () { ... }): Lyssnar på eventet "change" på
    checkbox-elementet (<input type="checkbox" id="divStyle" class="checkbox">) och kör en anonym funktion varje gång checkboxens läge ändras. */
//const colorInput = document.getElementById("color");: Hämtar textfältet med id="color" och sparar det i colorInput.
/* myDiv.style.backgroundColor = colorInput.value;:
    Läser av texten som just nu står i colorInput (.value) och sätter den som bakgrundsfärg (style.backgroundColor) på myDiv (<div id="myDiv">). */

//Eventlyssnare till textfälten
for (const field of textfields) {
  field.addEventListener("input", TextInput);
}
/*for (const field of textfields): En for...of-loop som hämtar ut ett element i taget ur samlingen textfields (document.querySelectorAll(".textfield")) 
    och kallar det elementet för field under just det varvet i loopen. */
//field.addEventListener("input", TextInput);: Kopplar en eventlyssnare till just det textfältet (field) som lyssnar på eventet "input"
/* Varför TextInput står utan parenteser (): Vi skickar med själva funktionen som referens så att webbläsaren anropar TextInput(e) senare, 
    när eventet "input" inträffar – inte direkt när loopen körs vid sidladdning. */

//Eventlyssnare till knappen
button.addEventListener("click", function () {
  myDiv.remove();
});

/* button.addEventListener("click", function () { ... }): Lyssnar efter händelsen "click" på din knapp (<button type="button" id="tabort">Ta bort</button>) 
 och kör en anonym funktion varje gång knappen klickas. */
// myDiv.remove();: Tar bort hela <div id="myDiv"> (inklusive dess text, stil och barn-element) från DOM-trädet i webbläsaren.
