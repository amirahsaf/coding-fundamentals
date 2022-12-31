const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const button = document.querySelector("button");

const endPoint = 'https://api.quotable.io/random';

async function getQuote() {
    const response = await fetch(endPoint);
    const data = await response.json();
    //console.log(data);

    return data;
}

window.addEventListener("load", async () => {
    const data = await getQuote();
    quotes.textContent = data.content;
    author.textContent =`- ${data.author}`;
})

button.addEventListener("click", async () => {
    const data = await getQuote();
    quotes.textContent = data.content;
    author.textContent = `- ${data.author}`;
})
