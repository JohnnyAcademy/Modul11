function goToAdmin(){
    model.app.currentPage = 'admin';
    updateView2();
    }

function convert(valutaKode) {
   
    for(var i = 0; i < model.valuta.length; i++){
        if (model.valuta[i].Kode==valutaKode){
          var valutaPris = parseFloat(model.valuta[i].Pris)
          model.kalkulertVerdi = parseFloat(model.inputs.Pris/valutaPris) 
         
         
        }
    }
    uptadeView()
}

function chosenValutaCode(selectedCode){

    model.inputs.valutaNavn = selectedCode


}
