{
  const calculateResult = (amount, currency) => {
    const currencyDolar = 4.2855;
    const currencyEuro = 4.6785;
    const currencyFrank = 4.6989;
    const currencyFunt = 5.3462;
    const currencyKorona = 0.1996;
    const currencyYuan = 5.7885;

    switch (currency) {
      case "dolar":
        return amount / currencyDolar;

      case "euro":
        return amount / currencyEuro;

      case "frank":
        return amount / currencyFrank;

      case "funt":
        return amount / currencyFunt;

      case "korona":
        return amount / currencyKorona;

      case "yuan":
        return amount / currencyYuan;
    }
  };

  const updateResultText = (result) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = result.toFixed(2);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");

    const result = calculateResult(+amountElement.value, currencyElement.value);

    updateResultText(result);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit)
  };

  init();

}