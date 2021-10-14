export default function fetchBitcon(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
}
