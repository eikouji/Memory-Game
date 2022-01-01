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
        name: 'soda-pop',
        img: './assets/images/cup-with-straw-icon.png'
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
        img: './assets/images/sandwich.png'
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


Either I can just use 6 items and make them show up twice by adding the same image twice,
which would make me repeat code, and all that. But, that would generate one puzzle, and be kind of
boring, and not really interesting, as the same images would show up.

Or,

I make it so that from the array of 12, or however many images I want the array to have,
the grid shows a random assortment of 6 fruit images
and then doubles the chosen image to make a pair. That way, there's variety every time
a new game is generated, but there will be pairs based on the randomly chosen 6 cards.

And, I can add as many fruit or food pictures to the same array because no matter how large
the array, a random bunch of 6 will be used, and doubles will be generated to create working pairs.

I can keep all the fruits I've used up until this point, and retain my original 3 x 4 grid, or however
big I want it to be.

How to do this? 

Randomize Cards after clearing the board

 if (cardsWon.length===cardArray.length/2) {
        resultDisplay.textContent ='Congratulations! You found them all.'
        redrawBoard()
        cardsWon = [ ]
        setTimeout(()=>{ resultDisplay.textContent = '' },1500)
    }

// Function redrawBoard()


function redrawBoard() {
    var cards = document.querySelectorAll('img')
    for(let i=0; i < cards.length; i++) {
      cards[i].setAttribute('src','images/blank.png')
    }
    randomizeCards()
  }


// Function randomizeCards


  function randomizeCards() {
    cardArray.sort(()=> 0.5 - Math.random())
  }









----------- */});