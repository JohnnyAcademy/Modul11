//model
var navn = "Johnny";
var password = "abc123";
var navn2 = "Marius";
var password2 = "hehe";
var usr = "vilde";
var psw = "vilde123";
var demo1 = "Therese";
//View
updateNow();
function updateNow()
{
    document.getElementById("app").innerHTML=`
        <div>
            <h2>Logg inn med brukernavn og passord </h2>
            
            <br>
            <input onchange="usr = this.value" 
            id="usr" class="form-controll" 
            placeholder="Brukernavn">
            
        </div>
            <div> 
            <input onchange="psw = this.value" 
            id="psw" 
            class="form-controll" 
            placeholder="Passord"> 
           
             </div>
        <div> 
            <button onClick="btnlogin()"
            class="btn btn-lg btn-success btn-block" 
            type="submit" name="Roal">Logg inn</button>
            </div>
            <br>
        <div>
            <button id="Somalia2"
            onClick="myFunction(demo1)"> Return verdi Knappen</button>
        </div>
    `;
}
    
function afterLogin() 
{
    document.getElementById("app").innerHTML = `
    
    <p onClick="myFunction2()" id="demo"> Hei </p>
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