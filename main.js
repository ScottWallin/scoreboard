// DATA
let clickCount = 0
let mortalsScore = 0
let godsScore = 0
let plusOne = 1
let plusThree = 3

function addMortalsOne() {
  clickCount++
  mortalsScore += plusOne
  console.log('the mortal1')
  drawMortalsScore()
}

function addMortalsThree() {
  clickCount++
  mortalsScore += plusThree
  console.log('the mortal3')
  drawMortalsScore()
}

function addGodsOne() {
  clickCount++
  godsScore += plusOne
  console.log('the god 1')
  drawGodsScore()
}

function addGodsThree() {
  clickCount++
  godsScore += plusThree
  console.log('the god 3')
  drawGodsScore()
}

function drawMortalsScore() {
  // @ts-ignore
  document.getElementById('mortalScore').textContent = `${mortalsScore}`
}
function drawGodsScore() {
  // @ts-ignore
  document.getElementById('godScore').textContent = `${godsScore}`
}

// come back to this //
// function reset()