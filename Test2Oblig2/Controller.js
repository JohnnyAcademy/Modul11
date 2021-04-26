

// // function clickedOn(barNo) 
// // {
// //     chosenBar = barNo === chosenBar ? "Ingen": barNo;
    
// //     show();


// // }

function clickedOn(barNo)
{
    if(chosenBar==barNo)
    {
        chosenBar="Ingen"
        showOrNot="disabled";
    }
    else{
        chosenBar=barNo;
        showOrNot="";
    }
    show();
}

function Endre() {
    if(inputValue >0 && inputValue < 11)
    {
        numbers[chosenBar -1] = inputValue;
        showText="Changed";
        
    }
    else
        {
            showText="Mellom 1-10";

        }
        show();

}


function Fjerne() {
   (numbers.splice(chosenBar - 1, 1))
   
   showOrNot="disabled";
   chosenBar = "Ingen"
   show();
  
}



// function Fjerne()
// {
   // const index = numbers.indexOf(chosenBar);
   // if (index >-1) {
   //     numbers.splice(index, 1);
   // }
   // chosenBar="ingen";
   // showOrNot="disabled";

  //  show();
//}