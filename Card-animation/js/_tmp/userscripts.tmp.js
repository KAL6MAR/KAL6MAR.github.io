"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  cx = window.innerWidth / 2;
  cy = window.innerHeight / 2;
  body.addEventListener('mousemove', function (e) {
    clientX = e.pageX;
    clientY = e.pageY;
    request = requestAnimationFrame(updateMe);
  });

  function updateMe() {
    dx = clientX - cx;
    dy = clientY - cy;
    tiledx = dx / cx;
    tiledy = dy / cy;
    radius = Math.sqrt(Math.pow(tiledx, 2) + Math.pow(tiledy, 2));
    degree = radius * 12;
    gsap.to('.content', 1, {
      transform: "rotate3d(".concat(tiledx, ", ").concat(tiledy, ", 0, ").concat(degree, "deg)")
    });
  }
});