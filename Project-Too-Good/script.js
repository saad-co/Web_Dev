function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();

function videoContainerAnimation() {
  var vidcon = document.querySelector(".videoContainer");
  var playbtn = document.querySelector("#play");

  vidcon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      opacity: 0.5,
      scale: 1,
    });
  });

  vidcon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      opacity: 0,
      scale: 0,
    });
  });

  vidcon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 50,
      top: dets.y - 30,
    });
  });
}

videoContainerAnimation();

function loading() {
  gsap.from(".page1 h1", {
    y: 100,
    delay: 0.5,
    duration: 0.9,
    opacity: 0,
    stagger: 0.3,
  });
  gsap.from(".page1 .videoContainer", {
    scale: 0.8,
    opacity: 0,
    delay: 1.5,
    duratioin: 0.9,
  });
}

loading();

// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });

function cursorAnimation() {
  var cur = document.querySelector(".cursor");
  document.addEventListener("mousemove", function (dets) {
    gsap.to(cur, {
      x: dets.clientX - 50,
      y: dets.clientY - 45,
    });
  });

  var myvar = document.querySelectorAll(".child");
  myvar.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: " scale(1)",
      });
    });

    element.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: " scale(0)",
      });
    });
  });
}

cursorAnimation();
