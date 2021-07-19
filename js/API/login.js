let PATH_URL = 'https://sivertillya-server.herokuapp.com/'
let PATH_LOGIN = 'login/'

$('#btnLogin').click(() => {
    let email = $("[name=\"email\"]").val();
    let password = $("[name=\"password\"]").val();
    login(email, password);
});

function saveToken(token) {
    sessionStorage.setItem('access_token', token);
}

async function login(email, password) {
    alert()
    let user = {
        email: email,
        password: password
    }
    let response = await fetch(`${PATH_URL}${PATH_LOGIN}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (response.ok) {
        let json = await response.json();

        let token = json['access_token']
        saveToken(token)
    } else {
        console.log(await response.json());
        localStorage.clear()

      }
}