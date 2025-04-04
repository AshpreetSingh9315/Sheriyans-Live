let img = document.querySelector("#img");
let heart = document.querySelector("#heart");

img.addEventListener("dblclick", function (dets) {
    heart.style.display = "block";
        heart.style.scale = 0.95
    setTimeout(()=>{
        heart.style.scale = 0.45
        heart.style.display = "none";
    },1000)
});
