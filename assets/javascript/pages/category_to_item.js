function handleGalleryItemsState(className, targetFilterClass) {
  [...document.getElementsByClassName(className)].forEach(
    (galleryItem, galleryIndex, galleryArray) => {
      if (galleryItem.classList.contains(targetFilterClass) && !galleryItem.classList.contains('active')) {
        galleryItem.classList.remove('hidden', 'shrink-fade-out');
        galleryItem.classList.add('active', 'grow-fade-in');
      } else if (!galleryItem.classList.contains(targetFilterClass) && galleryItem.classList.contains('active')) {
        galleryItem.classList.remove('active', 'grow-fade-in');
        galleryItem.classList.add('shrink-fade-out');
        setTimeout(() => {
          galleryItem.classList.add('hidden');
        }, "950"); // this delay is important to be offset from the anim so a very brief flicker does not occur
      }
    }
  );
}

function setupCategoryButtons(buttonClassName, allCatsClassName, filterItemClassName) {
  [...document.getElementsByClassName(buttonClassName)].forEach(
    (btn, index, array) => {
      if (!btn.classList.contains(allCatsClassName)) {
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

          handleGalleryItemsState(filterItemClassName, btn.classList[1]); // the 2nd class is the "filter name" class
        });
      }
    }
  );
}

function allActiveGalleryItemsState(className) {
  [...document.getElementsByClassName(className)].forEach(
    (galleryItem, galleryIndex, galleryArray) => {
      if (!galleryItem.classList.contains('active')) {
        galleryItem.classList.remove('hidden', 'shrink-fade-out');
        galleryItem.classList.add('active', 'grow-fade-in');
      }
    }
  );
}

function setupAllCategoryButton(buttonClassName, linkedButtonsClassName, filterItemClassName) {
  let btn = document.getElementsByClassName(buttonClassName)[0];
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('active')) {
      btn.classList.add('active');
    }

    [...document.getElementsByClassName(linkedButtonsClassName)].forEach(
      (btnInner) => {
        if (!btnInner.classList.contains(buttonClassName)) { // assume that the all cat also has the same base class
          btnInner.classList.remove('active');
        }
      }
    );

    allActiveGalleryItemsState(filterItemClassName);
  });
}
