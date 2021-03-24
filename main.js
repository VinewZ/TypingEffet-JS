const textArray = ['is fun','is cool ${emoji}', 'is exhausting']
const textSpan = document.querySelector('.textTypingEffect')
let textCurrentWord = 0, textCurrentLetter = 0
const typingDelay = 300
const eraseDelay = 200
const newWordDelay = 2000


function typeWord(){
    if(textCurrentLetter < textArray[textCurrentWord].length){
    textSpan.textContent += textArray[textCurrentWord].charAt(textCurrentLetter)
    textCurrentLetter++
    setTimeout(typeWord, typingDelay)
    } else (
        setTimeout(erase, newWordDelay)
    )
    
    function erase(){
        if(textCurrentLetter > 0){
            textSpan.textContent = textArray[textCurrentWord].substring(0, textCurrentLetter-1)
            textCurrentLetter--
            setTimeout(erase, eraseDelay)
        } else{
            textCurrentWord++
            if(textCurrentWord == textArray.length){
                textCurrentWord = 0
            }
            setTimeout(typeWord, typingDelay)
        }
    }
}

addEventListener('load', typeWord)