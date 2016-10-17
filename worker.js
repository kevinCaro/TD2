
self.importScripts("CompteurJetons.js");
var compteur = new CompteurJetons();

self.addEventListener('message', function(e) {
	port.onmessage = function(){
		var workerResult = 'Result: ' + (compteur.getJeton() * compteur.getProcess();
	    	port.postMessage(workerResult);
	}
  
}, false);
