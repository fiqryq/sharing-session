// @ts-nocheck
const topRocket = document.querySelector('.top-rocket');
const midRocket = document.querySelector('.mid-rocket');
const rocket = document.querySelector('.bot-rocket');
const supply = document.querySelector('.supply');
const allBlocs = document.querySelectorAll('.bloc');

const offsets = [105, 206, 848];

gsap.utils.toArray(['.bloc2', '.bloc3', '.bloc4']).forEach((bloc, index) => {
  gsap.to(bloc, {
    y: 0,
    ease: 'linear',
    scrollTrigger: {
      trigger: '.container-scroll',
      start: 'top bottom-=50%',
      end: `+=${offsets[index]}`,
      scrub: true,
    },
  });
});

allBlocs.forEach((bloc, index) => {
  if (index === 3) {
    ScrollTrigger.create({
      trigger: bloc,
      start: 'top+=150 center',
      onEnter: () => {
        bloc.classList.add('active');
      },
      onLeaveBack: () => {
        bloc.classList.remove('active');
      },
      // markers: true
    });

    return;
  }

  ScrollTrigger.create({
    trigger: bloc,
    start: 'top center+=10%',
    onEnter: () => {
      bloc.classList.add('active');
    },
    onLeaveBack: () => {
      bloc.classList.remove('active');
    },
    // markers: true
  });
});
