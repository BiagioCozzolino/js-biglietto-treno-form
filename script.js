const scontoMinori = 0.2;
const scontoOver65 = 0.4;
const prezzoPerKm = 0.21;
let prezzoInziale=0;

function calcoloPrezzoBiglietto(kilometri,eta){
    prezzoInziale= kilometri * prezzoPerKm
    if (eta > 65) {
        return prezzoInziale - (prezzoInziale * scontoOver65) + "€";
    } else if (eta < 18) {
        return prezzoInziale - (prezzoInziale * scontoMinori) + "€";
    } else {
        return prezzoInziale + "€";
    }
}

const form = document.getElementById("form");
form.addEventListener("submit", addItem);

function addItem(event){
event.preventDefault();
    const kilometri = document.getElementById("kilometri").value;
    const eta = document.getElementById("eta").value;
    const prezzoBiglietto = calcoloPrezzoBiglietto(kilometri,eta)
    const div = document.getElementById("div");
    const h2 = document.createElement('h2');
    h2.innerHTML = "Hai selezionato la tratta per " + kilometri + " Kilometri, e la tua età è di " + eta + " e il prezzo finale è di : " + prezzoBiglietto
    div.appendChild(h2);
}