const searcher = document.querySelector(".searcher");
const list = document.querySelector("ul");
const listElements = list.querySelectorAll("li");

searcher.addEventListener("keyup", function() {
    let elements = [...listElements];
    elements = elements.filter(element => 
        element.textContent.toLowerCase().includes(searcher.value.toLowerCase()));
    list.innerHTML = "";
    elements.forEach(li => list.appendChild(li));
})