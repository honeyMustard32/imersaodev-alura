/**
 * Cotação do dólar por uma API do Banco Central
*/

let api = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='03-22-2021'&$format=json";

let request = new XMLHttpRequest();

request.open('GET', api, true);

request.onload = function() {
    let resposta = JSON.parse(request.responseText);
    let valores = resposta.value[0];
    if (request.readyState == 4 && request.status == 200) {

            console.log(valores.cotacaoCompra);
            console.log(valores.cotacaoVenda);
            console.log(valores.dataHoraCotacao);
            
        return valores.cotacaoVenda;
        }
};

request.onerror = function() {
    console.log("Erro:"+request);
};

request.send();