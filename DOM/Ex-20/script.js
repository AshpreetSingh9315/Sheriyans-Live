let header = document.querySelector(".nav");

document.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.transform = "translateY(-100%)"; // Moves the header up
        header.style.transition = "transform 0.3s ease-in-out";
    } else {
        header.style.transform = "translateY(0)"; // Brings it back when scrolling up
    }
});
