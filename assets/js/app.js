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
  
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
      var cardsChosen = []
      var cardsChosenId = []
      var cardsWon = []

    // create grid board for the memory game // 
  function createBoard() {
      for (let i = 0; i < cardArray.length; i++){
          var card = document.createElement('img')
          card.setAttribute('src', '.\assets\images\empty-board-tile.png');
          card.setAttribute('data-id', i)
          // card.addEventListener('click', flipCard)
          grid.appendChild(card)
      }
  }

  // check for matches // 
  function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1]) {
          alert('WOOHOO! You found a matching pair!')
          card[optionOneId].setAttribute('src', '.\assets\images\empty-board-tile.png')
          card[optionTwoId].setAttribute('src', '.\assets\images\empty-board-tile.png')
          cardsWon.push(cardsChose)
      } else {
          cards[optionOneId].setAttribute('src', '.\assets\images\chBlueWhite(1).png')
          cards[optionTwoId].setAttribute('src', '.\assets\images\chBlueWhite(1).png')
          alert('=( No match! =( Try again!')
      }
        cardsChosen = []
        cardsChosenId = []
        resultsDisplay.textContent = cardsWon.length
          if (cardsWon.le)
        }
  }

  // flip your card // 
  function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardID].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
  }

  createBoard()
