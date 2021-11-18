const slider = document.querySelector('.slider-showcase')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const Btn = document.querySelector('.Btn')


const slides = document.querySelectorAll('.slider-img')
let speed = 4000;
let counter = 1;
let slideId;

const slidewidth = slides[0].clientWidth;

slider.style.transform = `translateX(${ - slidewidth * counter}px)`

const startSlide = () =>{
   slideId =  setInterval(() =>{

       nextSlide()
    },speed)
}

const nextSlide = () =>{
    if (counter >= slides.length - 1) {
        return
    }
    counter ++ 
    slider.style.transform = `translateX(${ - slidewidth * counter}px)`
    slider.style.transition = '.7s ease'

}
const prevSlide = () =>{
    if (counter <= 0) {
        return
    }
    slider.style.transition = '.7s ease'
    counter --
    slider.style.transform = `translateX(${ - slidewidth * counter}px)`

}

nextBtn.addEventListener('click',nextSlide)
prevBtn.addEventListener('click',prevSlide)

// mouse events
slider.addEventListener('mouseenter', ()=>{
    clearInterval(slideId)
})
Btn.addEventListener('mouseenter', ()=>{
    clearInterval(slideId)
})
slider.addEventListener('mouseleave' , startSlide)


slider.addEventListener('transitionend', () =>{
    
    if (slides[counter].id === 'lastClone') {
        slider.style.transition = 'none'
        counter = slides.length - 2;
        slider.style.transform = `translateX(${ - slidewidth * counter}px)`
    }

    if (slides[counter].id === 'firstClone') {
        slider.style.transition = 'none'
        counter = slides.length-counter
        slider.style.transform = `translateX(${ - slidewidth * counter}px)`
    }
    
})

startSlide()





// back to top botton
const backToTop = document.querySelector('.back-to-top')

window.addEventListener("scroll", () =>{
    const scrollheight = window.pageYOffset;
    if (scrollheight > 500) {
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
})

