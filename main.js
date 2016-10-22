$(function() {

    // evenement appliqué au click de la souris sur le bouton d'ID countButton
	$("#countButton").click(function(){
        //on démarre le worker et l'execution du programme
		startWorker();
	});
    // evenement appliqué au click de la souris sur le bouton d'ID cancelButton
	$("#cancelButton").click(function(){
		stopWorker();
	});

});

var w;
//fonction pour démarrer le worker et l'execution du programme
function startWorker() {
    
    if(typeof(Worker) !== "undefined") {

        if(typeof(w) == "undefined") {
            //on initialise le worker
            w = new Worker("worker.js");
        }
        // on envoie un message au worker.js avec le contenu du champ texte
        w.postMessage(['start',$('#comment').val()]); 
       
       //on reçoit le message du worker et on change les élements HTML correspondant
        w.onmessage = function(event){
			 $('#result').html(event.data[0]);
			 $('#progressBar').attr('style','width:'+event.data[1]+'%');
			 $('#progressBar').text(event.data[1]+'%'); 
        };
       
    } 
}
// fonction pour stopper l'execution du programme
function stopWorker() { 
    w.terminate();
    $('#result').html("Annulé");
    w = undefined;
}