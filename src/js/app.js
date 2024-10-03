function tabs() {
  const btns = document.querySelectorAll('.tab-btn'),
    body = document.querySelectorAll('.tab-item')
  if (btns)
    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i]
      btn.addEventListener('click', () => {
        btns.forEach(e => e.classList.remove('active'))
        body.forEach(el => el.dataset.id === btn.dataset.id ? el.classList.add('active') : el.classList.remove('active'))
        btn.classList.add('active')
        validDelivery()
      })
    }
}

function validDelivery() {
  const block1 = document.querySelector('.db__item[data-id="0"]'),
    block2 = document.querySelector('.db__item[data-id="1"]'),
    bodyVisit = document.getElementById('person-data')
  setTimeout(() => {

    if (block1 && block1.classList.contains('active')) {
      bodyVisit.style.display = 'block'
      block1.querySelectorAll('.input-box__input').forEach(e => {
        e.setAttribute('data-parsley-group', 'basket')
        e.classList.add('req')
      })

      block2.querySelectorAll('.input-box__input').forEach(e => {
        e.classList.remove('req')
        e.setAttribute('data-parsley-group', 'basket1')
        e.classList.remove('parsley-error')
        e.classList.remove('error')
      })

    }
    if (block2 && block2.classList.contains('active')) {

      bodyVisit.style.display = 'none'
      block2.querySelectorAll('.input-box__input').forEach(e => {
        e.setAttribute('data-parsley-group', 'basket')
        e.classList.add('req')
      })

      block1.querySelectorAll('.input-box__input').forEach(e => {
        e.classList.remove('req')
        e.setAttribute('data-parsley-group', 'basket1')
        e.classList.remove('parsley-error')
        e.classList.remove('error')
      })
      bodyVisit.querySelectorAll('.input-box__input').forEach(e => {
        e.classList.remove('req')
        e.setAttribute('data-parsley-group', 'basket1')
        e.classList.remove('parsley-error')
        e.classList.remove('error')
      })
    }
  }, 100)
}

$('.promo__btn').on('click', function () {
  if ($('#basket-form').parsley().validate('promo')) {
    //ajax bromo
  }
})
$('.fc-form .btn').on('click', function () {
  if ($('.fc-form').parsley().validate()) {
    //ajax fc-form
  }
})
$('.feed-block__form .btn').on('click', function () {
  if ($('.feed-block__form').parsley().validate()) {
    //ajax fc-form
  }
})
$('.visit-arr__form .btn').on('click', function () {
  if ($('.visit-arr__form').parsley().validate()) {
    //ajax fc-form
  }
})

function downCart() {
  const carts = document.querySelectorAll('.cart-pad')
  if (carts)
    for (const cart of carts) {
      const btn = cart.querySelector('.cart-pad__all'),
        textBtn = btn.querySelector('span'),
        btnClose = cart.querySelector('.cart-pad__btn')

      btn.addEventListener('click', () => {
        cart.classList.toggle('open')
        if (cart.classList.contains('open')) {
          textBtn.textContent = 'Скрыть'
        } else {
          textBtn.textContent = 'Читать больше'
        }
      })
      btnClose.addEventListener('click', () => {
        cart.classList.remove('open')
        textBtn.textContent = 'Читать больше'
      })
    }
}

function playVideo() {
  const btn = document.querySelector('.video-pad__btn'),
    video = document.querySelector('.video-pad__sourse'),
    wrap = document.querySelector('.video-pad')

  if (btn) {
    btn.addEventListener('click', () => {
      video.play()
      wrap.classList.add('active')
    })
    video.addEventListener('click', () => {
      video.load()
      wrap.classList.remove('active')
    })
  }
}

const dateFroms = document.querySelectorAll('.dateFrom')

