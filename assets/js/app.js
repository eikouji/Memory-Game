document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'avocado',
        img: './assets/images/avocado-icon.png'
      },
      {
        name: 'bananas',
        img: './assets/images/bananas-coloured.png'
      },
      {
        name: 'brioche-bread',
        img: './assets/images/brioche-icon.png'
      },
      {
        name: 'cherries',
        img: './assets/images/cherries.png'
      },
      {
        name: 'coffee-cup',
        img: './assets/images/coffee-icon.png'
      },
      {
        name: 'soda-pop-drink',
        img: './assets/images/drink-with-straw-icon.png'
      },
      {
        name: 'kiwi-fruit',
        img: './assets/images/kiwi-icon.png'
      },
      {
        name: 'lollipop-icon',
        img: './assets/images/lollipop-icon.png'
      },
      {
        name: 'pear',
        img: './assets/images/Pear-icon.png'
      },
      {
        name: 'green-bell-pepper',
        img: './assets/images/pepper-icon.png'
      },
      {
        name: 'pineapple',
        img: './assets/images/pineapple-icon.png'
      },
      {
        name: 'sandwich',
        img: './assets/images/sandwich-icon.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './assets/images/picnic-blanket.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './assets/images/empty-board-tile.png')
        cards[optionTwoId].setAttribute('src', './assets/images/empty-board-tile.png')
        alert('You have clicked the same image, but did not find a matching pair! Try again!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', './assets/images/empty-board-tile.png')
        cards[optionTwoId].setAttribute('src', './assets/images/empty-board-tile.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', './assets/images/picnic-blanket.png')
        cards[optionTwoId].setAttribute('src', './assets/images/picnic-blanket.png')
        alert('Sorry, these cards to not match! Try again!')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }

  // copyWithin() copies array elements to another position in the array, does not add items to the array
  // array.copyWithin(target, start, end). target - required. start default is 0, end default is array length.
  // cardArray.copyWithin(6, 0, 0) after position 6, copy 







    /*
    function flipCard() {
        if (this.getAttribute('src') !=='./assets/images/picnic-blanket.png') return;
        var cardId = this.getAttribute('data-id')
          cardsChosen.push(cardArray[cardId].name)
          cardsChosenId.push(cardId)
          this.setAttribute('src', cardArray[cardId].img)
          if (cardsChosen.length === 2) {
              setTimeout(checkForMatch, 600)
          } 
    }
  
    createBoard()
  })






/* --------------------
Issue notes and ideas:

Pairs do not generate at start of game. 

There are 12 cards, and 12 items for each card. It is a 1 - 1 ratio, which is fine, but does
not generate repeating cards. 

I need to repeat a total of 6 pairs to make a full 
grid of 12 cards, and therefore a full game, that can actually play 
and keep score and clear the board.


One solution -- the one used in the tutorial:
1. Make 6 total cards with unique images
2. Add them twice to make 12 images
3. The array will sample from the array, and pairs will be generated guaranteed.


My solution
1. Make an array of 12 - 16 images.
2. Take from that array 6 random images.
3. Duplicate the images of the randomly chosen 6 images to populate a grid of 12 cards.
4. Clear the board when pairs are found. 
5. Upon the generation of a new game, a different set of randomly chosen cards (6) will populate
the game board, creating variety.
6. keep playing and clearing the board, with new boards generating after each clearing.

7. Don't break the other functions!





----------- */
createBoard()

})