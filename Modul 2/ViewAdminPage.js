function updateViewAdminPage() {
    document.getElementById('app').innerHTML = `
    <h1>Velkommen til Admin siden</h1>
    <button onclick="goToBruker()">Til bruker siden</button>
    <button onclick="remove()">SlettAlleValuta</button>
    <hr/>
    Valuta-kode: <br/>
    <input type="text" oninput="model.inputs.Kode=this.value" value="${model.inputs.Kode}"/>
    <button onclick="leggTilValuta()">Legg til</button>
    
    <button onclick="endreValutaKodeNavn()">Endre Sek til Svensk </button>
    `;
}