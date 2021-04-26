//model
var navn = "Johnny";
var password = "123";
var navn2 = "Therese";
var password2 = "hehe";
// afterLogin var
var points = 0
var pointsPerClick = 1;
var coronaClick = 0;
//View
updateNow()
function updateNow()
{
    document.getElementById("app").innerHTML=`
        <div>
            <h2>Logg inn med brukernavn og passord </h2>
            
            <br>
            <input 
            id="usr" class="form-controll" 
            placeholder="Brukernavn">
            
        </div>
            <div> 
            <input 
            id="psw" class="form-controll" placeholder="Passord"> 
            </div>
        <div> 
            <button onClick="btnlogin()"
            class="btn btn-lg btn-success btn-block" 
            type="submit">Logg inn</button>
            </div>
            <br>
    
    `;
}
    // afterLogin
    function afterLogin() 
{        var gjestClick = coronaClick == 0 ? '&#128169' : '	&#128100';
        document.getElementById("app").innerHTML = `
        
        <h1 id="overSkrift"> CoronaCounter &#128169  </h1>
            <div id="klatten" onClick="doClick()">${gjestClick}</div>
            <div id="pointsInfo">${points}</div>
            <button onclick="størreMengde(5)"> legg på +1x telling </button>
    `;
   
}





//Oppgaven skal inneholde: 

//Skal være i Mvc (model, view, controller)
//Minst 1 Eventhandler (onclick etc.)
//Minst 1 If-setning  (med && eller || , eller begge)
//Minst en funksjon som returnerer en verdi
//Minst en funksjon som bruker parameter 
//(ps. de to siste KAN være samme funksjon)
//Minst 3 unit tester til sammen av funksjonene du bruker (ikke test mot view)