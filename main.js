//pobieramy elementy
const form = document.querySelector("form");
const countTasks = document.querySelector("h1 span");
const list = document.querySelector("ul");
const listElements = document.querySelectorAll("li");

function addTask(event) {
    event.preventDefault();  //zapobiega odswiezaniu strony
    const title = this.elements["taskName"].value; //pobieramy nazwe zadania
    this.elements["taskName"].value = ""; //zerujemy input formularza
    console.log(title)
}

//klikniecie na przycisk wysyla formularz
form.addEventListener("submit", addTask);
