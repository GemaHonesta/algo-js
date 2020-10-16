// En réutilisant la fonction rand10 () créée dans l'exercice 2, écrivez une fonction nommée multiRand (n) 
// qui renvoie un tableau de n nombres entre 1 et 10. Vous ne devez rien modifier dans rand10 () pour y parvenir.

// Ecrire une documentation pour la fonction multiRand (n).

// Utilisez cette fonction pour créer un programme qui demandera le nombre de nombres aléatoires à générer 
// puis affiche ce même nombre de nombres aléatoires.
  
const  readlineSync=require("readline-sync") ;

function rand10(){
	return parseInt (Math.random()*10)+ 1 ;
}

let arr = [];
let howmany = parseInt (readlineSync.question ('combien de nombres aléatoires voulez-vous?'));

function multiRand10 (n){
	pour (soit x = 0; x <= (n - 1) ; x++) {
		arr.pousser (rand10() );
	}
	return arr;
}

console.log (`vous avez ${howmany} nombres aléatoires dans votre tableau: ${multiRand10(howmany) }`);



