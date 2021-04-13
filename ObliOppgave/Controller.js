//controller
function btnlogin()
{  
    if (usr.value === navn && psw.value === password){
    
      afterLogin(); 
    
    }
    else if (usr.value === navn2 && psw.value === password2){
        afterLogin();
    }
        else  alert("Feil Passord");

}

// controller for afteLogin
function doClick() {
  points += pointsPerClick;
  coronaClick = 1 - coronaClick;
  afterLogin();
}

function størreMengde() {
  if (points < 0) return;
  points = 0;
  pointsPerClick++;
  afterLogin();


}
