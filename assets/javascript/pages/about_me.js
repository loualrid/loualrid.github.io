function handleSectionItemsState(index, className) {
  Array.prototype.forEach.call(
    document.getElementsByClassName(className),
    (slider, slideIndex, slideArray) => {
      if (slideArray[index] === slider && slider.classList.contains('hidden')) {
        slider.classList.remove('hidden');
        slider.classList.add('easy-fade-in');
      } else if (!slider.classList.contains('hidden')) {
        slider.classList.add('hidden');
        slider.classList.remove('easy-fade-in');
      }
    }
  );
}

function setupLinkedSectionButtons(buttonClassName, sectionClassName) {
  Array.prototype.forEach.call(
    document.getElementsByClassName(buttonClassName),
    (btn, index, array) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('active')) {
          btn.classList.add('active');
        }

        Array.prototype.forEach.call(
          array,
          (btnInner, btnInnerIndex) => {
            if (btnInnerIndex !== index && btn.classList.contains('active')) {
              btnInner.classList.remove('active');
            }
          }
        );

        handleSectionItemsState(index, sectionClassName);
      });
    }
  );
}

function setupNextButtons() {
  Array.prototype.forEach.call(
    document.getElementsByClassName('slider-next-section-button'),
    (btn, index, array) => {
      btn.addEventListener('click', () => {
        let nextSectionButton = document.getElementsByClassName('slider-section-button')[index+1];
        let currentSectionButton = document.getElementsByClassName('slider-section-button')[index];

        nextSectionButton.classList.add('active');
        currentSectionButton.classList.remove('active');

        handleSectionItemsState(index+1, 'slider-section'); // only 3 next buttons and they move to the next slider
      });
    }
  );
}
