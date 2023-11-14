document.addEventListener("DOMContentLoaded", function () {
    const images = ["img/me1.jpg", "img/me2.jpg", "img/me3.jpg"];
    const imageElement = document.querySelector(".img_about_me");
    let currentIndex = 0;

    function changeImage() {
        imageElement.classList.add("fade-out");

        setTimeout(function () {
            currentIndex = (currentIndex + 1) % images.length;
            imageElement.src = images[currentIndex];
            imageElement.classList.remove("fade-out"); 
        }, 1000); // Espera 1 segundo (tiempo de transición) antes de cambiar la imagen
    }
    
    const intervalId = setInterval(changeImage, 6000);
    if (!intervalId) {
        console.error("Error al establecer el intervalo para cambiar la imagen.");
    }
});


