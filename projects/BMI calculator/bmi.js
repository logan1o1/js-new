const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#results');

    if (weight === '' || weight <= 0) {
        result.innerHTML = `please enter ur weight in kg`;
    }else if (height === '' || height <= 0 ) {
        result.innerHTML = `please enter ur height in cm`;
    }else{
        const bmiVal = (weight / (height ** 2 / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmiVal}</span>`;
    }
})