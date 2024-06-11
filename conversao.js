const exchangeRates = {
    'BRL': { 'USD': 0.19, 'EUR': 0.16, 'GBP': 0.14, 'JPY': 20.49 },
    'USD': { 'BRL': 5.25, 'EUR': 0.84, 'GBP': 0.72, 'JPY': 108.95 },
    'EUR': { 'BRL': 6.33, 'USD': 1.18, 'GBP': 0.86, 'JPY': 129.81 },
    'GBP': { 'BRL': 7.08, 'USD': 1.39, 'EUR': 1.16, 'JPY': 151.32 },
    'JPY': { 'BRL': 0.05, 'USD': 0.0092, 'EUR': 0.0077, 'GBP': 0.0066 }
};

// Função para calcular a conversao de moedas
function convertCurrency() {
    const mont = parseFloat(document.getElementById('mont').value);
    const conversao = document.getElementById('conversao').value;
    const ocorrencia = document.getElementById('ocorrencia').value;

    if (isNaN(mont) || mont <= 0) {
        document.getElementById('result').innerHTML = 'Por favor, insira um valor válido.';
        return;
    }

    if (!exchangeRates[conversao] || !exchangeRates[conversao][ocorrencia]) {
        document.getElementById('result').innerHTML = 'Cotação não encontrada para as moedas selecionadas.';
        return;
    }

    const rate = exchangeRates[conversao][ocorrencia];
    const convertedmont = mont * rate;

    document.getElementById('result').innerHTML = `Valor convertido: ${convertedmont.toFixed(2)} ${ocorrencia}`;
}