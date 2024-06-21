const con = document.querySelector('#container')
const Heart = document.querySelector('i')


con.addEventListener("dblclick", () => {
  Heart.style.transform = ' translate(-50%, -50%) scale(1)'
  Heart.style.opacity = '0.8'
  setTimeout(() => {
    Heart.style.opacity = '0'
  }, 1000);
  setTimeout(() => {
    Heart.style.transform = ' translate(-50%, -50%) scale(0)'
  }, 3000);

})


