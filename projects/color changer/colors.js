const btns = document.querySelectorAll('.button')
const body = document.querySelector('body')


btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id
            body.style.color = 'white'
        }
        if (event.target.id === 'black') {
            body.style.backgroundColor = event.target.id
            body.style.color = 'white'
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id
            body.style.color = 'white'
        }else {
            body.style.backgroundColor = event.target.id
            body.style.color = 'black'
        }
    })
})