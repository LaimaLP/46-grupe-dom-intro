console.log("veikia")
const h1DOM = document.querySelector('h1')

h1DOM.innerText = 'Movies...(.)(.)'

const movies = [
    'Pretendent',
    'Matrix',
    'Walker:Texas Ranger',
    'Her name Nikita',
    'Shrek',
    'Sphera',
    'A Team',
    'Duncan MacLeod'
];

const ulDOM = document.getElementsByTagName('ul')[0]

        // console.log(ulDOM)
let moviesHTML = '';

    for(let i=0; i<movies.length; i++){
        const movieTitle = movies[i];
        moviesHTML += `<li>${movieTitle}</li>`
    }


ulDOM.innerHTML = moviesHTML;