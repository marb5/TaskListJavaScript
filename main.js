const searcher = document.querySelector(".searcher");
const list = document.querySelector("ul");
const listElements = list.querySelectorAll("li");

//wyszukiwarka
searcher.addEventListener("keyup", function() {
    //zamieniamy na tablice liste elementow li
    let elements = [...listElements];
    //filtrujemy te, ktore zawieraja szukana fraze
    elements = elements.filter(element => 
        element.textContent.toLowerCase().includes(searcher.value.toLowerCase()));
    //wyswietlamy szukane
    list.innerHTML = "";
    elements.forEach(li => list.appendChild(li));
})