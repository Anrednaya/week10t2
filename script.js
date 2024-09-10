const calculateTotalPrice = () => {
  let price = Number(document.getElementById("price").value);
  let quantity = Number(document.getElementById("quantity").value);
  let result = document.getElementById("result");
  if (isNaN(price*quantity) == false) {
    result.textContent = `Итоговая стоимость ${price*quantity} руб.`;
  }
  else {
    result.textContent = "Введены некорректные данные";
  }
  console.log(price*quantity);
};

document.getElementById("calculate").onclick = calculateTotalPrice;