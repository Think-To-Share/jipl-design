window.addEventListener('load', adjustHeaderSpacing)

window.addEventListener('resize', adjustHeaderSpacing)

function adjustHeaderSpacing() {
    const header = document.querySelector('.page-header')
    const header_spacer = document.querySelector('.header-spacer')

    header_spacer.style.height = `${header.offsetHeight}px`
}
