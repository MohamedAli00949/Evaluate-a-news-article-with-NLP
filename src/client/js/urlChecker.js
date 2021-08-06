function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);

    if (validUrl.isUri(suspect)){
        console.log('Looks like an URI');
    } else {
        alart('Not a URI');
    }
}

export { checkForUrl }
