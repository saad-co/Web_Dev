const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function cursorMovement() {
    window.addEventListener("mousemove", function (dets) {
       document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}



function firstPageAnime(){
    var tl = gsap.timeline();

    tl.from(".nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })

    .to(".boundingelem",{
        y:0,
        duration:1.3,
        stagger:.2,
        delay:-1,
        ease:Expo.easeInOut
    })
    
    .from(".heroFooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-2,
        ease:Expo.easeInOut
    })
    

}


cursorMovement();

firstPageAnime();


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    //   duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff - 50,
      left: dets.clientX - 60,
      rotate: gsap.utils.clamp(-30, 30, diffrot ),
    });
  });
});