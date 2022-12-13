// Δημιουργία μεταβλητών για χρήση στο DOM
let inputA = document.getElementById("a");
let result = document.querySelector(".calcResults");

// Θέτω την τιμή σε null ώστε να καθαριζεί το πεδιό εισαγωγής με κάθε ανανέωση της σελίδας
inputA.value = "";

// Δημιουργία μεταβλητών για τις μαθηματικές πράξεις
let finalResult;

// Δημιουργία συνάρτησης υπολογισμού Εμβαδού
function calcFinalResult(a) {
    finalResult = Math.PI * (a * a);
    return finalResult;
}

// Η συνάρτηση που θα καλεί ο browser όταν γίνεται click στο κουμπί "Υπολογισμός"
// Ελέγχει έαν οι τιμές είναι αριθμοί ή 0 και τότε είτε ειδοποιεί τον χρήστη για πιθανά λάθη είτε προχωράει στον υπολογισμό
function onCalc(a) {
    
    inputA.classList.remove("inputfieldRed");

        if (isNaN(a) == true) {
        result.innerHTML = `Παρακαλώ εισάγετε αριθμό στο πεδίο Α`;
        inputA.classList.add("inputfieldRed");
 }  else if (a == 0) {
        result.innerHTML = `Το πεδίο A δεν μπορεί να είναι 0`;
        inputA.classList.add("inputfieldRed");
 }  else 
        calcFinalResult(Number(a))
        result.innerHTML = `Το εμβαδόν είναι: ${parseFloat(finalResult.toFixed(2))}μ`;
}
