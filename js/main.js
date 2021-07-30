




$(document).ready(function() {
    const PATH_URL = 'https://sivertillya-server.herokuapp.com/'
    const PATH_PROJECTS = 'projects/'
    const block = document.getElementById('projects_js');

    const block_project = ''

    const viewProject = (projects) => {
        for (let i = 0; i < projects.length; i++){
            console.log(projects[i]['additional_name_link'] != 'null');
            if ((projects[i]['additional_name_link'] != 'null') && (projects[i]['additional_link'] != 'null')) {
                block.innerHTML += `<div class="project"><a class="project_img" href="${projects[i]['url_photo']}" data-fancybox data-caption="Caption #1"><img src="${projects[i]['url_photo']}" alt=""></a><a href="${projects[i]['project_link']}" target="_blank"><h2>${projects[i]['project_name']}</h2></a><a href="${projects[i]['additional_link']}" target="_blank"><h4>${projects[i]['additional_name_link']}</h4></a><p>${projects[i]['detail'].split('\n')[0]}</p><p>${projects[i]['detail'].split('\n')[1]}</p></div>`
            } else {
                block.innerHTML += `<div class="project"><a class="project_img" href="${projects[i]['url_photo']}" data-fancybox data-caption="Caption #1"><img src="${projects[i]['url_photo']}" alt=""></a><a href="${projects[i]['project_link']}" target="_blank"><h2>${projects[i]['project_name']}</h2></a><p>${projects[i]['detail'].split('\n')[0]}</p><p>${projects[i]['detail'].split('\n')[1]}</p></div>`
            }
        }
        console.log(projects.length);
    }

    const getProject = async () => {
        let response = await fetch(`${PATH_URL}${PATH_PROJECTS}`, {
            method: 'GET',
        })
        let json = await response.json()
        if (response.ok) {
            viewProject(json)
        } else {
            console.log(json);
        }
    }

    getProject()


























    function scrollTo( target ) {
        if( target.length ) {
            $("html, body").stop().animate( { scrollTop: target.offset().top }, 1000);
        }
    }

    $(".scroll_link_js").on("click", function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        scrollTo( $(href) );
    });
});