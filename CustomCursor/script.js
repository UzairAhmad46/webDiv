const main = document.querySelector("#main")
const cursor = document.querySelector('.cursor')

main.addEventListener('mousemove', (dets) => {
  cursor.style.left = dets.x + 'px'
  cursor.style.top = dets.y + 'px'
})