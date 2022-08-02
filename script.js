const scontoMinori = 0.2;
const scontoOver65 = 0.4;
const prezzoPerKm = 0.21;
let prezzoInziale=0;

function calcoloPrezzoBiglietto(kilometri,eta){
    prezzoInziale= kilometri * prezzoPerKm
    if (eta > 65) {
        return prezzoInziale - (prezzoInziale * scontoOver65);
    } else if (eta < 18) {
        return prezzoInziale - (prezzoInziale * scontoMinori);
    } else {
        return prezzoInziale;
    }
}

console.log(calcoloPrezzoBiglietto(21,5))
console.log(calcoloPrezzoBiglietto(21,67))
console.log(calcoloPrezzoBiglietto(21,22))