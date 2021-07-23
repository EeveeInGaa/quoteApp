let arr = [];

const getQuoteButton = document.querySelector("#get-quote-button");
const baseUrl = "https://quote-garden.herokuapp.com/api/v3/quotes/random"

getQuote();
getQuoteButton.addEventListener("click", getQuote);

function getQuote() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(function (data) {
          arr.push(data);
          console.log(data.data[0]);
          document.getElementById("quote-text").innerHTML = JSON.stringify(data.data[0].quoteText);
          document.getElementById("quote-author").innerHTML = JSON.stringify(data.data[0].quoteAuthor);
      });
}