let btn = document.querySelector(".btn");
let progress = document.querySelector(".progress-success");
let counter = document.querySelector(".counter");

let grow = 0;

    btn.addEventListener("click", function () {
        let set = setInterval(() => {
            if (grow >= 100) { 
              clearInterval(set);
            } else {
              grow++;
              counter.innerHTML = grow + "%";
              progress.style.width = grow + "%";
            }
          }, 14);
    }, 14);


