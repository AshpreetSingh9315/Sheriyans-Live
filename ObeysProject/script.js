function mouseMove(){
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      x: dets.x,
      y: dets.y,
    });
  });

  var mouseFollwer = document.querySelector(".video-container");
  var video = document.querySelector(".video-container video");
  var videoImg = document.querySelector(".video-container img");
  mouseFollwer.addEventListener("mouseenter", function(){
    gsap.to("#crsr",{
      opacity:0,
    })
    mouseFollwer.addEventListener("mousemove", function(dets){
      gsap.to(".video-btn", {
        left: dets.x,
        y: dets.y,
        duration: 0.1,
      });
    });
  })
  mouseFollwer.addEventListener("mouseleave", function(){
    gsap.to("#crsr",{
      opacity:1,
    })
  })
  mouseFollwer.addEventListener("click", function(){
     video.play();
     video.style.opacity = 1;
     videoImg.style.opacity = 0;
  })
}

function magnet() {
  Shery.makeMagnet(".header-right p , .header svg");
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

  tl.from(
    ".subhero h1 , .now",
    {
      y: 150,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    },
    "-=.7"
  );
 
}

function lenisScrolling() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
}

function SheryJs() {
  Shery.imageEffect(".imgs_container", {
    style: 5,
    config: {
      a: { value: 1.6, range: [0, 30] },
      b: { value: -0.82, range: [-1, 1] },
      zindex: { value: "9996999", range: [-9999999, 9999999] },
      aspect: { value: 0.7120685188137755 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 9.98, range: [1, 15] },
      durationOut: { value: 1.56, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.27, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 1.37, range: [0, 10] },
      metaball: { value: 0.5, range: [0, 2] },
      discard_threshold: { value: 0.56, range: [0, 1] },
      antialias_threshold: { value: 0.01, range: [0, 0.1] },
      noise_height: { value: 0.34, range: [0, 2] },
      noise_scale: { value: 11.45, range: [0, 100] },
    },
    gooey: true,
  });  
}


mouseMove()
magnet();
loadingAnimation();
lenisScrolling();
SheryJs();
