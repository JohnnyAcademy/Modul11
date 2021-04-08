//model
var infotekst="Ikke deg";
var vinner="You wish";
var player1="";
var player2="";
var spiller=1;
var computer=false;
var valgboks

oppdaterMeg();
//view
function oppdaterMeg()
{
    document.getElementById("app").innerHTML =`
    <h1>Stein - Saks & Papir Bror &#128561 &#128561 </h1>   
    <div id="hoved">
        <div id="left"> 
            <div class="Spiller" onclick="p1Choose(this)"><img src="images/rock.png" alt="stein"></div>
            <div class="Spiller" onclick="p1Choose(this)"><img src="images/saks.jpg" alt="saks"></div>
            <div class="Spiller" onclick="p1Choose(this)"><img src="images/papir.jpg" alt="papir"></div>
        </div>
        <div id="right">
        <div class="Spiller" onclick="p2Choose(this)"><img src="images/rock.png" alt="stein"></div>
        <div class="Spiller" onclick="p2Choose(this)"><img src="images/saks.jpg" alt="saks"></div>
        <div class="Spiller" onclick="p2Choose(this)"><img src="images/papir.jpg" alt="papir"></div>
        </div>
    
        <div id="middle">
            <div id="infotekst"><p>${infotekst}</p></div><br>
            <div id="vinner"><p>${vinner}</p></div>
            <div id="spiller1">${player1}</div>
            <div id="spiller2">${player2}</div>
        </div>
    </div>
    `;
}
//control
function p1Choose(mittvalg)
{
    player1=mittvalg.innerHTML;
    oppdaterMeg();
}
function p2Choose(mittvalg)
{
    player2=mittvalg.innerHTML;
    oppdaterMeg();
}
