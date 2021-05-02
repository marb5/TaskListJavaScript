//pobieramy elementy
const form = document.querySelector("form");
const countTasks = document.querySelector("h1 span");
const list = document.querySelector("ul");

function addTask(event) {
    event.preventDefault();  //zapobiega odswiezaniu strony
    const title = this.elements["taskName"].value; //pobieramy nazwe zadania
    if (title === '') {  //alert i wychodzenie z funkcji w przypadku nie podania nazwy zadania
        alert("Podaj nazwe zadania!");
        return;
    }
    this.elements["taskName"].value = ""; //zerujemy input formularza
    
    const task = document.createElement("li");
    task.classList.add("task");
    task.textContent = title;
    list.appendChild(task);
    countTasks.textContent = list.childElementCount;
}

//klikniecie na przycisk wysyla formularz
form.addEventListener("submit", addTask);
