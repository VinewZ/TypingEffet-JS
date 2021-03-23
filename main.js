const wordsArray = ['is fun', 'is cool 😎', 'is exchausting 🤔']
const textTyped = document.querySelector('.textTypingEffect')
let currentLetterTyped = 0
let currentWord = 0
const typingDelay = 300
const erasingDelay = 200
const newWordDelay = 2000

function typeWord(){
    if (currentLetterTyped < wordsArray[currentWord].length){
        textTyped.textContent += wordsArray[currentWord].charAt(currentLetterTyped)
        currentLetterTyped++
        setTimeout(typeWord, typingDelay)
    } else {
        setTimeout(erase, newWordDelay)
    }
}
function erase(){
    if (currentLetterTyped > 0){
        textTyped.textContent = wordsArray[currentWord].substring(0, currentLetterTyped-1)
        currentLetterTyped--
        setTimeout(erase, erasingDelay)
    } else{
        currentWord++
        if(currentWord == wordsArray.length){
            currentWord = 0
        }
        setTimeout(typeWord, typingDelay + 500)
    }
}
window.addEventListener("load", typeWord);