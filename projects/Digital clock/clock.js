const clock = document.querySelector('#clock')



setInterval(function () {
    const curdate = new Date().toLocaleTimeString();
    // console.log(curdate);
    clock.innerHTML = curdate
}, 1000)
