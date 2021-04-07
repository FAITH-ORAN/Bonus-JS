alert('bienvenue dans le jeu de devinette\n vous devez deviner un nombre entre 1 et 100\n vous avez le droit à 5 essais \n*****bonne chance*****');
var choice = 90; //Math.floor(Math.random() * 100) + 1; si je veux laisser l'ordinateur faire son choix
//console.log(choice);
var once = 0;
for (var numberChoice = 1; numberChoice < 6; numberChoice++) {
    once= Number(prompt("Entrez un nombre entre 1 et 100"));
    alert ("Essai numéro : " + numberChoice + "." + " Vous avez entré le nombre " + once);
    if(isNaN(once)) {
        alert("veuillez entrer un nombre entre 1 et 100 svp");
    }else if((once < 1)||(once > 100)){
        alert("ce nombre n'est pas autorisé");
    }else if(once < choice){
        alert("le nombre à trouver est PLUS GRAND!!");
    }else if (once > choice){
        alert('le nombre à trouver est PLUS PETIT!!');
    }else if (once === choice){
        alert('SUPER!!!!! vous avez trouver le bon nombre ' + choice);
        break;
    }
}
if (once !== choice) {
	alert("Dommage, tu n'as pas trouvé la réponse dans les 5 essais impartis. La réponse était " + choice);
}