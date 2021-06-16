function updateViewBrukerPage() {
    document.getElementById('app').innerHTML = `
        <h1>Velkommen til bruker siden</h1>   
        <input oninput="model.inputs.Pris = parseFloat(this.value); convert(model.inputs.valutaNavn == '' ? 'SEK':model.inputs.valutaNavn)" 
        type="number" placeholder="Antall i ønsket valuta"></input>
        <button onclick="goToAdmin()">Admin</button>
        <br>
        <select onChange="chosenValutaCode(this.value)">
            ${GetValutaKode()}
        </select>
        
    
                
        `;
    // Input : 50NOK til USD; model.valuta.Pris * NOK
    // F.eks en div som viser resultatet.
}

function uptadeView() {
    var html = ` <div> ${model.kalkulertVerdi} </div>`
    document.getElementById('app2').innerHTML = html;

}

function GetValutaKode() {
    let html = '';
    for (let index = 0; index < model.valuta.length; index++) {
        html += `<option value="${index}">${model.valuta[index].Kode}</option>`;
    };
    return html;
}


