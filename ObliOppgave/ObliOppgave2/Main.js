var contentDiv = document.getElementById('content');


 // model
 var numbers = [7, 3, 1, 5, 8];
 var numberTotal = [1,2,3,4,5,6,7,8,9,10];
 let chosenBar="ingen";             // Variabel for hvilken stolpe som er valgt
 let inputValue;           // Variabel for hva som er skrevet i input-feltet
 let currentNumber = 10;
 let visTekst="";
 let visEllerIkke="disabled";   

// view
show();
function show() {
     let svgInnerHtml = '';
     for (let i = 0; i < numbers.length; i++) {
         svgInnerHtml += createBar(numbers[i], i + 1);
        }
         contentDiv.innerHTML = `
             <svg id="chart" width="500" viewBox="0 0 100 60 ">
                ${svgInnerHtml}
             </svg><br/>
             Valgt stolpe: <i>${chosenBar}</i>
             <br />
             Verdi:
             <input type="number" min="1" max="10" onchange="inputValue = this.value" />
             <button onclick="leggTilStolpe()">Legg til stolpe</button>
             <button onclick="endreValgt()"${visEllerIkke}>Endre valgt stolpe</button><br />
             <button onclick="fjerneStolpe()"${visEllerIkke}>Fjerne valgt stolpe</button>
             <p>${visTekst}</p>
             `;
}


function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect class="firkant" onclick="trykketPå(${number})" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}