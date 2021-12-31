document.addEventListener('DOMContentLoaded', () => {

    // card options // ----------------
    const cardArray = [
        {
            name: 'avocado',
            img: '.\assets\images\avocado(1).png',
        },
        {
            name: 'bananas',
            img: '.\assets\images\bananas-coloured(1).png',
        },
        {
            name: 'pineapple',
            img: '.\assets\images\pineapple(1).png',
        },
        {
            name: 'strawberry',
            img: '.\assets\images\strawberry(1).png',
        },
        {
            name: 'watermelon',
            img: '.\assets\images\watermelon-slice(1).png',
        },

    ]


    const grid = document.querySelector('.grid')

    // create grid board for the memory game // 
  function createBoard() {
      for (let i = 0; i < cardArray.length; i++){
          var card = document.createElement('img')
          card.setAttribute('src', '.\assets\images\empty-board-tile.png');
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipcard)
      }
  }

}