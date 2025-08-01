const typedTextSpan = document.querySelector(".typedText")
const cursorSpan = document.querySelector(".cursor")

const textArray = ["lo que estás buscando...",  "Ingeniero Civil", "Desarrollador Web", "Visita la sección de proyectos","Programador", "Ingeniero en formación", "Un apasionado por la tecnología", "tu agente de confianza", "la persona que necesitas :)", "Ingeniero"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; //Delay entre current y el siguiente texto

let textArrayIndex = 0;
let charIndex = 0;

function type(){

    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else{
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else{
        cursorSpan.classList.remove("typing");
        textArrayIndex ++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { //on DOM load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


