let login_button = false
let register_button = true

const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  if (register_button) {
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')
    modalBodyInput.value = recipient
  } 
  else {
    exampleModal.style.backgroundColor = rgb(110, 104, 116)
  }
  // Button that triggered the modal
})
//register sisitem
const login_exampleModal = document.getElementById('login_exampleModal')
login_exampleModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-whatever')
}
)
const registerSend = document.getElementById('send')
let loginModal = document.getElementById('loginModal')
let user_name
let parol
function getInputValues() {
  user_name = document.getElementById('user-name').value
  parol = document.getElementById('parol').value
  console.log(user_name);
}

let log_button = document.getElementById('login')
let reg_button = document.getElementById('register')

registerSend.addEventListener('click', (e) => {
  if (register_button) {
    getInputValues()
    let loginModal = document.getElementById('register-modal')
    loginModal.style.display = "none";
    exampleModal.style.backgroundColor = " rgba(255, 255, 255, 0)";
    console.log(log_button, reg_button);
    register_button = false
    login_button = true
    document.getElementById('register').classList.remove('btn-secondary')
    document.getElementById('register').classList.add('btn-primary')
    document.getElementById('login').classList.remove('btn-primary')
    document.getElementById('login').classList.add('btn-secondary')
  }
})
//login sistem
let login_user_name
let login_parol

const login_send = document.getElementById('login_send')

function getInputValueslogin() {
  login_user_name = document.getElementById('login_user-name').value
  login_parol = document.getElementById('login_parol').value
  console.log(login_user_name);
}

login_send.addEventListener('click', (e) => {
  if (login_button) {
    getInputValueslogin()
    let loginModal = document.getElementById('login_register-modal')
    loginModal.style.display = "none";
    login_exampleModal.style.backgroundColor = " rgba(255, 255, 255, 0)";
    let text = comparison()
    document.body.innerHTML = text
  }
})
function comparison() {
 if (user_name === login_user_name && parol === login_parol) {
  return location.href = 'file:///C:/Users/infinitech/OneDrive/Рабочий%20стол/Abdulloh%20JS/test/test-5/third.html'
 } 
 else{
  return location.href = 'file:///C:/Users/infinitech/OneDrive/Рабочий%20стол/Abdulloh%20JS/test/test-5/second.html'
 }
}