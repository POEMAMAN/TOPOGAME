let timer;
const TOPO_SWICHT_TIME = 1000;

const holes = [
    document.querySelector('.hole1'),
    document.querySelector('.hole2'),
    document.querySelector('.hole3'),
    document.querySelector('.hole4'),
    document.querySelector('.hole5'),
    document.querySelector('.hole6'),
]


for (const hole$$ of holes) {
    hole$$.addEventListener('click', whack)
}

let timeUp = true;

function startGame () {
    timer = setInterval(changeTopo, TOPO_SWICHT_TIME);
    timeUp = false;
    score = 0;
    setTimeout(endGame,15000)
    updateScoreBoard()
}

function getRandomHole () {
    return Math.floor(Math.random() * 6);
}

function changeTopo () {
    eraseUp ();
    const randomHole$$ = holes[getRandomHole()];
    randomHole$$.classList.add('up');
    console.log('Topo cambia');
}

function whack () {
    if (!timeUp && this.classList.contains('up')) {
        this.classList.remove('up');
        addpoint()
    }
}

function addpoint () {
    score++;        
    updateScoreBoard();
}

function updateScoreBoard () {
    const scoreBoard$$ = document.querySelector('.score')
    scoreBoard$$.textContent = score;
}

function endGame () {
    clearInterval(timer);
    eraseUp ();
    }

function eraseUp () {
    for (const hole$$ of holes) {
        hole$$.classList.remove('up');}
}