if (dateFroms) {
  for (const dateFrom of dateFroms) {
    dateFrom.addEventListener('click', () => {
      const interval = setInterval(() => {
        if (dateFrom.value.length > 2) {
          dateFrom.classList.remove('parsley-error')
          dateFrom.classList.add('parsley-success')
          clearInterval(interval)
        }
      }, 10)
    })
  }
}

function openPopup() {
  const btns = document.querySelectorAll('.openOrder'),
    body = document.querySelector('.popup-order')
  if (btns) {
    for (const btn of btns) {
      btn.addEventListener('click', () => {
        body.classList.add('_active')
        document.querySelector('body').classList.add('_lock')
      })
    }

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains("popup-order")) {
        body.classList.remove('_active')
        document.querySelector('body').classList.remove('_lock')
      }
    })
  }
}

$(document).ready(function () {
  $(".js-example-basic-single").each(function (index) {
    $(this).select2({
      minimumResultsForSearch: -1
    });
  });
  $(".js-example-basic-single").each(function (index) {
    $(this).on('select2:select', function (e) {
      $(this).removeClass('error')
    });
  });
});

$('.order__btns .btn-primary').on('click', function () {

  let error = 0
  const block1 = document.querySelector('.db__item[data-id="0"]'),
    block2 = document.querySelector('.db__item[data-id="1"]')

  if (block1 && block1.classList.contains('active')) {
    $('.db__item[data-id="0"] .js-example-basic-single').each(function (index) {
      if (!$(this).val()) {
        error += 1
        $(this).addClass('error')
      }
    });
    $('#person-data .js-example-basic-single').each(function (index) {
      if (!$(this).val()) {
        error += 1
        $(this).addClass('error')
      }
    });
  }
  if (block2 && block2.classList.contains('active')) {
    $('.db__item[data-id="1"] .js-example-basic-single').each(function (index) {
      if (!$(this).val()) {
        error += 1
        $(this).addClass('error')
      }
    });
  }

  if ($('#basket-form').parsley().validate('basket')) {
    //ajax basket
    if (error) return
    console.log('basket-form');
  }
})

const stepForm = document.querySelectorAll('.popup-order__step div')
if (stepForm) {
  $('.popup-order__form #btn-step-1').on('click', function () {
    let error = 0

    if (!$('#select_pol3').val()) {
      error += 1
      $('#select_pol3').addClass('error')
    }

    if ($('.popup-order__form').parsley().validate('block1')) {
      if (error) return
      //ajax  
      stepForm.forEach((e, id) => id === 1 ? e.classList.add('active') : e.classList.remove('active'))
      $('#popup-of-1').removeClass('active')
      $('#popup-of-2').addClass('active')
      return false;
    }
  })

  $('.popup-order__form #btn-step-2').on('click', function () {
    let error = 0
    if (!$('#time2').val()) {
      error += 1
      $('#time2').addClass('error')
    }
    if ($('.popup-order__form').parsley().validate('block2')) {
      if (error) return
      //ajax  

      stepForm.forEach((e, id) => id === 2 ? e.classList.add('active') : e.classList.remove('active'))

      $('#popup-of-2').removeClass('active')
      $('#popup-of-3').addClass('active')
      return false;
    }
  })
  $('.popup-order__form #btn-step-3').on('click', function () {
    if ($('.popup-order__form').parsley().validate('block3')) {
      //ajax  
      console.log('ok');
      return false;
    }
  })
}
function quantity() {
  const block = document.querySelectorAll(".quantity");
  if (block)
    for (let i = 0; i < block.length; i++) {
      const btnMinus = block[i].querySelector(".quantity__button_minus"),
        btnPlus = block[i].querySelector(".quantity__button_plus"),
        valInput = block[i].querySelector(".quantity__input input");

      btnMinus.addEventListener("click", () => {
        let count = +valInput.value;

        if (count === 1) {

          return;
        } else {
          count--;
          valInput.value = count;
        }
      });
      btnPlus.addEventListener("click", () => {
        let count = +valInput.value;
        count++;
        valInput.value = count;
      });

    }
}

