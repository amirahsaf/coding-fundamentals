const nameText = document.querySelector("#name");
const ageText = document.querySelector("#age");
const hobbiesList = document.querySelector("#hobbies");

const ENDPOINT = 'https://api.github.com/gists/2d5676e708f99fa7511b8a59f698b306';

async function getData() {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    console.log(data)

    return JSON.parse(data.files['text.json'].content);
}

function displayData ({ name, age, hobbies }) {
    nameText.textContent = name;
    ageText.textContent = age;
    hobbies.forEach((hobby) => {
        hobbiesList.innerHTML += `
        <li>${hobby}</li>
        `
    });
};

window.addEventListener("load", async () => {
    const data = await getData();
    displayData(data);
});