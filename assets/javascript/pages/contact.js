
function setupStampButtons() {
  [...document.getElementsByClassName('stamp')].forEach(
    (btn, index, array) => {
      btn.addEventListener('click', () => {
        let targetIndex = index+1;
        if (targetIndex == array.length) {
          targetIndex = 0;
        }
        btn.classList.remove('active');
        btn.classList.add('hidden');
        array[targetIndex].classList.add('active');
        array[targetIndex].classList.remove('hidden');
      });
    }
  );
}

function setupContactFormSubmit() {
  const form = document.getElementById("contact_form");
  const result = document.getElementById("contact_result");
  const submitButtons = document.getElementsByClassName('contact-submit');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.classList.remove('hidden');
    result.classList.add('easy-fade-in');
    [...submitButtons].forEach(
      (btn) => {
        btn.classList.add('disabled');
      }
    );

    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.innerHTML = json.message;
          result.classList.add("success");
        } else {
          console.log(response);
          result.innerHTML = json.message;
          result.classList.add("error");
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        [...submitButtons].forEach(
          (btn) => {
            btn.classList.remove('disabled');
          }
        );
        setTimeout(() => {
          result.classList.add('hidden');
        }, 5000);
      });
  });
}
