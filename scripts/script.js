'use strict'

const btn = document.querySelectorAll('.btn');

btn.forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    const blockquoteContent = this.nextElementSibling;
    const plusIcon = this.querySelector('.plus-icon');
    const minusIcon = this.querySelector('.minus-icon')

    if (blockquoteContent.style.maxHeight) {
      blockquoteContent.style.maxHeight = null
      plusIcon.style.display = 'block'
      minusIcon.style.display = 'none'
    } else {
      blockquoteContent.style.maxHeight = blockquoteContent.style.maxHeight + 'px'
      plusIcon.style.display = 'none'
      minusIcon.style.display = 'block'
    }
  })
})



