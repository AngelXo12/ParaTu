function mostrarFrase() {
    // Obtener el valor seleccionado del dropdown
    const emocion = document.getElementById("emocion").value;
    const fraseDiv = document.getElementById("frase-emocion");

    let frase = ""; // Variable para almacenar la frase

    // Asignar la frase según la emoción seleccionada
    switch (emocion) {
        case "feliz":
            frase = "Me alegra mucho que estes feliz, ver tu sonrisa es algo hermoso."
            break;
        case "triste":
            frase = "No importa lo que pase, siempre estaré aquí para levantarte.";
            break;
        case "estresada":
            frase = "Respira profundo, todo va a estar bien. Aqui estare para ti.";
            break;
        case "enojada":
            frase = "Sé que estás molesta, y me duele verte así. Quiero que sepas que estoy aquí para escucharte y entender lo que sientes, porque lo que más quiero es que estés bien.";
            break;
            case "ansiosa":
                frase = "Recuerda que esto pasará, y estaré aquí todo el tiempo para ayudarte."
                break;
            case "Sin animos":
            frase = "No te preocupes si no tienes ánimos ahora. Yo estoy para ti, en los días buenos y los no tan buenos."    
            break;    
            
        default:
            frase = "";

    }

    // Mostrar la frase en el div correspondiente
    fraseDiv.innerHTML = `<p>${frase}</p>`;
}

// Lista de "Te Amo" en diferentes idiomas
const teAmoIdiomas = {
    español: "Te Amo",
    inglés: "I Love You",
    francés: "Je T'Aime",
    italiano: "Ti Amo",
    alemán: "Ich Liebe Dich",
    portugués: "Eu Te Amo",
    japonés: "愛してる (Aishiteru)",
    chino: "我爱你 (Wǒ ài nǐ)",
    árabe: "أحبك (Ana behibek)",
    ruso: "Я тебя люблю (Ya tebya lyublyu)",
    hindi: "मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)"
};

// Obtener la lista de idiomas y agregar "Te Amo" en esos idiomas
const listaIdiomas = document.getElementById("idiomas-lista");

for (let idioma in teAmoIdiomas) {
    const item = document.createElement("li");
    item.textContent = `${idioma.charAt(0).toUpperCase() + idioma.slice(1)}: ${teAmoIdiomas[idioma]}`;
    listaIdiomas.appendChild(item);
}
