var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.8,
});

tl.from("#full h4", {
  opacity: 0,
  x: 50,
  duration: 0.5,
  stagger: 0.2,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});
close.addEventListener("click", function () {
  tl.reverse();
});

// header texr animation
function breackTheText() {
  var hi = document.querySelector("#header-text");
  var h1Text = hi.textContent;
  var splitText = h1Text.split("");
  let clutte = "";

  splitText.forEach(function (char) {
    clutte += `<span class="a">${char}</span>`;
  });
  hi.innerHTML = clutte;
}
breackTheText();

gsap.from("#header-text .a", {
  opacity: 0,
  y: 80,
  duration: 0.5,
  stagger: 0.1,
  delay: 1,
});
// header texr animation
function breackTheText1() {
  var hi = document.querySelector("#header-text1");
  var h1Text = hi.textContent;
  var splitText = h1Text.split("");
  let clutte = "";

  splitText.forEach(function (char) {
    clutte += `<span class="a">${char}</span>`;
  });
  hi.innerHTML = clutte;
}
breackTheText1();

gsap.from("#header-text1 .a", {
  opacity: 0,
  y: 80,
  duration: 0.5,
  stagger: 0.1,
  delay: 1,
});
