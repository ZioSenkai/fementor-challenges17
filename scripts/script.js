'use strict'

const accordion = document.querySelectorAll('.contentBx');

accordion.forEach(li => {
  li.addEventListener('click', function () {
    this.classList.toggle('active')
  })
})

