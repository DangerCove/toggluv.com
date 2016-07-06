function hideModal() {
    var modalContainer = document.querySelector('.c-modal'),
        modals = document.querySelector('.c-modal > div');
    modalContainer.classList.remove('is-visible');
    modals.classList.remove('is-visible');
}
function bindButtons() {
  // Play button on preview
  var playButtons = document.querySelectorAll('.c-preview__playbutton');
  for (var i = 0; i < playButtons.length; i++) {
    var playButton = playButtons[i];
    playButton.addEventListener('click', function(event) {
      var preview = document.querySelector('.c-preview__animation'),
      button = event.target;
      preview.setAttribute('src', button.dataset.animationSrc);
      button.remove();
    }, false );
  }
  // Hide modal
  var hideModalButton = document.querySelector('.c-modal__content__hidebutton');
  hideModalButton.addEventListener('click', function(event) {
    event.preventDefault();
    hideModal();
  }, false);
  // Download button shows modal
  var downloadButtons = document.querySelectorAll('.u-downloadlink');
  for (var i = 0; i < downloadButtons.length; i++) {
    var downloadButton = downloadButtons[i];
    downloadButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent link being called
      var modalContainer = document.querySelector('.c-modal'),
      modals = document.querySelector('.c-modal > div'),
      modal = document.querySelector('.c-modal--download');
      modalContainer.classList.remove('is-visible');
      modalContainer.classList.add('is-visible');
      modals.classList.remove('is-visible');
      modal.classList.add('is-visible');
    }, false);
  }
  // Mailinglist button
  var mailinglistButton = document.querySelector('.c-modal--download .c-mailinglist--submit .c-button--confirm');
  mailinglistButton.addEventListener('click', function(event) {
    var textFields = document.querySelectorAll('.c-mailinglist .c-input--text');
    for (var i = 0; i < textFields.length; i++) {
      var textField = textFields[i];
      textField.value = '';
    }
    hideModal();
  });
}
bindButtons();
