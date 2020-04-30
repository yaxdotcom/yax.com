/*eslint-env browser*/
/*global console*/
/* eslint no-console: "off" */
/* eslint-env es6 */
/* eslint-disable no-console */
/* eslint-disable func-style  */

/* Submits email address to Sendinblue for a subscription */

const form = document.getElementById('sib-form')

form.addEventListener("submit", function (event) {
    event.preventDefault();
    new FormData(form);
})

form.addEventListener("formdata", event => {
    const data = event.formData
    const options = {
        method: "POST",
        body: data
    }
    const url = "https://acd1fd2f.sibforms.com/serve/MUIEAFk728Pt5uBy4Et2Fl8P2421JWHQe68QmqTZVgBAOYnE2qmoPrhTJu_kffkqsGrUfLigIAARPi8w7xzzBVVGxIzWM4o3FjQoREOJkVTwcEGqv4bLIgb98ota9fvGX0WoRC008C8qB45BfUXH7t2DSIZ9e1Gg5SZrsgX19AH9IzQq24RWAxq8dLZW7N5uxbrl2o9PYAKGimuz"

    fetch(url, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .then(notice())
        .catch(err => console.log(err));
})

function notice() {
    document.getElementById('thank-you').style.display = 'block'
    document.getElementById('learn-how').style.display = 'none'
}
