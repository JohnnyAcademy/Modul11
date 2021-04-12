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

function myFunction(){
   return "Hello " + demo1;
     
}