/*************************ui */
function castomScroll(el) {
  const block = document.querySelectorAll(el);
  if (block) block.forEach((e) => new SimpleBar(e));
}
function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

function anchorTop(idSelect, endSelect) {
  const btn = document.getElementById(idSelect);
  if (btn)
    btn.addEventListener("click", () => {
      window.scrollBy({
        top: document.querySelector(endSelect).getBoundingClientRect().top,
        behavior: "smooth",
      });
    });
}

function bgAppend() {
  const newDiv = document.createElement("div");
  document.body.classList.add("_lock");
  newDiv.classList.add("openShow");
  document.querySelector('body').appendChild(newDiv);
}

function bgRemove() {
  document.body.classList.remove("_lock");
  if (document.querySelector(".openShow")) document.querySelectorAll(".openShow").forEach(e => e.remove());
}

let i, j, l, ll, selElmnt, a, b, c;
let x = document.querySelectorAll(".custom-select");
if (x) {
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      if (selElmnt.options[j].dataset.coor)
        c.setAttribute('data-coor', selElmnt.options[j].dataset.coor);

      c.addEventListener("click", function (e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      this.classList.add('change')
      a.setAttribute('data-change', true)
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.phone'), function (input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
});
$(".dateFrom").each(function (index) {
  // $(this).datepicker({
  //   dateFormat: "dd.mm.yy",
  //   monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  //   dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],

  // })
})

function breadcrumbs() {
  const block = document.querySelector('.breadcrumbs'),
    list = document.querySelectorAll('.breadcrumbs ul li')
  if (block) {
    if (window.innerWidth < 1023)
      list.forEach((e, id) => {
        if (id > 0 && id < list.length - 1)
          e.innerHTML = '...'
      })
    block.style.opacity = 1
  }
}

function drop(blocks, btn) {
  const items = document.querySelectorAll(blocks)

  if (items) {
    for (const item of items) {
      const list = item.querySelectorAll('.down__link')

      item.querySelector(btn).addEventListener('click', () => item.classList.toggle('active'))
      for (const li of list) {
        li.addEventListener('click', () => {
          item.querySelector(btn).textContent = li.textContent
          item.classList.remove('active')
        })
      }
    }
    document.addEventListener('click', (e) => {
      if (!e.target.closest(".down")) items.forEach(e => e.classList.remove('active'))
    })
  }
}

function burger() {
  const el = document.querySelector('.burger')

  if (el) {
    document.querySelector('.openBurger').addEventListener('click', () => {
      el.classList.toggle('_active')
      if (el.classList.contains('_active')) {
        bgAppend()
      } else {
        bgRemove()
      }
    })
  }
}

function tabsDefault() {
  const btns = document.querySelectorAll('._tab-btn'),
    items = document.querySelectorAll('._tab-item');
  let idActive = 0

  if (btns) {
    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i];
      if (btn.classList.contains('active')) idActive = +btn.dataset.id
      if (btn.classList.contains('active') == 0) {
        items.forEach((el) => el.classList.add('active'));
      }
      btn.addEventListener('click', () => {
        btns.forEach((e) => e.classList.remove('active'));
        if (btn.dataset.id == 0) {
          items.forEach((el) => el.classList.add('active'));
        } else {
          items.forEach((el) => {
            el.dataset.id === btn.dataset.id ? el.classList.add('active') : el.classList.remove('active');
          });
        }
        btn.classList.add('active');
      });
    }
    items.forEach((el, idx) => {
      if (idActive === idx + 1) el.classList.add('active')
    })
  }
}
function tabsPad() {
  const btns = document.querySelectorAll('._tab-btn-p'),
    items = document.querySelectorAll('._tab-item-p');
  let idActive = 0

  if (btns) {
    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i];
      if (btn.classList.contains('active')) idActive = +btn.dataset.id
      items[idActive].classList.add('active');
      btn.addEventListener('click', () => {
        btns.forEach((e) => e.classList.remove('active'));
        items.forEach((el) => {
          el.dataset.id === btn.dataset.id ? el.classList.add('active') : el.classList.remove('active');
        });
        btn.classList.add('active');
      });
    }

  }
}

