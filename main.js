const doneButtons = document.querySelectorAll("li .done");

function removeTask() {
    const id = this.parentNode.dataset.key;
    document.querySelector(`li[data-key="${id}"]`).remove();
}

doneButtons.forEach(function(button) {
    button.addEventListener("click", removeTask);
})