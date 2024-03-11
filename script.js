const title = document.querySelector('.title')
const fundo1 = document.querySelector('.fundo1')
const fundo2 = document.querySelector('.fundo2')
const rightrobot = document.querySelector('.rightrobot')
const leftrobot = document.querySelector('.leftrobot')
const centerrobot = document.querySelector('.centerrobot')

document.addEventListener('scroll', function(){
    let value = window.scrollY

    title.style.marginTop = value * 0.5 + 'px'

    //fundo1.style.marginBottom = -value * 1.1 + 'px'

    rightrobot.style.marginBottom = -value * 2 + 'px'
    leftrobot.style.marginBottom = -value *2  + 'px'
    centerrobot.style.marginBottom = -value * 1.5 + 'px'

})