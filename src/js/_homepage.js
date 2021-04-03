import { from, fromEvent } from 'rxjs'
import { throttleTime, filter } from 'rxjs/operators'
import {tns} from 'tiny-slider'

window.addEventListener('load', () => {
    const ourBrandSection = document.querySelector('.our-brand-section')
    document.querySelector('.company-section .company-logo:first-child').classList.add('active')

    if(ourBrandSection) {
        document.querySelector('.company-section .company-logo:first-child').classList.add('active')
        ourBrandSection.querySelector('.logo-item:first-child').classList.add('active')
        const companyLogos = document.querySelectorAll('.company-section .company-logo')
        const logoItems = ourBrandSection.querySelectorAll('.logo-item')

        from(companyLogos).subscribe(companyLogo => {
            fromEvent(companyLogo, 'click')
            .pipe(throttleTime('1000'))
            .pipe(filter((ev) => !companyLogo.classList.contains('active')))
            .subscribe((ev) => {
                const open_data = companyLogo.dataset.open

                from(logoItems).subscribe(logoItem => logoItem.classList.remove('active'))
                from(companyLogos).subscribe(logo => logo.classList.remove('active'))

                companyLogo.classList.add('active')
                ourBrandSection.querySelector(`.logo-item[data-logo="${open_data}"]`).classList.add('active')
            })
        })
    }
})
