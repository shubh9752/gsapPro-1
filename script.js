var tl=gsap.timeline();

tl.from("nav h3",{
    y:-55,
    opacity:0,
    duration:1,
    delay:0.6,
    stagger:0.5

})
gsap.from("main h1",{
    x:-55,
    opacity:0,
    duration:0.5,
    delay:0.6,
    stagger:0.5

})
tl.from("img",{
    x:-900,
    rotate:395,
    opacity:1,
    duration:2,
    stagger:0.7
})

