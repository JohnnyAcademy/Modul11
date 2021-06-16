function goToBruker() {
    model.app.currentPage = 'bruker';
    updateView2();
}

function leggTilValuta() {
    if (model.inputs.Kode == '') return;


    model.valuta.push({
        valutaNavn: "Vietnamesiske dong",
        Kode: model.inputs.Kode,
        Pris: 0.0363,
        KursDato: 2021,

    })
    uptadeView();
}

function endreValutaKodeNavn() {
    model.valuta[0].valutaNavn = 'Svensk';
    model.valuta[0].Kode = 'Svensk';


}
