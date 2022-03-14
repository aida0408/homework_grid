const squares = document.querySelectorAll('.square')

squares.forEach((square) => {
    square.addEventListener('click', () => {
        squares.forEach((square) => {
            square.classList.remove('darken')
        })
        square.classList.add('darken')
    })
})