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
