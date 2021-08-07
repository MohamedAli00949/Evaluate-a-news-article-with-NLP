function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formInput = document.getElementById('name').value
    const validUrl = document.querySelector('.results')

    Client.checkForUrl(formInput)

    if ( validUrl.hasAttribute('data-valid') === true ) {
        console.log("::: Form Submitted :::");
        ( async (theUrl = '', results = {}) => {
            console.log('Working :' , results);
            const myResponse = await fetch(theUrl, {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(results)
            });
            try {
                const theNewResults = await myResponse.json();
                console.log('The data has been received:', theNewResults)
                return theNewResults;
            } catch (err) {
                console.log('The Error ', err);
            }
        })('http://localhost:2000/test', { url: formInput })
        .then((res) => {         
            document.getElementById("model").innerHTML = `The model is <span>${res.model}</span>`;
            document.getElementById("agreement").innerHTML = `The agreement is<span> ${res.agreement}</span>`;
            document.getElementById("score_tag").innerHTML = `The score tag is<span> ${res.score_tag}</span>`;
            document.getElementById("subjectivity").innerHTML = `The subjectivity is<span> ${res.subjectivity}</span>`;
            document.getElementById("confidence").innerHTML = `The confidence is<span> ${res.confidence}</span>`;
            document.getElementById("irony").innerHTML = `The irony is<span> ${res.irony} </span>`;
            document.getElementById("text").innerHTML =  `The text is<span> ${res.sentence_list[0].text} </span>`;
        })
    } else {
        document.querySelector("#results").innerHTML = ' This is not URL, Please try again '
        alert(' This is not URL, Please try again ')

    }
}

export { handleSubmit }
