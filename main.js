//pobieramy przyciski do usuwania zadan
const doneButtons = document.querySelectorAll("li .done");

//usuwamy zadanie
function removeTask() {
    const id = this.parentNode.dataset.key;
    document.querySelector(`li[data-key="${id}"]`).remove();
}

doneButtons.forEach(function(button) {
    button.addEventListener("click", removeTask);
})