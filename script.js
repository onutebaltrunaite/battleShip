const shipContainer = document.getElementById('shipContainer')

function getSquares() {
    for (let x = 0; x < 100; x++) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        cell.setAttribute('id', x)
        cell.addEventListener('click', openCell)
        shipContainer.appendChild(cell)
    }
    generateShip1(4)
    generateShip2(3)
    generateShip3(2)
    generateShip4(1)
    
}
getSquares()

let usedNumber = []

function generateShip1(num) {

    for (let x = 0; x < num; x++) {
        let random = Math.round(Math.random()*100)
        // usedNumber.push(random)
        document.getElementById(`${random}`).classList.add('ship')
    }
    
}
function generateShip2(num) {
    for (let x = 0; x < num; x++) {
        if (Math.random() > 0.5) {
            let random = Math.round(Math.random()*98)
            document.getElementById(`${random}`).classList.add('ship')
            document.getElementById(`${random+1}`).classList.add('ship')
        } else {
            let random = Math.round(Math.random()*89)
            document.getElementById(`${random}`).classList.add('ship')
            document.getElementById(`${random+10}`).classList.add('ship')
        }

    }
}
function generateShip3(num) {
    for (let x = 0; x < num; x++) {
        if (Math.random() > 0.5) {
            let random = Math.round(Math.random()*97)
            document.getElementById(`${random}`).classList.add('ship')
            document.getElementById(`${random+1}`).classList.add('ship')
            document.getElementById(`${random+2}`).classList.add('ship')
        } else {
            let random = Math.round(Math.random()*79)
            document.getElementById(`${random}`).classList.add('ship')
            document.getElementById(`${random+10}`).classList.add('ship')
            document.getElementById(`${random+20}`).classList.add('ship')
        }
    }
}

function generateShip4(num) {
    for (let x = 0; x < num; x++) {
        if (Math.random() > 0.5) {
            let random = Math.round(Math.random()*96)
            document.getElementById(`${random}`).classList.add('ship')
            document.getElementById(`${random+1}`).classList.add('ship')
            document.getElementById(`${random+2}`).classList.add('ship')
            document.getElementById(`${random+3}`).classList.add('ship')
        } else {
            let random = Math.round(Math.random()*69)
            document.getElementById(`${random}`).classList.add('ship')
            document.getElementById(`${random+10}`).classList.add('ship')
            document.getElementById(`${random+20}`).classList.add('ship')
            document.getElementById(`${random+30}`).classList.add('ship')
        }
    }
}


function openCell(event) {
    if (event.target.classList[1] === "ship") {
        event.path[0].style.backgroundColor = 'red'
    } else {
        event.path[0].style.backgroundColor = 'gray'
    }
    
    console.log(event)
}