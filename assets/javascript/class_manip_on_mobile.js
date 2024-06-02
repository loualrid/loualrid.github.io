function purgeClassesOnMobile() {
  if (window.innerWidth < 980) {
    [...document.getElementsByClassName('pcom')].forEach(
      (obj) => {
        obj.classList.forEach(
          (objClass) => {
            if (objClass !== 'pcom') {
              obj.classList.remove(objClass);
            }
          }
        );
      }
    );
  }
}

function swapClassOnMobile(targetClass, newTargetClass) {
  if (window.innerWidth < 980) {
    [...document.getElementsByClassName('scom')].forEach(
      (obj) => {
        obj.classList.replace(targetClass, newTargetClass);
      }
    );
  }
}
