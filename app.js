const buttonDraw = document.querySelector('#draw')
const buttonErase = document.querySelector('#erase')
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')
const circle = ctx.arc(150, 150, 100, 0, 2 * Math.PI)

loadEvents()

function loadEvents() {
  window.addEventListener('load', drawACircle)
  buttonDraw.addEventListener('click', drawAPoint)
  buttonErase.addEventListener('click', clearEverything)
}

function drawACircle() {
  ctx.beginPath()
  ctx.arc(150, 150, 100, 0, 2 * Math.PI)
  ctx.fillStyle = '#00afc1'
  ctx.fill()
}

function drawAPoint() {
  const randomx = Math.floor(Math.random() * 300)
  const randomy = Math.floor(Math.random() * 300)
  const ptx = canvas.getContext('2d')
  ptx.beginPath()
  const point = ptx.arc(randomx, randomy, 5, 0, 2 * Math.PI)
  ptx.fillStyle = '#95ca3e'
  ptx.fill()
  if (randomx > 50 && randomx < 250 && randomy > 50 && randomy < 250) {
    showMessage("It's a match!")
  } else {
    showMessage("It's not a match, try again", 'error')
  }
}

function clearEverything() {
  ctx.clearRect(0, 0, 300, 300)
  drawACircle()
}

function showMessage(message, type) {
  const messageExists = document.querySelector('.new__div')

  if (!messageExists) {
    const divMessage = document.createElement('div')
    divMessage.classList.add('new__div')

    if (type === 'error') {
      divMessage.classList.add('alert')
    } else {
      divMessage.classList.add('success')
    }

    divMessage.textContent = message

    document.querySelector('.container').insertBefore(divMessage, document.querySelector('#canva', '#buttons'))

    setTimeout(() => {
      divMessage.remove()
    }, 1500)
  }
}
