function updateView() {
    document.getElementById('app').innerHTML = `

    <input type="text" oninput="model.inputs.Penger=this.value" value="${model.inputs.Penger}"/>
    <br>
    TotalSum: <br>
            <button onclick="LeggTil()" > Johnny Legger Til</button>

            <button onclick="" > Johnny tar bort</button>
        <hr>
             <button onclick="LeggTil()" > Therese Legger til </button> 

            <button onclick="" > Therese tar bort </button> 
        <hr>
             <button onclick="LeggTil()" > Terje Legger til </button> 

            <button onclick= "" > Terje tar bort </button> 
        <hr>
        
    
    
    `;


}

function uptadeView() {
    var html = ` <div> ${model.kalkulertVerdi} </div>`
    document.getElementById('app').innerHTML = html;
}





