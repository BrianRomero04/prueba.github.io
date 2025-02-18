function resetText(element, originalText) {
    setTimeout(() => {
        element.innerText = originalText;
    }, 5000);
}

function resetImage(image) {
    setTimeout(() => {
        image.classList.add("hidden");
    }, 5000);
}

document.querySelectorAll(".reveal-btn").forEach(button => {
    button.addEventListener("click", function() {
        let targetId = this.getAttribute("data-target");
        let img = document.getElementById(targetId);
        
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.remove("hidden");
            resetImage(img);
        } else {
            alert("La imagen no está disponible.");
        }
    });
});

document.getElementById("admiro").addEventListener("click", function() {
    let texto = this.querySelector("p");
    let originalText = "Haz clic para revelar";
    texto.innerText = "Admiro a mi mamá por su fuerza y valentia para afrontar todo.";
    resetText(texto, originalText);
});

document.getElementById("meta").addEventListener("mouseover", function() {
    let texto = this.querySelector("p");
    let originalText = "Pasa el mouse para descubrir";
    texto.innerText = "Mi meta es convertirme en un experto en redes.";
    resetText(texto, originalText);
});

document.addEventListener("keydown", function() {
    let texto = document.getElementById("musica").querySelector("p");
    let originalText = "Presiona cualquier tecla";
    texto.innerText = "Me encanta el trap, la salsa y la bachata.";
    resetText(texto, originalText);
});

document.getElementById("vivir").addEventListener("dblclick", function() {
    let texto = this.querySelector("p");
    let originalText = "Doble clic para revelar";
    texto.innerText = "No podría vivir sin mi mamá.";
    resetText(texto, originalText);
});

document.getElementById("talento").addEventListener("mousedown", function() {
    let texto = this.querySelector("p");
    let originalText = "Mantén presionado para revelar";

    texto.innerText = "Soy bueno comiendo mucho.";
    this.classList.add("tilt");

    resetText(texto, originalText);

    setTimeout(() => {
        this.classList.remove("tilt");
    }, 1000);
});

document.getElementById("mostrarAnimal").addEventListener("click", function() {
    let texto = document.getElementById("animal").querySelector("p");
    let originalText = "Presiona un botón";

    texto.innerText = "Mi animal favorito es GODZILLA.";
    resetText(texto, originalText);
});
