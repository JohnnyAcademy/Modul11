var player = 1 ;
var vunnet = 0 ;
function petter(per) 
{
   if (vunnet==0)
    {
        if(per.innerHTML=="X" || per.innerHTML=="O")
        {
            document.getElementById("WIN").innerHTML="Ruten er tatt, prøv igjen";
            return;
        }
        if(player==1)
        {
            per.innerHTML="X";
            player=2;
        }
        else{
            per.innerHTML="O";
            player=1;
        }
    }
    
    //Player2
    if(document.getElementById('r11').innerHTML=='O')
    {
        if(document.getElementById('r12').innerHTML=='O')
        {
            if(document.getElementById('r13').innerHTML=='O')
            {
                document.getElementById("WIN").innerHTML="Player2 har vunnet!";
                vunnet=1;
            }
        }
        if(document.getElementById('r21').innerHTML=='O')
        {
            if(document.getElementById('r31').innerHTML=='O')
            {
                document.getElementById("WIN").innerHTML="Player2 har vunnet!";
                vunnet=1;
            }
        }
        if(document.getElementById('r22').innerHTML=="O")
        {
            if(document.getElementById('r33').innerHTML=="O")
            {
                document.getElementById("WIN").innerHTML="Player2 har vunnet!";
                vunnet=1;
            }
        } 
    }
    if(document.getElementById('r12').innerHTML=="O")
    {
        if(document.getElementById('r22').innerHTML=="O")
        {
            if(document.getElementById('r32').innerHTML=="O")
            {
                document.getElementById("WIN").innerHTML="Player2 har vunnet!";
                vunnet=1;
            }
        }
    }
    if(document.getElementById('r13').innerHTML=="O")
    {
        if(document.getElementById('r23').innerHTML=="O")
        {
            if(document.getElementById('r33').innerHTML=="O")
            {
                document.getElementById("WIN").innerHTML="Player2 har vunnet!";
                vunnet=1;
            }
        }
    }
    if(document.getElementById('r21').innerHTML=="O")
    {
        if(document.getElementById('r22').innerHTML=="O")
        {
            if(document.getElementById('r23').innerHTML=="O")
            {
                document.getElementById("WIN").innerHTML="Player2 har vunnet!";
                vunnet=1;
            }
        }
    }
    if(document.getElementById('r31').innerHTML=="O")
    {
        if(document.getElementById('r32').innerHTML=="O")
        {
            if(document.getElementById('r33').innerHTML=="O")
            {
                document.getElementById("WIN").innerHTML="Player2 har vunnet!";
                vunnet=1;
            }
        }
        if(document.getElementById('r22').innerHTML=="O")
        {
            if(document.getElementById('r13').innerHTML=="O")
            {
                document.getElementById("WIN").innerHTML="Player2 har vunnet!";
                vunnet=1;
            }
        }
    }
    //Player1
    if(document.getElementById('r11').innerHTML=='X')
    {
        if(document.getElementById('r12').innerHTML=='X')
        {
            if(document.getElementById('r13').innerHTML=='X')
            {
                document.getElementById("WIN").innerHTML="Player1 har vunnet!";
                vunnet=1;
            }
        }
        if(document.getElementById('r21').innerHTML=='X')
        {
            if(document.getElementById('r31').innerHTML=='X')
            {
                document.getElementById("WIN").innerHTML="Player1 har vunnet!";
                vunnet=1;
            }
        }
        if(document.getElementById('r22').innerHTML=="X")
        {
            if(document.getElementById('r33').innerHTML=="X")
            {
                document.getElementById("WIN").innerHTML="Player1 har vunnet!";
                vunnet=1;
            }
        } 
    }
    if(document.getElementById('r12').innerHTML=="X")
    {
        if(document.getElementById('r22').innerHTML=="X")
        {
            if(document.getElementById('r32').innerHTML=="X")
            {
                document.getElementById("WIN").innerHTML="Player1 har vunnet!";
                vunnet=1;
            }   
        }
    }
    if(document.getElementById('r13').innerHTML=="X")
    {
        if(document.getElementById('r23').innerHTML=="X")
        {
            if(document.getElementById('r33').innerHTML=="X")
            {
                document.getElementById("WIN").innerHTML="Player1 har vunnet!";
                vunnet=1;
            }
        }
    }
    if(document.getElementById('r21').innerHTML=="X")
    {
        if(document.getElementById('r22').innerHTML=="X")
        {
            if(document.getElementById('r23').innerHTML=="X")
            {
                document.getElementById("WIN").innerHTML="Player1 har vunnet!";
                vunnet=1;
            }
        }
    }
    if(document.getElementById('r31').innerHTML=="X")
    {
        if(document.getElementById('r32').innerHTML=="X")
        {
            if(document.getElementById('r33').innerHTML=="X")
            {
                document.getElementById("WIN").innerHTML="Player1 har vunnet!";
                vunnet=1;
            }
        }
        if(document.getElementById('r22').innerHTML=="X")
        {
            if(document.getElementById('r13').innerHTML=="X")
            {
                document.getElementById("WIN").innerHTML="Player1 har vunnet!";
                vunnet=1;
            }
        }
    }
}

