
const isStatus = document.getElementById("Stenger")
const addFriend = document.getElementById('Add')

let check = 0

addFriend.addEventListener('click', () => {

  if (check == 0) {
    isStatus.innerHTML = 'Friend'
    isStatus.style.color = 'green'
    addFriend.innerHTML = 'Remove Friend'
    check = 1;
  } else {
    isStatus.innerHTML = 'Strenger'
    isStatus.style.color = 'red'
    addFriend.innerHTML = 'Add Friend'
    check = 0
  }
})