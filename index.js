var text = document.querySelector('#title')
var titles = ['Computer Scientist', 'Software Developer']
var currentTitle = 0;


setInterval(() => {
    currentTitle++;
    if(currentTitle >= titles.length){
        currentTitle = 0
    }

    text.innerHTML = `<h2>${titles[currentTitle]}</h2>`
}, 5000)