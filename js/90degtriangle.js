// Δημιουργία μεταβλητών για χρήση στο DOM
let inputA = document.getElementById("a");
let inputB = document.getElementById("b");
let result = document.querySelector(".calcResults");

// Θέτω την τιμή σε null ώστε να καθαριζεί το πεδιό εισαγωγής με κάθε ανανέωση της σελίδας
inputA.value = "";
inputB.value = "";

// Δημιουργία μεταβλητών για τις μαθηματικές πράξεις
let finalResult;

// Δημιουργία συνάρτησης υπολογισμού Εμβαδού
function calcFinalResult(a, b) {
    finalResult = (a * b) / 2;
    return finalResult;
}

// Η συνάρτηση που θα καλεί ο browser όταν γίνεται click στο κουμπί "Υπολογισμός"
// Ελέγχει έαν οι τιμές είναι αριθμοί ή 0 και τότε είτε ειδοποιεί τον χρήστη για πιθανά λάθη είτε προχωράει στον υπολογισμό
function onCalc(a, b) {

    inputA.classList.remove("inputfieldRed");
    inputB.classList.remove("inputfieldRed");

    if (isNaN(a) || isNaN(b)) {
        switch (isNaN(a) || isNaN(b)) {
        case (isNaN(a)):
            result.innerHTML = `Παρακαλώ εισάγετε αριθμό στο πεδίο Α`;
            inputA.classList.add("inputfieldRed");
            break;
        case (isNaN(b)):
            result.innerHTML = `Παρακαλώ εισάγετε αριθμό στο πεδίο B`;
            inputB.classList.add("inputfieldRed");
            break;
    }
 }  else if (a == 0 || b == 0) {
        switch (a == 0 || b == 0) {
        case (a == 0):
            result.innerHTML = `Το πεδίο A δεν μπορεί να είναι 0`;
            inputA.classList.add("inputfieldRed");
            break;
        case (b == 0):
            result.innerHTML = `Το πεδίο B δεν μπορεί να είναι 0`;
            inputB.classList.add("inputfieldRed");
            break;
        }
    }
    else {
        calcFinalResult(Number(a), Number(b))
        result.innerHTML = `Το εμβαδόν είναι: ${parseFloat(finalResult.toFixed(2))}μ`;
    }
}