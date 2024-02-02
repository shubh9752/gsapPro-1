// gsap.to(".box",{
//     x:1200,
//     y:200,
   
//     backgroundColor:"green",
//     duration:2,
//     delay:1,
//     rotate:360
// })

//move final to initial
// gsap.from(".box",{
//     x:1200,
//     y:200,
   
//     backgroundColor:"green",
//     duration:2,
//     delay:1,
//     rotate:360
// })
var tl=gsap.timeline()
tl.to(".box1",{
    x:900,
    rotate:360,
    delay:1,
    // repeat:"loop",
    duration:2
    
})
tl.to(".box2",{
    x:900,
    rotate:360,
    delay:1,
    // repeat:"loop",
    duration:3
    
})
tl.to(".box3",{
    x:900,
    rotate:360,
    delay:1,
    // repeat:"loop",
    duration:4
    
})