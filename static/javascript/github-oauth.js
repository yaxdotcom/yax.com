/*eslint-env browser*/
/*global console*/
/* eslint no-console: "off" */
/* eslint-env es6 */
/* eslint-disable no-console */
/* eslint-disable func-style  */

/* Submits form data to GitHub for user authentication */

// Client ID for application regsietred as yax-localhost-test
const GITHUB_CLIENT_ID = "6fdfd2e72ae4345b0361"

const form = document.getElementById('github-oauth')

form.addEventListener("submit", function (event) {
    console.log("heard a submit event")
    event.preventDefault();
    new FormData(form);
})

form.addEventListener("formdata", event => {

    const data = {}
    for(let [name, value] of event.formData) {
        data[name] = value
    }
    
    console.log("here's the form data")
    Object.keys(data).forEach((key) => console.log(key, data[key]))
    
    const json = JSON.stringify(data)
    console.log("here's the json")
    console.log(json)
    
    const encoded_state = btoa(json);
    console.log("here's the encoded")
    console.log(encoded_state)
    
    if (!('URLSearchParams' in window)) {
      console.log("browser does not support URLSearchParams")
    }

     const url = new URL('https://github.com/login/oauth/authorize')
//    const url = new URL('https://danielkehoe-github-auth.builtwithdark.com/fail')
    url.searchParams.set('client_id', GITHUB_CLIENT_ID)
    url.searchParams.set('scope', 'user repo')
    url.searchParams.set('state', encoded_state)
    url.searchParams.set(
        'redirect_uri',
        'https://danielkehoe-github-auth.builtwithdark.com/auth_redirect'
    )
    
    console.log("here's the URI")
    console.log(url)
    
    const options = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Origin':	'yax.com',
            'Accept': 'application/vnd.github.v3.full+json'
    }
        
    }
      
    fetch(url, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
})
