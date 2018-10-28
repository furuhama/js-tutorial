// entry point from index.html

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world!';

document.querySelector('h1').onclick = function() {
  alert('Hi, there.');
}
