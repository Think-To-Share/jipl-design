import { from, fromEvent } from 'rxjs'
import { throttleTime, filter } from 'rxjs/operators'
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Typed from 'typed.js';
import gsap from 'gsap';
import ScrollTrigger  from 'gsap/ScrollTrigger';
import {tns} from 'tiny-slider/src/tiny-slider'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('load', () => {
    const ourBrandSection = document.querySelector('.our-brand-section')

    if(ourBrandSection) {
        const companyLogos = document.querySelectorAll('.company-section .company-logo')

        const brandSlider = tns({
            container: '.brand-slider-container',
            arrowKeys: true,
            mouseDrag: true,
            autoHeight: false,
            autoplay: true,
            nav: false,
            autoplayButtonOutput: false,
            controlsText: ["<i class='fas fa-chevron-left fa-3x'></i>", "<i class='fas fa-chevron-right fa-3x'></i>"],
            navPosition: 'bottom',
        })

        brandSlider.events.on('indexChanged', (info) => {
            from(companyLogos).subscribe(logo => logo.classList.remove('active'))

            const activeLogo = companyLogos[info.index - 1];
            if(activeLogo) {
                activeLogo.classList.add('active');
            }
        })

        from(companyLogos).subscribe(companyLogo => {
            fromEvent(companyLogo, 'click')
            .pipe(throttleTime('1000'))
            .pipe(filter((ev) => !companyLogo.classList.contains('active')))
            .subscribe((ev) => {
                const open_data = companyLogo.dataset.open

                brandSlider.goTo(open_data - 1)
            })
        })
    }

    SwiperCore.use([Navigation, Pagination]);

    var swiper = new Swiper('.swiper-container', {
        // slidesPerView: 2,
        // spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 70,
            },
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


