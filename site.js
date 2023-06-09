
var buttons = document.querySelectorAll('.project a');

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    var project = this.parentElement;
    project.classList.toggle('active');
  });
});
