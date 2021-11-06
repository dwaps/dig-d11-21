const formConnect = document.getElementById('form-connect')
const formDisconnect = document.getElementById('form-disconnect')
const name = document.getElementById('name')
const pasword = document.getElementById('password')
const connect = document.getElementById('connect')
const disconnect = document.getElementById('disconnect')
const pseudoUser = document.getElementById('pseudo-user')


if (sessionStorage.getItem('user')) {
    connect.classList.add('toggle-off')
    const user = JSON.parse(sessionStorage.user)
    pseudoUser.innerHTML = "Vous êtes maintenant connecter : " + user.name
} else {
    disconnect.classList.add('toggle-off')
}

formConnect.addEventListener('submit', (e) => {
e.preventDefault()
    const user = {
        'name' : name.value, 
        'mdp' : pasword.value
    }
    sessionStorage.setItem('user', JSON.stringify(user));

    connect.classList.add('toggle-off')
    disconnect.classList.remove('toggle-off')
    pseudoUser.innerHTML = "Vous êtes maintenant connecter : " + name.value
})

formDisconnect.addEventListener('submit', (e) => {
    e.preventDefault()
    sessionStorage.removeItem('user');
    connect.classList.remove('toggle-off')
    disconnect.classList.add('toggle-off')
    pseudoUser.innerHTML = ""
    })