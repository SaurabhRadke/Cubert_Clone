// var cir=document.getElementById('circle')
// var lo=document.getElementById('logo')
// var menu=document.getElementById('mennu')
const lerp=(x,y,a)=>x*(1-a)+y*a;
Shery.mouseFollower();

// window.addEventListener('mousemove',function(deta){
//     gsap.to(cir,{
//         x:deta.clientX,
//         y:deta.clientY,
//         duration:.2,
//         ease:Expo,
//     })
//     cir.style.transform=`translate(${deta.clientX}px,${deta.clientY}px)`
// })
// menu.addEventListener('mousemove',function(dets){
//     var dims=menu.getBoundingClientRect();
//     var start=dims.x;
//     var end=dims.x + dims.width;
//     var ystart=dims.y;
//     var yend=dims.y+dims.height;
//     var ranX=gsap.utils.mapRange(start,end,0,1,dets.clientX)
//     var ranY=gsap.utils.mapRange(ystart,yend,0,1,dets.clientY)
    
//     gsap.to(cir,{
//         scale:3.2
//     })
//     gsap.to(".navbar .right i",{
//         color:'#fff',
//         duration:.4
//     })
//     gsap.to('.navbar .right i',{
//         x:lerp(-20,20,ranX),
//         y:lerp(-10,10,ranY),
//         duration:.4
//     })
// })
// menu.addEventListener('mouseleave',function(dets){
//     gsap.to(cir,{
//         scale:1
//     })
//     gsap.to(".navbar .right i",{
//         color:'#000',
//         duration:.4
//     })
//     gsap.to('.navbar .right i',{
//         x:0,
//         y:0,
//         duration:.4
//     })
// })

// lo.addEventListener('mousemove',function(dets){
//     gsap.to(cir,{
//         scale:4
//     })
    
// })
// lo.addEventListener('mouseleave',function(dets){
//     gsap.to(cir,{
//         scale:1
//     })
// })
Shery.makeMagnet('.magnet')
Shery.hoverWithMediaCircle("#hv" , {
    videos: ["0.mp4", "2.mp4", "3.mp4"] 
  });

gsap.to(".leftelem",{
    scrollTrigger:{
        trigger:".fixedSroller",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".las",
        scrub:1
    },
    y:"-300%",
    ease:Power1

})
let sec=document.querySelectorAll(".leftelem")
Shery.imageEffect(".viewImages", {
    style: 5, 
    // config:{
    //     onMouse:{value:1}
    // },
    slideStyle: (setScroll) =>{
        sec.forEach(function(section,ind){
            ScrollTrigger.create({
                trigger:section,
                start:"top top",
                scrub:1,
                onUpdate:function(prog){
                    setScroll(prog.progress+ind)
                }
            })
    })
}
    
  });