const textArray = ['is fun','is cool', 'is exhausting']
const textSpan = document.querySelector('.textTypingEffect')
const typingDelay = 400
const erasingDelay = 250
const newWordDelay = 2000
let currentLetter = 0, currentWord = 0

function type(){
    if(currentLetter < textArray[currentWord].length){
        textSpan.textContent += textArray[currentWord].charAt(currentLetter)
        currentLetter++
        setTimeout(type, typingDelay)
    } else{
        setTimeout(erase, newWordDelay)
    }
}

function erase(){
    if(currentLetter > 0){
        textSpan.textContent = textArray[currentWord].substring(0, currentLetter-1)
        currentLetter--
        setTimeout(erase, erasingDelay)
    } else{
        currentWord++
        if(currentWord == textArray.length){
            currentWord = 0
        }
        setTimeout(type, typingDelay)
    }
}

addEventListener('load', type)