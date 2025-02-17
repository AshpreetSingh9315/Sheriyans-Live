
function magnet(){
  Shery.makeMagnet(".header-right p , .header svg");
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      x: dets.x,
      y: dets.y,
      duration: 0.1,
    });
  });
}

function loadingAnimation() {
  const tl = gsap.timeline();

  tl.from(".lines h1 , .now", {
    y: 150,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    onStart: function () {
      var counter = document.querySelector(".counter");
      var count = 0;

      setInterval(() => {
        if (count < 100) {
          counter.innerHTML = count++;
        } else {
          count = 100;
          counter.innerHTML = count;
        }
      }, 20);
    },
  });
  tl.to(".lines h1 , .now , .counter ,.left h2, .end-loader", {
    opacity: 0,
    duration: 1.7,
    ease: "power4.in",
    stagger: 0.2,
  });

  tl.to("#loader", {
    y: -1200,
    opacity: 0,
    ease: "power4.in",
  });

  tl.from(".subhero h1 , .now", {
    y: 150,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  });
}
 
function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

magnet();
loadingAnimation();
locomotiveAnimation();