function downCa() {
  const carts = document.querySelectorAll('.ca')
  if (carts)
    for (const cart of carts) {
      const btn = cart.querySelector('.head-ca__btn')
      btn.addEventListener('click', () => {
        cart.classList.toggle('open')
      })
    }
}

let sliders = document.querySelectorAll("._swiper");
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains("swiper-bild")) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add("swiper-slide");
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement("div");
      slider_wrapper.classList.add("swiper-wrapper");
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = "";
      slider.appendChild(slider_wrapper);
      slider.classList.add("swiper-bild");
    }
  }
  sliders_bild_callback();
}
function sliders_bild_callback(params) { }

if (document.querySelector('.home-slider__wrap')) {
  new Swiper(".home-slider__wrap", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".nav-hs__btn_next",
      prevEl: ".nav-hs__btn_prev",
    },

    pagination: {
      el: ".nav-hs__progressbar",
      type: "progressbar",
    },
    speed: 1200,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },

      1280: {
        slidesPerView: 3,
      },
    }
  });
}

if (document.querySelector('.home-catalog__slider')) {
  new Swiper(".home-catalog__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
    },
  });
}
if (document.querySelector('.home-news__slider')) {
  new Swiper(".home-news__slider", {
    slidesPerView: 7,
    spaceBetween: 40,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1439: {
        spaceBetween: 40,
      },
    }
  });
}
function tabsSlider() {
  if (window.innerWidth < 1024)
    if (document.querySelector('.tabs-dp__btns')) {
      new Swiper(".tabs-dp__btns", {
        slidesPerView: "auto",
        spaceBetween: 10,
      });
    }
}
function compoundSlider() {

  if (document.querySelector('.compound-dp__products')) {
    new Swiper(".compound-dp__products", {
      slidesPerView: "auto",
      spaceBetween: 10,
    });
  }
}
function productSlider() {

  if (document.querySelector('.product-slider__items')) {
    new Swiper(".product-slider__items", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      speed: 1200,
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        1024: {
          spaceBetween: 20,
        },
      }
    });
  }
}
function contactsSlider() {
  if (document.querySelector('.contact-block__slider')) {

    var swiper = new Swiper(".contact-block__thumbs", {
      spaceBetween: 30,
      slidesPerView: "auto",
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        1024: {
          spaceBetween: 30,
        },
      }
    });
    var swiper2 = new Swiper(".contact-block__slider", {
      spaceBetween: 30,
      effect: 'fade',
      slidesPerView: 1,

      thumbs: {
        swiper: swiper,
      },
    });
  }
}
function corpSlider() {

  if (document.querySelector('.slider-corp')) {
    new Swiper(".slider-corp", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      speed: 1200,
      centeredSlides: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
    });
  }
}

function tabsShopSlider() {
  if (document.querySelector('.tabs__slider')) {
    new Swiper(".tabs__slider", {
      slidesPerView: "auto",
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
    });
  }
}

function scrollHeader() {
  window.innerHeight / 2 < window.scrollY ? document.querySelector("body").classList.add("_fixed") : document.querySelector("body").classList.remove("_fixed");
}

var upVal = false
function scrollUp() {
  const btn = document.getElementById("up-btn");
  const observerDiv = document.querySelector('.menu-footer')

  if (observerDiv) {
    // Создаем новый observer (наблюдатель)
    let observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.isIntersecting
          ? btn.classList.remove('_fixed')
          : btn.classList.add('_fixed')

        // entry.isIntersecting && nameBlock === '.panel-product' ? document.querySelector('footer').classList.remove('_pb') : document.querySelector('footer').classList.add('_pb')
      });
    });

    // Прикрепляем его к «наблюдателю»
    observer.observe(observerDiv);
  }
}

