var menubutton = document.querySelector('.option');
var CenterNav = document.querySelector('.nav-center');
menubutton.addEventListener("click", function() {
    CenterNav.classList.toggle('dropdown');
})
var tl = gsap.timeline();
tl.from(".nav-left ",{
   x :-100,
    duration:0.5,
   delay:0.3
})

tl.from(".nav-center a",{
   y :-50,
    duration:0.3,
   delay:0,
   stagger:0.3
})
tl.from(".nav-right",{
    x:2000,
     duration:0.3,
    delay:0,
    stagger:0.3
 })
tl.from(".main-content",{
    scale:0,
     duration:0.3,
    delay:0,
    stagger:0.3
 })

 tl.from(".card",{
    scale:0,
     duration:0.3,
    delay:0,
    stagger:0.3,
    scrollTrigger:
    {
        Trigger:'.card',
        scroller:'body',
        // markers:true,
        start:"700px 400px",
        end:"1000px 300px",
        scrub:2
    }
 })
 tl.from(".left-end-container",{
    x:-1000,
     duration:0.3,
    delay:0,
    stagger:0.3,
    scrollTrigger:
    {
        Trigger:'.card',
        scroller:'body',
        //  markers:true,
        start:"1200px 400px",
        end:"1700px 300px",
        scrub:2
    }
 }) 
 tl.from(".conda-right",{
    x:-1000,
     duration:0.3,
    delay:0,
    stagger:0.3,
    scrollTrigger:
    {
        Trigger:'.card',
        scroller:'body',
        //  markers:true,
        start:"1900px 400px",
        end:"1700px 300px",
        scrub:2
    }
 }) 
 tl.from(".navigator-left",{
    x:-1000,
     duration:0.3,
    delay:0,
    stagger:0.3,
    scrollTrigger:
    {
        Trigger:'.card',
        scroller:'body',
        //  markers:true,
        start:"2500px 400px",
        end:"1700px 300px",
        scrub:2
    }
 }) 
 tl.from(".cloud-right",{
    x:-1000,
     duration:0.3,
    delay:0,
    stagger:0.3,
    scrollTrigger:
    {
        Trigger:'.card',
        scroller:'body',
         //markers:true,
        start:"3000px 400px",
        end:"1700px 300px",
        scrub:2
    }
 }) 
 tl.from(".open-source-same",{
    scale:0,
     duration:0.3,
    delay:0,
    stagger:0.3,
    stagger:1.7,
    scrollTrigger:
    {
        Trigger:'.card',
        scroller:'body',
         //markers:true,
        start:"3800px 400px",
        end:"1700px 300px",
        scrub:2
    }
 }) 
 tl.from(".same-box",{
    scale:0,
     duration:0.3,
    delay:0,
    stagger:0.3,
    stagger:1.7,
    scrollTrigger:
    {
        Trigger:'.card',
        scroller:'body',
        //  markers:true,
        start:"5100px 400px",
        end:"1700px 300px",
        scrub:2
    }
 }) 