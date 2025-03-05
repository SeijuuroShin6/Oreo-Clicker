// Variables de stockages, qui sont utilisés dans mes fonctions
const bodyBackground = document.getElementById("body-background");


const oreoCounting = document.getElementById("oreo-count");
const oreoLogo = document.getElementById("oreo-logo");
const oreoNumber = document.getElementById("oreo-number");
const oreoCounter = document.getElementById("oreo-counter");


const firstButton = document.getElementById("first-upgrade");
const secondButton = document.getElementById("second-upgrade");
const thirdButton = document.getElementById("third-upgrade");

const oreoCountingButton = document.querySelector(".oreo-counting-button");

const oreoContainer = document.querySelector(".oreo-per-clicks-container")
const oreoContent = document.querySelector("#oreos-content");

const increaseContainer = document.querySelector(".increase-oreos-container");



// Variables de stockages, qui sont traités dans mes fonctions
let numberOfOreo = 0;
let oreoPerClick = 1;
let goldOreo = false;
let goldBackground = false;
let confettiAnimation = false;



// Fonction Ajout d'Oréo en cliquant sur l'Oréo 
function addOreo() {
    numberOfOreo += oreoPerClick;
    oreoCounting.innerHTML = numberOfOreo;
}





/* Fonction Ajout d'Oréo en cliquant sur l'Oréo en suivant les instructions : 

Le nombre d’Oréo par clic passe à 25 en échange de 25 Oréos
Le nombre d’Oréo par clic passe à 100 en échange de 500 Oréos
Le nombre d’Oréo par clic passe à 250 en échange de 1000 Oréos

*/
function addMoreOreo() {
    if (numberOfOreo >= 1000 && oreoPerClick < 250) {
        oreoPerClick = 250;
        numberOfOreo -= 1000;
        oreoNumber.innerHTML = oreoPerClick;
        oreoCounting.innerHTML = numberOfOreo;
        oreoCounter.innerHTML = 250;
    } 
    else if (numberOfOreo >= 500 && oreoPerClick < 100) {
        oreoPerClick = 100;
        numberOfOreo -= 500;
        oreoNumber.innerHTML = oreoPerClick;
        oreoCounting.innerHTML = numberOfOreo;
        oreoCounter.innerHTML = 100;
    } 
    else if (numberOfOreo >= 25 && oreoPerClick < 25) {
        oreoPerClick = 25;
        numberOfOreo -= 25;
        oreoNumber.innerHTML = oreoPerClick;
        oreoCounting.innerHTML = numberOfOreo;
        oreoCounter.innerHTML = 25;
    }
}


/* Fonction de Bouton qui suivent les instruction selon le nombre d'Oréo : 
  1. Débloquer l’Oréo d’or
  2. Débloquer le fond d’écran en or
  3. Ajouter des confettis lors du clic (voir la partie 2 - algorithmie & gameplay)

*/

// Fonction qui affiche l'Oréo en Or et ajoute d'autres modifications visuel, après avoir validé certaines conditions
function firstUpgrade() {
    if (!goldOreo && numberOfOreo >= 1000) {
        goldOreo = true;
        numberOfOreo -= 1000;
        oreoCounting.innerHTML = numberOfOreo;
        oreoLogo.src = "assets/images/esd-oreo-golden.png";
        firstButton.innerHTML = "ACHETÉ";
        firstButton.style.background = '#0066b2';
        firstButton.style.boxShadow = "none";
        checkAllUpgrades();
    }
};

// Fonction qui affiche le golden background et d'autres modifications visuel, après avoir validé certaines conditions
function secondUpgrade() {
    if (!goldBackground && numberOfOreo >= 2500) {
        goldBackground = true;
        numberOfOreo -= 2500;
        oreoCounting.innerHTML = numberOfOreo;
        bodyBackground.style.backgroundImage = "url('assets/images/esd-golden-background.jpg')";
        secondButton.innerHTML = "ACHETÉ";
        secondButton.style.background = '#0066b2';
        secondButton.style.boxShadow = "none";
        oreoContainer.style.background = '#FFFFFF';
        oreoContainer.style.borderColor = '#FFA500';
        oreoNumber.style.color = '#FFA500';
        oreoContent.style.color = '#FFA500';
        checkAllUpgrades();
    }
};


// Fonction qui affiche un confetti en utilisant la library Party.JS après avoir remplis toutes les conditions
function thirdUpgrade() {
    if (!confettiAnimation && numberOfOreo >= 5000) {
        confettiAnimation = true;
        numberOfOreo -= 5000;
        oreoCounting.innerHTML = numberOfOreo;
        thirdButton.innerHTML = "ACHETÉ";
        thirdButton.style.background = '#0066b2';
        thirdButton.style.boxShadow = "none";
        oreoContainer.style.background = '#FFFFFF';
        oreoContainer.style.borderColor = '#FFA500';
        oreoNumber.style.color = '#FFA500';
        oreoContent.style.color = '#FFA500';
        party.confetti(oreoLogo, {
            count: 50,
            size: 2,
            spread: 30,
        });
        checkAllUpgrades();
    }
}


// Function qui rend invisible le bouton "augmenter les oréos" après avoir débloquer toutes les améliorations
function checkAllUpgrades() {
    if (goldOreo && goldBackground && confettiAnimation) {
        increaseContainer.style.display = "none";
    }
}