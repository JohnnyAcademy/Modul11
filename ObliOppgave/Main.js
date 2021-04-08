//model
var name = "Johnny";
var password = "abc123";



//View
updateNow();
function updateNow()
{
    document.getElementById("app").innerHTML=`
        <div>
            <h2>Logg inn med brukernavn og passord </h2>
            
            <br>
            <input class="form-controll" placeholder="Brukernavn"
            
        </div>
            <div> 
            <input class="form-controll" placeholder="Passord"  
            </div>
        <div> 
            <button class="btn btn-lg btn-success btn-block" 
            type="submit" name="btnlogin">Logg inn</button>
    `;


}
    




//controller