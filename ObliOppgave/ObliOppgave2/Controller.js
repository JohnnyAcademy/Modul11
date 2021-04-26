//controller

function leggTilStolpe() {
    let a=numbersTotal.length;
    let b=numbers.length;
        if(b<a)
        {
            var addOn = numbers.indexOf(Number(currentNumber)) !== -1;
            if(addOn==false)
            {
                numbers.push(currentNumber);
                currentNumber--;
            }
            else{
                currentNumber--;
                leggTilStolpe();
            }
            show();
        }
}
function trykketPå(denne) {
    if(chosenBar==denne) 
    {
        chosenBar="ingen";
        visEllerIkke="disabled";
    }
    else{
        chosenBar=denne;
        visEllerIkke="";
    }
    show();

}

function endreValgt() {
    if(inputValue !== undefined && (inputValue >0 && inputValue <11))
    {
        var addOn = numbers.indexOf(Number(inputValue)) !== -1;
        if(addOn===false)
        {
            const index = numbers.indexOf(chosenBar);
            numbers[index] = Number(inputValue);
            numbers;


        }
        else
    {
        visTekst=" aksdfasdf"
    }
    }
    else
    {
        visTekst="asdgags"
    }

    show();
}



// Når man trykker på "Fjerne valgt stolpe", 
// skal den valgte stolpen fjernes. Alle stolper som var til høyre for denne, 
// flyttes da ett hakk til venstre. Det vil si at om numbers er [1, 2, 3, 4, 5] -
//  og så fjerner stolpen i midten, så skal numbers etter det være  [1, 2, 4, 5].

function fjerneStolpe() {
    const index = numbers.indexOf(chosenBar);
    if (index >-1) {
        numbers.splice(index, 1);
    }
    visTekst="Fjernet et tall fra listen";
    chosenBar="ingen";
    visEllerIkke="disabled";
    show();
}