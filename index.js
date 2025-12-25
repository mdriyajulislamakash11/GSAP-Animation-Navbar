

var tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 1,
})

tl.from("#full h4", {
    opacity: 0,
    x: 50,
    duration: 0.8,
    stagger: 0.2,
})

tl.from("#full i", {
    opacity: 0,
})