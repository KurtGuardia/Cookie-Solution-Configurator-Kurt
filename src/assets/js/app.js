const cookieToggle = document.getElementById('cookie-toggle');
const privacyToggle = document.getElementById('privacy-toogle');
const cookieSection = document.getElementById('cookie');
const privacySection = document.getElementById('privacy');
const banner = document.querySelector('.banner');
const completed = document.getElementById('completed');
const buttonSubmit = document.querySelector('.btn--cta');

let percentage = 03;

const updatePerc = () => {
  completed.textContent = `${percentage}%`;
};
updatePerc();

banner.addEventListener('click', function (e) {
  banner.style.display = 'none';
});

cookieToggle.addEventListener('change', function (e) {
  const value = e.target.checked;
  const cookie = cookieSection.style;

  if (value === true) {
    cookie.display = 'block';
    percentage += 10;
  } else {
    cookie.display = 'none';
    percentage -= 10;
  }

  updatePerc();
});

privacyToggle.addEventListener('change', function (e) {
  const value = e.target.checked;
  const privacy = privacySection.style;

  if (value === true) {
    privacy.display = 'block';
    percentage += 10;
  } else {
    privacy.display = 'none';
    percentage -= 10;
  }

  updatePerc();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// FOR DROPDOWN MENU  //////////////////////////////////////

const selectWrapper = document.querySelector('.select-wrapper');
const customOption = document.querySelectorAll('.custom-option');
const select = document.querySelector('.select');

// Toggling the 'open' class
selectWrapper.addEventListener('click', function () {
  this.querySelector('.select').classList.toggle('open');
});

// Adding a function to all options available to switch .selected class and setting the selected one on display
for (const option of customOption) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode
        .querySelector('.custom-option.selected')
        .classList.remove('selected');

      this.classList.add('selected');

      this.closest('.select').querySelector('.select__trigger span').innerHTML =
        this.innerHTML;
    }
  });
}

// Clicking anywhere else closes the dropdown
window.addEventListener('click', function (e) {
  if (!select.contains(e.target)) {
    select.classList.remove('open');
  }
});

// Handle Custom theme
function importData() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = (_) => {
    // you can use this method to get file and perform respective operations
    let files = Array.from(input.files);
    console.log(files);
  };
  input.click();
}

buttonSubmit.addEventListener('click', function () {
  alert('Successfully submited your data!');
});
