
document.addEventListener("mousemove", parallax);

function parallax(e) {
  const layers = document.querySelectorAll('.layer');

  layers.forEach(layer => {
    const speed = parseFloat(layer.getAttribute('data-speed'));
    const x = (window.innerWidth - e.pageX) * speed / 100;
    const y = (window.innerHeight - e.pageY) * speed / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
window.addEventListener('DOMContentLoaded', function () {
  var logo = document.getElementById('logo');

  setTimeout(function () {
    logo.classList.add('animate');
  }, 100); // 0.1s)
});

window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('opaca');
  } else {
    header.classList.remove('opaca');
  }
});  