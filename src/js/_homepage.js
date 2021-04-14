import { from, fromEvent } from 'rxjs'
import { throttleTime, filter } from 'rxjs/operators'
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Typed from 'typed.js';
import gsap from 'gsap';
import ScrollTrigger  from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('load', () => {
    const ourBrandSection = document.querySelector('.our-brand-section')
    document.querySelector('.company-section .company-logo:first-child').classList.add('active')

    // if(ourBrandSection) {
    //     document.querySelector('.company-section .company-logo:first-child').classList.add('active')
    //     ourBrandSection.querySelector('.logo-item:first-child').classList.add('active')
    //     const companyLogos = document.querySelectorAll('.company-section .company-logo')
    //     const logoItems = ourBrandSection.querySelectorAll('.logo-item')

    //     from(companyLogos).subscribe(companyLogo => {
    //         fromEvent(companyLogo, 'click')
    //         .pipe(throttleTime('1000'))
    //         .pipe(filter((ev) => !companyLogo.classList.contains('active')))
    //         .subscribe((ev) => {
    //             const open_data = companyLogo.dataset.open

    //             from(logoItems).subscribe(logoItem => logoItem.classList.remove('active'))
    //             from(companyLogos).subscribe(logo => logo.classList.remove('active'))

    //             companyLogo.classList.add('active')
    //             ourBrandSection.querySelector(`.logo-item[data-logo="${open_data}"]`).classList.add('active')
    //         })
    //     })
    // }

    SwiperCore.use([Navigation, Pagination]);

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      const bannerHeader = document.querySelector('.header-text')

      if (bannerHeader) {

          const bannerHeaderText = bannerHeader.textContent
          bannerHeader.textContent = ""
          new Typed('.header-text', {
              strings: [bannerHeaderText],
              cursorChar: '',
              typeSpeed: 50
          });
      }

      const cardHeaders = document.querySelectorAll('.news-title')

      ScrollTrigger.create({
          trigger:".news-section",
          onEnter:(self)=>{
              cardHeaders.forEach((cardHeader)=>{
                  const cardHeaderText = cardHeader.textContent
                  cardHeader.textContent = ""
                  new Typed(cardHeader, {
                      strings: [cardHeaderText],
                      cursorChar: '',
                      typeSpeed: 80
                  });
              })
          }
    })

})


