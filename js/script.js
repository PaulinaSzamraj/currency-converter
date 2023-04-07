let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let currencyDolar = 4.2855;
let currencyEuro = 4.6785;
let currencyFrank = 4.6989;
let currencyFunt = 5.3462;
let currencyKorona = 0.1996;
let currencyYuan = 5.7885;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currency = currencyElement.value;
  let amount = amountElement.value;
  let result = resultElement.value;

  switch (currency) {
    case "dolar":
      result = amount / currencyDolar;
      break;
    case "euro":
      result = amount / currencyEuro;
      break;
    case "frank":
      result = amount / currencyFrank;
      break;
    case "funt":
      result = amount / currencyFunt;
      break;
    case "korona":
      result = amount / currencyKorona;
      break;
    case "yuan":
      result = amount / currencyYuan;
      break;
  }
  resultElement.innerText = result.toFixed(2);
});
