const button = document.querySelector('#Btn')
const canvas = document.getElementById('myCanvas')

loadEvents()

function loadEvents() {
  window.addEventListener('load', DrawACircle)
  button.addEventListener('click', DrawAPoint)
}

function DrawACircle() {
  var ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.arc(150, 150, 100, 0, 2 * Math.PI)
  ctx.fillStyle = '#00afc1'
  ctx.fill()
}

function DrawAPoint() {}
