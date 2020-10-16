// Créez une fonction nommée calcDistance qui prend les coordonnées de deux points différents A et B dans un espace 2D. 
// Cette fonction doit renvoyer la distance entre ces deux points.

// Exemples de résultats:

// Point A = [1, 1], point B = [2, 2] => 1,41
// Point A = [1, 1], point B = [3, 1] => 2
// Point A = [4, 1], point B = [1, 1] => 3
// Point A = [-2, 2], point B = [2, -2] => 5,65
// Crée un programme pour utiliser cette fonction.

// Ecrire une documentation pour la fonction calcDistance.

// Remarque: vous devrez probablement effectuer une recherche sur Google pour apprendre la formule mathématique pour ce faire. 
// Vous devrez probablement également rechercher des fonctions utiles en JavaScript 
// pour vous aider à créer des formules mathématiques complexes ...

const distance  = ( x0 ,  y0 ,  x1 ,  y1 )  =>  Math . hypot ( x1  -  x0 ,  y1  -  y0 );


// soit A = [x0, y0];
// soit B = [x1, y2];

function  calcDistance (A, B)  {
	 return distance (x0, y0, x1, y1);
}

console.log(distance(- 2, 2, 2, - 2));






