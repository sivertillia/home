const token = sessionStorage.getItem('access_token');
if (!token) location.href = 'file:///G:/project/MY-GIT/home/login/index.html';

$(document).ready(() => {
    const logout = () => {
        sessionStorage.clear();
        location.reload();
    }

    const createProject = async () => {
        let nameProject = $("[name=\"name\"]").val();
        let linkProject = $("[name=\"link\"]").val();
        let nameAdditionalLink = $("[name=\"name_additional_link\"]").val();
        let additionalLink = $("[name=\"additional_link\"]").val();
        let description = $("[name=\"description\"]").val();
        let date = $("[name=\"date\"]").val();
        let img = $("[name=\"img\"]").val();
        console.log(typeof(img));

        var base64ImageContent = img.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    document.querySelector('#btnLogout').onclick = logout;
    document.querySelector('#btnCreateProject').onclick = createProject;
});

