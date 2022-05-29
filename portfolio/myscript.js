const texts = "Hello! I'm Sreedevi Shine..";
let index = 0;
let letter = "";

(function type() {
  if (index == texts.length) {
    index = 0;
  }
  letter = texts.slice(0, ++index);

  document.querySelector('.introtextmoving').textContent = letter;
  setTimeout(type, 250);
}());


function calling() {
  confirm("Do you want to proceed?")
}