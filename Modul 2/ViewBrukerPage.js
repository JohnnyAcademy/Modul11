function updateViewBrukerPage() {

    let html = "";
    
    function GetValutaKode(){
        model.valuta.forEach(element => {
            console.log(element.Kode);
            html += `<option>${element.Kode}</option>`
        });
        
    }

    html = `
    <h1>Velkommen til bruker siden</h1>   
    <input oninput="model.inputs.Pris = parseFloat(this.value); convert(model.inputs.valutaNavn == '' ? 'SEK':model.inputs.valutaNavn)" 
    type="number" placeholder="Antall i ønsket valuta"></input>
    <button onclick="goToAdmin()">Admin</button>
    <select onChange="chosenValutaCode(this.value)">`;
    GetValutaKode();
    html += `</select>`;


    
     

    // Input : 50NOK til USD; model.valuta.Pris * NOK
    // F.eks en div som viser resultatet.


    
    document.getElementById('app').innerHTML = html;
}
    function uptadeView(){
     var  html = ` <div> ${model.kalkulertVerdi} </div>`
     document.getElementById('app2').innerHTML = html;

    }
