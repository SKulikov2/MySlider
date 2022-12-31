const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')

let slideNumber = 1
const length = images.length

for(let i = 0; i < length; i++) {
    const div = document.createElement('div')
    div.className = 'button'
    bottom.appendChild(div)
}

//Красим первый элемент в белый цвет
const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'white'

//Функция для корректировки цвета кнопок
const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent'
    })
}


//переключаем слайды нажатием на вновь созданные кнопки внизу и меняем цвет кнопок
buttons.forEach((button, index) => {
    button.addEventListener('click',()=>{
        resetBg()
slider.style.transform = `translateX(-${index * 600}px)`
slideNumber = index + 1
button.style.backgroundColor = 'white'
    })
})


//листаем вправо
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 600}px)`
    slideNumber++
}

// листаем влево
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 600}px)`
    slideNumber--
}

//к первому слайду когда долистали до конца слайдера
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    slideNumber = 1
}

// Функция для изменения цвета
const changeColor = () => {
    resetBg()
    buttons[slideNumber-1].style.backgroundColor = 'white'
}

// к последнему слайду
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*600}px)`
    slideNumber = length
}


right.addEventListener('click', ()=>{
    slideNumber < length ? nextSlide() : getFirstSlide()
    changeColor()
})


left.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : getLastSlide()
    changeColor()
})


