var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  // console.log("hey");
  let rec_loc = rect.getBoundingClientRect();
  let in_rec = details.clientX - rec_loc.left;
  if (in_rec < rec_loc.width / 2) {
    // console.log("left");
    var redcolor = gsap.utils.mapRange(0, rec_loc.width / 2, 255, 0, in_rec);
    gsap.to(rect, {
      backgroundColor: ` rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  } else {
    // console.log("right");
    var bluecolor = gsap.utils.mapRange(rec_loc.width / 2, rec_loc.width, 0, 255, in_rec);
    gsap.to(rect, {
      backgroundColor: ` rgb(0,0,${bluecolor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
});
