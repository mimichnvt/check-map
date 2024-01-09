var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var lentgh = document.getElementById('lentgh');


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
}