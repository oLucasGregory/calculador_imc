document.getElementById('imc-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');
  
    if (!altura || !peso) {
      resultado.textContent = 'Por favor, preencha todos os campos corretamente.';
      return;
    }
  
    const imc = peso / (altura * altura);
    let classificacao = '';
  
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3';
    }
  
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
  });
  