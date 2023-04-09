// @ts-nocheck

let timeline = gsap.timeline({
  repeat: 2,
  repeatDelay: 1,
  paused: true,
});

timeline.to('.green', { x: 100, duration: 2 });
// timeline.to('.purple', { x: 100, duration: 1 });
// timeline.to('.blue', { x: 100, y: -100, duration: 1 });

document
  .querySelector('#play')
  .addEventListener('click', () => timeline.resume());

document
  .querySelector('#pause')
  .addEventListener('click', () => timeline.pause());
