const btnEl = document.getElementById('btn');

const jokeEl = document.getElementById('joke');


const apiKey = 'RVr0FMv+mNomVIyv+1PX0w==vDRvQd6blomcAgYJ';

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
};


const apiURL ='https://api.api-ninjas.com/v1/dadjokes?limit=1';


async function getJock() {

    try {
        jokeEl.innerText = 'Updating...'
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a joke';

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = 'An error happend, try again later';
        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a joke';
    }



    
}


btnEl.addEventListener('click', getJock);