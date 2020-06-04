/*eslint-env browser*/
/*global console*/
/* eslint no-console: "off" */
/* eslint-env es6 */
/* eslint-disable no-console */
/* eslint-disable func-style  */

/* Requests GitHub user authentication and redirects with form data */

// Client ID for application registered with GitHub as yax-localhost-test
const GITHUB_CLIENT_ID = "6fdfd2e72ae4345b0361"
const form = document.getElementById('github-oauth')
const confirmable = document.getElementsByClassName('confirmable');
const deploy_button = document.getElementById('deploy-button')
const confirm_button = document.getElementById('confirm-button')
const reset_link = document.getElementById('reset-link')
const repo_name = document.getElementById('repo-name')

form.addEventListener("submit", function (event) {
    event.preventDefault();
    new FormData(form);
})

reset_link.addEventListener("click", function () {
    form.reset()
    deploy_button.style.display = 'block'
    for (var i = 0; i < confirmable.length; i ++) {
        confirmable[i].style.display = 'none';
    }
})

form.addEventListener("formdata", event => {

    const data = {}
    for(let [name, value] of event.formData) {
        data[name] = value
    }

    const encoded_state = btoa(JSON.stringify(data));
    
    const url = new URL('https://github.com/login/oauth/authorize')
    url.searchParams.set('client_id', GITHUB_CLIENT_ID)
    url.searchParams.set('scope', 'user repo')
    url.searchParams.set('state', encoded_state)
    url.searchParams.set(
        'redirect_uri',
        'https://danielkehoe-github-auth.builtwithdark.com/auth_fail'
    )
    
    if (!('URLSearchParams' in window)) {
        alert("Your browser does not support JavaScript URLSearchParams. Please use a newer browser.")
    } else {
        confirm(url, data)
    }
    
})

function confirm(url, data) {
    confirm_button.href = url
    repo_name.innerHTML = data['repository']
    deploy_button.style.display = 'none'
    for (var i = 0; i < confirmable.length; i ++) {
        confirmable[i].style.display = 'block';
    }
}
