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
