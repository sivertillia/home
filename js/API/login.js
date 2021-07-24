$(document).ready(() => {
    const PATH_URL = 'https://sivertillya-server.herokuapp.com/'
    const PATH_LOGIN = 'login/'

    const loginBtn = document.getElementById('btnLogin');
    const errorText = document.querySelector('.error_text_js');

    const saveToken = (token) => {
        sessionStorage.setItem('access_token', token);
    }

    const clickLogin = async (e) => {
        console.log('asdasd');
        let email = $("[name=\"email\"]").val();
        let password = $("[name=\"password\"]").val();
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
        let json = await response.json()
        if (response.ok) {
            errorText.innerHTML = null
            console.log(json);
            let token = json['access_token']
            saveToken(token)
            location.href = 'file:///G:/project/MY-GIT/home/admin/index.html'
        } else {
            // viewError(error);
            errorText.innerHTML = json['error']
            console.log(json);
            sessionStorage.clear();

        }
    }
    
    loginBtn.addEventListener('click', clickLogin);

    
});