function anchorUp() {
  window.scrollY > window.innerHeight / 1.2
    ? document.getElementById("up-btn").classList.add("in")
    : document.getElementById("up-btn").classList.remove("in");
}

function chatBtn() {
  document.querySelector('.chat-btn').classList.add('active')
}

function dropFooter() {
  const items = document.querySelectorAll('.menu-footer__item')

  if (items) {
    for (let i = 0; i < items.length; i++) {

      const btn = items[i].querySelector('.menu-footer__btn')

      btn.addEventListener('click', () => {

        items[i].classList.toggle('active')
      })
    }
  }
}
function filterControl() {
  const items = document.querySelectorAll('.filter__item'),
    btns = document.querySelectorAll('.filter__tab')
  if (items) {
    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i];
      btn.addEventListener('click', () => {
        items.forEach(e => e.dataset.id === btn.dataset.id ? e.classList.add('active') : e.classList.remove('active'))
      })
    }
  }
}
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

function popupDefault() {
  const btns = document.querySelectorAll('.openPopup'),
    popup = document.querySelector('.popup')
  if (popup)
    for (const btn of btns) {
      btn.addEventListener('click', () => {
        popup.querySelector('.popup__title').textContent = ''
        popup.querySelector('.popup__text').textContent = ''
        popup.querySelector('.popup__title').textContent = btn.dataset.title
        popup.querySelector('.popup__text').textContent = btn.dataset.text
        popup.classList.add('_active')

        document.querySelector('body').classList.add('_lock')
      })
    }

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains("popup")) {
      popup.classList.remove('_active')
      bgRemove()
      document.querySelector('body').classList.remove('_lock')
    }
  })
}

function dropHeadMenu() {
  const items = document.querySelectorAll('.burger-menu__drop')
  if (items)
    for (let i = 0; i < items.length; i++) {
      const btn = items[i].querySelector('.burger-menu__btn')
      btn.addEventListener('click', () => items[i].classList.toggle('active'))
    }
}

window.addEventListener(
  "resize",
  function () {
    dropFilter()
  },
  false
);


document.addEventListener("scroll", () => {
  scrollHeader()
  scrollUp()
  anchorUp()
})

document.addEventListener(
  "DOMContentLoaded",
  function () {
    popupDefault()
    dropFilter()
    tabs()
    validDelivery()
    downCart()
    playVideo()
    tabsSlider()
    compoundSlider()
    productSlider()
    contactsSlider()
    // corpSlider()
    if (window.innerWidth < 1023) tabsShopSlider()
    scrollHeader()
    isWebp();
    burger()
    breadcrumbs()
    dropFooter()
    dropHeadMenu()
    drop('.down', '.down__val')
    anchorTop("up-btn", "html");
    tabsDefault()
    downCa()
    tabsPad()
    filterControl()
    setTimeout(() => {
      castomScroll('.burger__body')
    }, 1000)
    setTimeout(() => {
      chatBtn()
    }, 3000)
    quantity()
    openPopup()
    if (window.innerWidth < 1024) setTimeout(() => { document.querySelector('.header').style.opacity = 1 }, 100)
    if (window.innerWidth < 1024) setTimeout(() => { castomScroll('.filter__list') }, 100)
    setTimeout(() => document.querySelector('body').classList.add('_start'), 10)
  },
  false
);

document.addEventListener("click", (e) => {
  closeAllSelect()

  if (e.target.closest(".openShow") || e.target.closest(".openShowFile")) {
    document.querySelectorAll("._active").forEach((e) => e.classList.remove("_active"));
    if (document.body.classList.contains("_lock")) document.body.classList.remove("_lock");
    if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
  }
  if (e.target.closest("._close")) {
    document.querySelectorAll("._active").forEach((e) => e.classList.remove("_active"));
    if (document.body.classList.contains("_lock")) document.body.classList.remove("_lock");
    if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
  }
});
