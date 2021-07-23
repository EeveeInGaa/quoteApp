let arr = [];

const getQuoteButton = document.querySelector("#get-quote-button");
const baseUrl = "https://quote-garden.herokuapp.com/api/v3/quotes/random"

getQuoteButton.addEventListener("click", getQuote);

class TextQuote {
    constructor(text, author) {
        this.qText = text;
        this.qAuthor = author;
    }
}

function getQuote() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => {
          arr.push(data);
          console.log(data);
          let newTextQuote = new TextQuote(
            arr.data[0].quoteText,
            arr.data[0].quoteAuthor
          )
      });
  createQuote();
}

function createQuote(quote) {
    const createBlockquote = document.createElement("blockquote");
    createBlockquote.innerText = quote.qText;
    createBlockquote.innerText = quote.qAuthor;
}