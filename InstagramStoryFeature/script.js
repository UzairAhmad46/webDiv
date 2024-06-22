const arr = [
  { dp: './images/Anjely.jpg', story: './images/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg' },
  { dp: './images/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg', story: './images/jernej-graj-MrdeY0sS3Wo-unsplash.jpg' },
  { dp: './images/pouriya-kafaei-dNmmjX2Owxk-unsplash.jpg', story: './images/napat-saeng-mVGW8j9rrC4-unsplash.jpg' },
  { dp: './images/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg', story: './images/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg.crdownload' },
]


let storiyan = document.querySelector('#storyan')

var clutter = ''
arr.forEach(function (elem, idx) {
  clutter += ` <div class="story">
              <img id="${idx}"  src="${elem.dp}" alt="" />
          </div>`
})


storiyan.innerHTML = clutter

storiyan.addEventListener('click', (dets) => {
  document.querySelector('#full-screen').style.display = ' block'
  document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`





  setTimeout(function () {
    documet.querySelector('#full-screen').style.display = "none"
  }, 3000);
})

