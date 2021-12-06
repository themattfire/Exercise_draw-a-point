const button = document.querySelector('#Btn')
const canvas = document.getElementById('myCanvas')

loadEvents()

function loadEvents() {
  window.addEventListener('load', DrawACircle)
  button.addEventListener('click', DrawAPoint)
}

function DrawACircle() {
  const ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.arc(150, 150, 100, 0, 2 * Math.PI)
  ctx.fillStyle = '#00afc1'
  ctx.fill()
}

function DrawAPoint() {
  const randomx = Math.floor(Math.random() * 300)
  const randomy = Math.floor(Math.random() * 300)
  const ptx = canvas.getContext('2d')
  ptx.beginPath()
  const point = ptx.arc(randomx, randomy, 5, 0, 2 * Math.PI)
  ptx.fillStyle = '#95ca3e'
  ptx.fill()
}
