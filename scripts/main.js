// entry point from index.html

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world!';

var i = 0;

document.querySelector('h1').onclick = function() {
  i++;
  document.querySelector('h1').textContent = 'Hello, with count' + i;
}
