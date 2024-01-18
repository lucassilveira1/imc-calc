const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const button = document.getElementById("calc");
const paragraph = document.getElementById("imc");

button.addEventListener("click", (e) => {
  e.preventDefault();

  function calcularIMC(valor1, altura1) {
    const pesoValor = parseFloat(valor1.value);
    const alturaValor = parseFloat(altura1.value);

    if (
      isNaN(pesoValor) ||
      isNaN(alturaValor) ||
      pesoValor <= 0 ||
      alturaValor <= 0
    ) {
      paragraph.innerHTML = "Por favor, insira um valor válido.";
      paragraph.classList.add("error-message");
    }

    const imc = pesoValor / (alturaValor * alturaValor);

    return imc;
  }

  const resultadoIMC = calcularIMC(peso, altura);

  let category;

  if (resultadoIMC < 17) {
    category = "Muito abaixo do peso";
    paragraph.innerHTML = `Seu IMC é: ${resultadoIMC.toFixed(2)} 
            e você está na categoria: ${category}.`;
    paragraph.classList.add("success-message");
  } else if (resultadoIMC < 18.4) {
    category = "Abaixo do peso";
    paragraph.innerHTML = `Seu IMC é: ${resultadoIMC.toFixed(2)} 
            e você está na categoria: ${category}.`;
    paragraph.classList.add("success-message");
  } else if (resultadoIMC < 24.9) {
    category = "Peso normal";
    paragraph.innerHTML = `Seu IMC é: ${resultadoIMC.toFixed(2)} 
            e você está na categoria: ${category}.`;
    paragraph.classList.add("success-message");
  } else if (resultadoIMC < 29.9) {
    category = "Acima do peso";
    paragraph.innerHTML = `Seu IMC é: ${resultadoIMC.toFixed(2)} 
            e você está na categoria: ${category}.`;
    paragraph.classList.add("success-message");
  } else if (resultadoIMC < 34.9) {
    category = "Obesidade Grau I";
    paragraph.innerHTML = `Seu IMC é: ${resultadoIMC.toFixed(2)} 
            e você está na categoria: ${category}.`;
    paragraph.classList.add("success-message");
  } else if (resultadoIMC < 40) {
    category = "Obesidade Grau II";
    paragraph.innerHTML = `Seu IMC é: ${resultadoIMC.toFixed(2)} 
            e você está na categoria: ${category}.`;
    paragraph.classList.add("success-message");
  } else if (resultadoIMC >= 40) {
    category = "Obesidade Grau III";
    paragraph.innerHTML = `Seu IMC é: ${resultadoIMC.toFixed(2)} 
            e você está na categoria: ${category}.`;
    paragraph.classList.add("success-message");
  }
});
