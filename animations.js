const tl = gsap.timeline( { defaults: {duration: 2, ease: Power4.easeOut}} )
const tl2 = gsap.timeline( { defaults: {duration: 1, ease: Power4.easeOut}} )

tl.from(".main-header", {
    delay: 2,
    opacity: 0,
    x: -100,
})
.from(".main-text", {
    opacity: 0,
    x: -50,
}, "-=1.5");

tl2.from(".signup", {
    delay: 2,
    opacity: 0,
    x: 100,
    stagger: 0.5,
})
.from(".nav-ul", {
    opacity: 0,
    y: 50,
    stagger: 0.4
}, "-=0.1")
.from(".contact-btn", {
    opacity: 0,
    x: 100,
}, "-=0.3")
