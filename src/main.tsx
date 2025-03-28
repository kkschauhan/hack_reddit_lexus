import {Devvit, useState} from '@devvit/public-api'

// A simple list of words for the game
const wordList = ["REDDIT", "HACKATHON", "DEVELOP", "DEVKIT"]

// Define the keyboard rows in a QWERTY-like layout
const keyboardRows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

// Define the stick-figure lines exactly as provided.
const manLines = [
  "|-------------------",         // L1
  "                           |",   // L2
  "                          O",    // L3
  "                         / | \\", // L4 (backslash escaped)
  "                          / \\"    // L5 (backslash escaped)
]

// Set the maximum wrong guesses allowed to 5.
const maxWrongGuesses = 5

Devvit.addCustomPostType({
  name: 'Hanging by a Thread',
  render: () => {
    // Initialize game state: select a random word, guessed letters, and wrong guess counter.
    const [secretWord, setSecretWord] = useState(
      wordList[Math.floor(Math.random() * wordList.length)]
    )
    const [guessedLetters, setGuessedLetters] = useState([])
    const [wrongGuesses, setWrongGuesses] = useState(0)

    // Function to handle each letter guess.
    const handleGuess = (letter) => {
      if (guessedLetters.includes(letter)) return
      setGuessedLetters(prev => [...prev, letter])
      if (!secretWord.includes(letter)) {
        setWrongGuesses(prev => prev + 1)
      }
    }

    // Build the display word (with guessed letters or underscores).
    const displayWord = secretWord
      .split('')
      .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
      .join(' ')

    // Determine if the player has won or lost.
    const isWinner = secretWord.split('').every(letter => guessedLetters.includes(letter))
    const isLoser = wrongGuesses >= maxWrongGuesses

    // Reset game state.
    const resetGame = () => {
      setSecretWord(wordList[Math.floor(Math.random() * wordList.length)])
      setGuessedLetters([])
      setWrongGuesses(0)
    }

    // Prepare the stick figure display: show cumulative lines from the manLines array.
    const stickFigureLines = manLines.slice(0, wrongGuesses)

    return (
      <vstack
        alignment='center middle'
        height='100%'
        width='100%'
        gap='large'
        style={{ padding: '10px', boxSizing: 'border-box' }}
      >
        {/* Title Container matching the width of the right column (70%) */}
        <vstack alignment='center' width='70%'>
          <text size='xxlarge' weight='bold' align='center'>HANGING BY A THREAD</text>
        </vstack>
        
        {/* Main content split into two columns */}
        <hstack gap='large' width='100%' alignment='center'>
          
          {/* Left Column: Stick Figure Display */}
          <vstack alignment='center middle' width='30%'>
            {stickFigureLines.map((line, idx) => (
              <text
                key={idx}
                style={{
                  fontFamily: 'monospace',
                  textAlign: 'center'
                }}
              >
                {line}
              </text>
            ))}
          </vstack>
          
          {/* Right Column: Game State and (conditionally) Keyboard Layout */}
          <vstack gap='medium' alignment='center' width='70%'>
            <text size='large' align='center'>Word: {displayWord}</text>
            <text size='medium' align='center'>
              Wrong guesses: {wrongGuesses} / {maxWrongGuesses}
            </text>
            
            {/* Conditionally render the keypad only if the game is active */}
            {(!isWinner && !isLoser) && (
              <vstack gap='small' alignment='center'>
                {keyboardRows.map((row, rowIndex) => (
                  <hstack key={rowIndex} gap='small' alignment='center'>
                    {row.map(letter => (
                      <button
                        key={letter}
                        appearance='secondary'
                        style={{ fontSize: '12px', padding: '4px 6px', minWidth: '28px' }}
                        disabled={guessedLetters.includes(letter)}
                        onPress={() => handleGuess(letter)}
                      >
                        {letter}
                      </button>
                    ))}
                  </hstack>
                ))}
              </vstack>
            )}
            
            {isWinner && (
              <text size='large' weight='bold' align='center'>
                Bravo wordsmith! The Hangman lives 🎉
              </text>
            )}
            {isLoser && (
              <text size='large' weight='bold' align='center'>
                You are Hanged! ☠️ The word was: {secretWord}
              </text>
            )}
            {(isWinner || isLoser) && (
              <button appearance='primary' onPress={resetGame}>
                Restart Game
              </button>
            )}
          </vstack>
        </hstack>
      </vstack>
    )
  }
})

export default Devvit


// Define what packages you want to use here
// Others include:
// kvStore: a simple key value store for persisting data across sessions within this installation
// media: used for importing and posting images
Devvit.configure({
  redditAPI: true, // context.reddit will now be available
});

/*
 * Use a menu action to create a new post
 */
Devvit.addMenuItem({
  label: 'New experience',
  location: 'subreddit',
  /*
   * _ tells Typescript we don't care about the first argument
   * The second argument is a Context object--here we use object destructuring to
   * pull just the parts we need. The code below is equivalient
   * to using context.reddit and context.ui
   */
  onPress: async (_, { reddit, ui }) => {
    ui.showToast("Submitting your post - upon completion you'll navigate there.");

    const subreddit = await reddit.getCurrentSubreddit();

    /*
     * Submits the post to the specified subreddit
     */
    const post = await reddit.submitPost({
      // This will show while your post is loading
      preview: (
        <vstack padding="medium" cornerRadius="medium">
          <text style="heading" size="medium">
            Loading hello world post...
          </text>
        </vstack>
      ),
      title: `${subreddit.name} Hello World`,
      subredditName: subreddit.name,
    });

    ui.navigateTo(post);
  },
});
