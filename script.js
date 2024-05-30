const choices = ['stone', 'paper', 'scissor']

const playerChoice = document.getElementsByClassName('user-choice')
const result = document.querySelector('.result')

function randChoice() {
    let choose = choices[parseInt(Math.random()*3)]
    return choose;
}

function give(text) {
    if (text === 'stone') {
        return "🪨"
    } else if (text === 'paper') {
        return "📜"
    } else if (text === 'scissor') {
        return "✂️"
    }
}

function win(userChoice, compuChoice) { 
    if(userChoice === 'stone'){
        if (compuChoice === 'stone') {
            result.innerHTML = "Draw";
        } else if (compuChoice === 'paper') {
            result.innerHTML = "Computer won";
        } else if (compuChoice === 'scissor') {
            result.innerHTML = "User won";
        }
    } else if (userChoice === 'paper') {
        if(compuChoice === 'stone') {
            result.innerHTML = "User won"
        } else if (compuChoice === 'paper') {
            result.innerHTML = "Draw"
        } else if (compuChoice === 'scissor') {
            result.innerHTML = "Computer won"
        }
    } else if (userChoice === 'scissor') {
        if(compuChoice === 'stone') {
            result.innerHTML = "Computer won"
        } else if (compuChoice === 'paper') {
            result.innerHTML = "User won"
        } else if (compuChoice === 'scissor') {
            result.innerHTML = "Draw"
        }
    }
}

document.querySelector('.left').addEventListener('click', (e) => {
    const otherChoice = randChoice()
    if (e.target.innerHTML === '🪨') {
        const parent = document.querySelector('.right')
        parent.children[1].innerHTML = "🪨" 
        parent.children[4].innerHTML = `${give(otherChoice)}`
        win('stone', otherChoice)
    } else if (e.target.innerHTML === '📜') {
        const parent = document.querySelector('.right')
        parent.children[1].innerHTML = "📜"
        parent.children[4].innerHTML = `${give(otherChoice)}`
        win('paper', otherChoice)
    } else if (e.target.innerHTML === '✂️') {
        const parent = document.querySelector('.right')
        parent.children[1].innerHTML = "✂️"
        parent.children[4].innerHTML = `${give(otherChoice)}`
        win('scissor', otherChoice)
    }
})



