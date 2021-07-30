const token = sessionStorage.getItem('access_token');
if (!token) location.href = 'file:///G:/project/MY-GIT/home/login/index.html';

const PATH_URL = 'https://sivertillya-server.herokuapp.com/'
const PATH_CREATE = 'create_project/'

$(document).ready(() => {
    const errorText = document.querySelector('.error_text_js');

    const logout = () => {
        sessionStorage.clear();
        location.reload();
    }

    const createProject = async () => {
        console.log("asdasdasdasdsa");
        let project_name = $("[name=\"project_name\"]").val();
        let project_link = $("[name=\"project_link\"]").val();
        let additional_name_link = $("[name=\"additional_name_link\"]").val();
        let additional_link = $("[name=\"additional_link\"]").val();
        let date = $("[name=\"date\"]").val();
        let url_photo = $("[name=\"url_photo\"]").val();
        let detail = $("[name=\"detail\"]").val();

        const data = {
            project_name: project_name,
            project_link: project_link,
            additional_name_link: additional_name_link,
            additional_link: additional_link,
            date: date,
            url_photo: url_photo,
            detail: detail
        }

        let response = await fetch(`${PATH_URL}${PATH_CREATE}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let json = await response.json()
        if (response.ok) {
            errorText.innerHTML = null
            console.log(json);
        } else {
            // viewError(error);
            errorText.innerHTML = json['error']
            console.log(json);
        }
    }

    document.querySelector('#btnLogout').onclick = logout;
    document.querySelector('#btnCreateProject').onclick = createProject;
});

