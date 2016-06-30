function bindButtons() {
  // Play button on preview
  var playButton = document.querySelector('.c-preview__playbutton');
  playButton.addEventListener('click', function(event) {
    var preview = document.querySelector('.c-preview__animation'),
        button = event.target;
    preview.setAttribute('src', button.dataset.animationSrc);
    button.remove();
  }, false );
}
bindButtons();
function bindFocus() {
  var emailField = document.querySelector('.c-mailinglist--email'),
      firstnameField = document.querySelector('.c-mailinglist--firstname');
  emailField.addEventListener('input', function(event) {
    var classList = firstnameField.classList;
    console.log(classList);
    classList.remove('u-visibility--hidden');
    classList.add('u-effects-fadein');
  }, false);
}
bindFocus();
