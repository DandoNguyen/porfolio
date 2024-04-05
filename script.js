$(document).ready(() => {
    let firstSection = document.querySelectorAll('section.firstSection');
    firstSection[0].classList.add('show-animate')
});

var sections = document.querySelectorAll('section')

window.onscroll = () => {
    sections.forEach((sec) => {
        var scrollDistance = window.scrollY;
        var secDistance = sec.offsetTop; //this is the outer top border to the parent edge
        
        if (scrollDistance >= secDistance - 300) {
            sec.classList.add('show-animate')
        }
        else {
            sec.classList.remove('show-animate')
        }
    })
}
