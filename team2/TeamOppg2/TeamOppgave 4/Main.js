var divApp = document.getElementById('app');
// model
var spillerHelse=100;
var bossHelse=200;
var spillerSkadeMin=5;
var spillerSkadeMax=10;
var bossSkadeMin=10;
var bossSkadeMax=15;
var vinner="";
var knapp;
var spyro = ["Bilder/spyro.png", "Bilder/spyrosmash.jpg"];
var indexknapp = 0;


// view
lekePlass();
function lekePlass() {
    html= `

    <button ${knapp} onclick="IBeenClicked()"> ATTACK </button><br><br>
    
    <div id="hero" >
        <img src="${spyro[indexknapp]}">
        <div class="healthBar"> &#128153;${spillerHelse}</div>
    </div>
        <div id="vinner">${vinner}</div>
    <div id="boss">
        <img id="bossen" src="Bilder/bowser.jpg"> 
        <div class="healthBar">&#128154;${bossHelse}</div>
    </div>

    
    `;

divApp.innerHTML = html;

}

//controller
function IBeenClicked()
{   indexknapp == 0 ? indexknapp++: indexknapp--;/* lekePlass(); */        
    
    /*     if (indexknapp == 0) {
        indexknapp ++;
         lekePlass();
        
    }
    else {
        //indexknapp == 1;
        indexknapp --; 
        lekePlass();
    } */
    
    
    /*
    regn ut helsen til boss og bytt verdi på bosshelse

    få boss til og angripe
    boss skal ha mulighet til og bomme (random sjanse)
    har boss truffet? hvis ja regn ut helse til spiller og bytt verdi på spillerhelse

    har spiller og boss helse igjen? Hvis ja vent på trykk igjen
    hvis ikke har noen vunnet

    */
    var skade= Math.floor(Math.random()*(spillerSkadeMax-spillerSkadeMin+1))+spillerSkadeMin;
    let critkjangse = Math.floor(Math.random()*2)+1;
    if(critkjangse==2)bossHelse-=skade;
    bossHelse-=skade;
    
    if(bossHelse <= 0)
    {
        vinner="Boss defeated!";

    }
    skade= Math.floor(Math.random()*(bossSkadeMax-bossSkadeMin+1))+bossSkadeMin;
    var sjanse=Math.floor(Math.random()*2)+1;
    if(sjanse==1)spillerHelse-=skade;
    if(spillerHelse <= 0) 
   
    {
        vinner="You've been defeated!"; 
    }
    if(spillerHelse <= 0)
    {
        spillerHelse=0;
        knapp="disabled";
    }
    if(bossHelse <= 0)
    {
        bossHelse=0;
        knapp="disabled";
    }
    console.log("---------------------------------");
    lekePlass();
}



/* En enkel slosskamp mot en computer motstander!
Oppgaven skal løses ved bruk av MVC oppsettet:)
- Begge skal ha Healthpoints, som skal minske når de angripes - skal synes på skjermen
- Player mindre HP og angrepskraft enn NPC - vanskligere å vinne
- Player skal ha mulighet for crit/dobbel angrepskraft
- NPC skal kunne bomme på player og gjøre 0 skade

- Ikke være mulig å angripe etter 0 i HP (begge)
- Ikke være mulig å gå under 0 i HP
 & Vinnerbeskjed på skjermen!:D */