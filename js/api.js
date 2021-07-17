$(document).ready(function() {
    let url = 'https://sivertillya-server.herokuapp.com/'
    console.log(localStorage.getItem('access_token'));
    $('#btnLogin').click(() => {
        let email = $("[name=\"email\"]").val();
        let password = $("[name=\"password\"]").val();
        login(email, password);
    });


    function saveToken(token) {
        sessionStorage.setItem('access_token', token);
    }

    async function login(email, password) {
        let user = {
            email: email,
            password: password
        }
        let response = await fetch(`${url}login`, {
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
});


