const validUrl = require('valid-url');

function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);

    if (validUrl.isUri(inputText)){
        console.log('Looks like an URI');
        document.querySelector('.results').setAttribute("data-valid", 'yes') 
    } else {
        console.log('Not a URI');
        document.querySelector('.results').removeAttribute("data-valid")
        alert(' This is not URL, Please try again ')
    }
}

export { checkForUrl }
