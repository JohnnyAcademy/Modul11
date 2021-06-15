function updateViewAdminPage() {
    document.getElementById('app').innerHTML = `
    <h1>Velkommen til Admin siden</h1>
    <button onclick="goToBruker()">Til bruker siden</button>
    <button onclick="remove()">SlettAlleValuta</button>
    <p id="addValuta"></p>
    <button onclick="leggTilValuta()">leggTilValuta</button> 
    <button onclick="endreValuta()">endreValuta</button>
    `;
}