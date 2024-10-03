function dropFilter() {
  const blocks = document.querySelectorAll('.filter-drop'),
    wrap = document.querySelector('.filter__list')
  if (blocks)
    for (const block of blocks) {
      const btn = block.querySelector('.filter-drop__name'),
        list = block.querySelector('.filter-drop__list'),
        btnClose = list.querySelector('button')

      btnClose.textContent = btn.textContent + ':'

      btn.addEventListener('click', () => {
        if (window.innerWidth > 1023) {
          block.closest('.filter__item').classList.add('hide')
          block.classList.add('active')
          const ph = list.clientHeight
          wrap.style.height = ph + 'px'
        } else {
          block.classList.toggle('active')
        }
      })

      btnClose.addEventListener('click', () => {
        block.classList.remove('active')
        block.closest('.filter__item').classList.remove('hide')

        if (window.innerWidth > 1023) {
          const ph = block.closest('.filter__item').clientHeight
          wrap.style.height = ph + 'px'
        }
      })
    }

  if (window.innerWidth < 1024) {
    const items = document.querySelectorAll('.filter__item')
    for (const item of items) {
      const creatAll = document.createElement('div')
      creatAll.classList.add('filter__all')
      creatAll.textContent = "Еще"

      const wrapItem = item.querySelector('.filter__wrap'),
        itemsLi = item.querySelectorAll('.filter__wrap > ul>li')

      itemsLi.forEach((e, idx) => { if (idx > 5) { e.classList.add('hideBlock') } })
      if (!item.querySelector('.filter__all') && wrapItem) wrapItem.appendChild(creatAll)
      dropFilterAll()
    }

    /** */
    const btnOpen = document.querySelector('.filter__btn'),
      filter = document.querySelector('.filter__body')
    if (btnOpen)
      btnOpen.addEventListener('click', () => {
        filter.classList.add('_active')
        const newDiv = document.createElement("div");
        document.body.classList.add("_lock");
        newDiv.classList.add("openShow");
        document.querySelector('body').appendChild(newDiv);
      })
  }
}

function dropFilterAll() {
  const blocks = document.querySelectorAll('.filter__item')
  if (blocks) {
    for (const block of blocks) {
      const btn = block.querySelector('.filter__all')
      if (btn)
        btn.addEventListener('click', () => {
          block.querySelectorAll('.filter__wrap > ul>li').forEach(e => e.classList.remove('hideBlock'))
          btn.remove()
        })
    }
  }
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    dropFilter()
  },
  false
);
window.addEventListener(
  "resize",
  function () {
    dropFilter()
  },
  false
);


