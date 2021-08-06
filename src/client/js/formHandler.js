function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formInput = document.getElementById('name').value

    if (Client.checkForUrl(formInput) !== null ) {
        console.log("::: Form Submitted :::");
        ( async (theUrl = '', results) => {
            console.log('Working :' , results);
            const myResponse = await fetch(theUrl, {
                method: 'POST',
                credentials: 'same-origin',
                mode:'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            try {
                const theNewData = await myResponse.json();
                console.log('The data has been received:', theNewData)
                return theNewData;
            } catch (err) {
                console.log('The Error ', err);
            }
        })('http://localhost:8081/test', { url: formInput })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })
    } else {
        alert(' This is not URL, Please try again ')
    }
}

export { handleSubmit }
