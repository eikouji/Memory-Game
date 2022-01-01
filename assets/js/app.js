document.addEventListener('DOMContentLoaded', () => {
    // card options // ----------------
    const cardArray = [
        {
            name: 'avocado',
            img: './assets/images/avocado-icon.png',
        },
        {
            name: 'bananas',
            img: './assets/images/bananas-coloured.png',
        },
        {
            name: 'brioche',
            img: './assets/images/brioche-icon.png',
        },
        {
            name: 'cherry',
            img: './assets/images/cherries.png',
        },
        {
            name: 'coffee',
            img: './assets/images/coffee-icon.png',
        },
        {
            name: 'fizzy-soda',
            img: './assets/images/cup-with-straw-icon.png',
        },
        {
            name: 'kiwi-fruit',
            img: './assets/images/kiwi-icon.png',
        },   
        {
            name: 'pear',
            img: './assets/images/pear-icon.png',
        },
        {
            name: 'pineapple',
            img: './assets/images/pineapple-icon.png',
        },
        {
            name: 'sandwich',
            img: './assets/images/sandwich-icon.png',
        },
        {
            name: 'strawberry',
            img: './assets/images/strawberry-icon.png',
        },
        {
            name: 'watermelon',
            img: './assets/images/watermelon-slice.png',
        },
        


    ]
  
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
      let cardsChosen = []
      let cardsChosenId = []
      let cardsWon = []

    // create grid board for the memory game, starting with picnic blanket pattern img // 
  function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement('img')
          card.setAttribute('src', './assets/images/picnic-blanket.png');
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          grid.appendChild(card)
      }
  }

  // check for matches // 
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]

 // a match is found // 
      if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', './assets/images/empty-board-tile.png')
          cards[optionTwoId].setAttribute('src', './assets/images/empty-board-tile.png')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
          alert('You found a matching pair!')
          cards[optionOneId].setAttribute('src', './assets/images/empty-board-tile.png')
          cards[optionTwoId].setAttribute('src', './assets/images/empty-board-tile.png')
          
          cardsWon.push(cardsChosen)
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard)

// if cards do not match, flip card back over to show picnic blanket img card backing //
      } else {
          cards[optionOneId].setAttribute('src', './assets/images/picnic-blanket.png')
          cards[optionTwoId].setAttribute('src', './assets/images/picnic-blanket.png')
          alert('No match, try again!')
      }
        cardsChosen = []
        cardsChosenId = []

// displays the game score //
        resultDisplay.textContent = cardsWon.length
          if (cardsWon.length === cardArray.length/2) {
              resultDisplay.textContent = 'Congratulations! You found ALL the matches! Enjoy your picnic!'
          }
      }

  // flip your card // 
  function flipCard() {
      let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 600)
        }
  }

  createBoard()

})
