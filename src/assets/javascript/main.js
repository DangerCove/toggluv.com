function hideModal() {
  var modalContainer = document.querySelector('.c-modal'),
  modals = document.querySelectorAll('.c-modal > div');
  modalContainer.classList.remove('is-visible');
  for (var i = 0; i < modals.length; i++) {
    var modal = modals[i];
    modal.classList.remove('is-visible');
  }
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
      // Hide gif indicator
      var gifIndicators = document.querySelectorAll('.c-preview__gifindicator');
      for (var j = 0; j < gifIndicators.length; j++) {
        var gifIndicator = gifIndicators[j];
        gifIndicator.remove();
      }

      // Track event
      if (ga) {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Preview GIF',
          eventAction: 'play',
          eventLabel: 'Coming Soon Page'
        });
      }
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
      modals = document.querySelectorAll('.c-modal > .is-visible'),
      downloadModal = document.querySelector('.c-modal-download');
      for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        modal.classList.remove('is-visible');
      }
      if (!modalContainer.classList.contains('is-visible')) {
        modalContainer.classList.add('is-visible');
      }
      downloadModal.classList.add('is-visible');

      // Track event
      if (ga) {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Download Modal',
          eventAction: 'open',
          eventLabel: 'Coming Soon Page'
        });
      }
    }, false);
  }
  // Mailinglist button
  var mailinglistButton = document.querySelector('.c-modal-download .c-mailinglist--submit .c-button--confirm');
  mailinglistButton.addEventListener('click', function(event) {
    hideModal();

    // Track event
    ga('send', {
      hitType: 'event',
      eventCategory: 'Download Modal',
      eventAction: 'submit',
      eventLabel: 'Coming Soon Page'
    });
  });
}
bindButtons();
