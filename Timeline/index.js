// @ts-nocheck

let timeline = gsap.timeline({
  repeat: 2,
  repeatDelay: 1,
  yoyo: true,
});

timeline.to('.green', { x: 100, duration: 2 });
