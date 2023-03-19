gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

gsap.defaults({ ease: "none" });

// const pulses = gsap.timeline({
//         scrollTrigger: {
//           trigger: "#transring",
//           scrub: true,
//           start: "-150vh",
//           end: "4260vh",
//         },
//       })
//       .from(".transrgwht",{drawSVG:0, duration:4})
// .to(".dotsfill1,{} , 1.36")
// .to(".dotsfill2,{} , 2.36")
// .to(".dotsfill3,{} , 3.36")
// .to("")
// .to("#Dots4,1.92")

const main = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#transring",
      scrub: true,
      start: "-150vh",
      end: "4260vh",
    },
  })
  .from(".transrgwht", { drawSVG: 0, duration: 10 })
  .to(
    ".dotsfill",
    {
      motionPath: {
        path: ".transrgwht",
        align: ".transrgwht",
        alignOrigin: [0.5, 0.4],
      },
      duration: 10,
    },
    0
  );

//  GSDevTools.create({animation:main})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})


const hiddenElement = document.querySelectorAll('.section');
hiddenElement.forEach((el) => observer.observe(el));