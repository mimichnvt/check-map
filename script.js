var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');


// lorsque l'utilisateur cliquesur le champ du mdp, afficher la boite de message
myInput.onfocus = function (){
    document.getElementById("message").style.display="block"
}


// lorsque l'utilisateur clique en dehors du champ du mdp, masquer la boite de message
myInput.onblur = function (){
    document.getElementById("message").style.display="none"
}

// lorsque l'utilisateur commence a taper quelque chose dans le champ mdp

myInput.onkeyup = function (){
    //valider les lettres minuscules
    var lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
        //si mdp contient lettre minuscule, enlever class invalid et ajouter class valid
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        //si non, enlever class valid et ajouter class invalid
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

    //valider les lettres majuscules
    var upperCaseLetters = /[A-Z]/g
    if(myInput.value.match(upperCaseLetters)){
        //si mdp contient lettre majuscules, enlever class invalid et ajouter class valid
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else{
        //si non, enlever class valid et ajouter class invalid
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }


    //valider les nombres
    var numbers = /[0-9]/g
    if(myInput.value.match(numbers)){
        //si mdp contient chiffre, enlever class invalid et ajouter class valid
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        //si non, enlever class valid et ajouter class invalid
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    //valider les 8 caractères minimum
    if(myInput.value.length >= 8){
        //si mdp contient 8 caractères minimum, enlever class invalid et ajouter class valid
        length.classList.remove('invalid');
        length.classList.add('valid');
    }else{
        //si non, enlever class valid et ajouter class invalid
        length.classList.remove('valid');
        length.classList.add('invalid');
    }
}

