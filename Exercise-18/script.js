let btn = document.querySelector(".btn");
let progress = document.querySelector(".progress-success");
let counter = document.querySelector(".counter");

let grow = 0;

btn.addEventListener("click", function () {
  let set = setInterval(() => {
    grow++;
    counter.innerHTML = grow + "%";
    progress.style.width = grow + "%";
  }, 30);

  setTimeout(() => {
    clearInterval(set);
    btn.style.backgroundColor = "gray";
    btn.innerHTML = "Downloaded";
  }, 3001);
});
