import { from, fromEvent } from 'rxjs'
import { every, scan, throttleTime, filter } from 'rxjs/operators'

window.addEventListener('load', () => {
    const ourBrandSection = document.querySelector('.our-brand-section')

    if(ourBrandSection) {
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