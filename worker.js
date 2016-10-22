//on importe le fichier CompteurJetons.js pour pouvoir utiliser les fonctions qui s'y trouvent
self.importScripts("CompteurJetons.js");
var compteur = new CompteurJetons();

self.addEventListener('message', function(e) {
	if(e.data[0] == 'start'){

		//on execute la fonction compterJetons()
		var words = compteur.compterJetons(e.data[1]);
		var nb = words.next().value;
		
		/**
		* on parcourt le resultat de la fonction compterJeton() et pour chaque itération on envoie un message
		* contenant le pourcentage de progression et le nombre de jetons actuel.
		* On envoie ce message pour que l'on puisse modifier le contenu des éléments HTML correspondant
		*/
		while(nb !== undefined){
			postMessage([compteur.getJetons(),nb]);
			nb = words.next().value;
		}
	}
  
}, false);
