function handleSectionItemsState(index, className) {
  [...document.getElementsByClassName(className)].forEach(
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
  [...document.getElementsByClassName(buttonClassName)].forEach(
    (btn, index, array) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('active')) {
          btn.classList.add('active');
        }

        [...array].forEach(
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
  [...document.getElementsByClassName('slider-next-section-button')].forEach(
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
