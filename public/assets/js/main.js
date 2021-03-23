
let valorEmDolarTxt = prompt("Qual valor em dólar vc quer converter?");

let valorEmDolarNum = parseFloat(valorEmDolarTxt);
let valorEmReal = valorEmDolarNum * 5.5;
let valorEmRealDec = valorEmReal.toFixed(2);

alert(valorEmRealDec);