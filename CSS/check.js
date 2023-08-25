var btn = document.querySelector("button")
var blub = document.querySelector("#bulb")
var flag = false

btn.addEventListener("click", function () {
  if (flag == false) {
    bulb.style.backgroundColor = "white"
    console.log("clicked ON")
    flag = true
  } else {
    bulb.style.backgroundColor = "yellow"
    console.log("Clicked OFF")
    flag = false
  }
});
