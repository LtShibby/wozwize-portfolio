import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

function WordWize() {
  const { theme } = useTheme();
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const maxAttempts = 6;

  // Fetch a random word when the game starts
  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1&length=5');
      const [newWord] = await response.json();
      setWord(newWord.toLowerCase());
    } catch (error) {
      console.error('Failed to fetch word:', error);
      setMessage('Failed to load word. Please try again.');
    }
  };

  const handleGuess = (e) => {
    e.preventDefault();
    if (currentGuess.length !== 5) {
      setMessage('Please enter a 5-letter word');
      return;
    }

    const newGuesses = [...guesses, currentGuess.toLowerCase()];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (currentGuess.toLowerCase() === word) {
      setGameOver(true);
      setMessage('Congratulations! You won!');
    } else if (newGuesses.length >= maxAttempts) {
      setGameOver(true);
      setMessage(`Game Over! The word was: ${word}`);
    }
  };

  const getFeedback = (guess) => {
    return guess.split('').map((letter, i) => {
      if (letter === word[i]) {
        return 'bg-green-500';
      } else if (word.includes(letter)) {
        return 'bg-yellow-500';
      }
      return 'bg-gray-300';
    });
  };

  const resetGame = () => {
    fetchWord();
    setGuesses([]);
    setCurrentGuess('');
    setGameOver(false);
    setMessage('');
  };

  return (
    <div className="flex min-h-[calc(100vh-5rem)] p-4 md:p-8 pt-20">
      {/* Game Instructions Sidebar */}
      <div className={`hidden md:block w-72 ${theme.nav} p-6 rounded-lg shadow-lg h-fit`}>
        <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>How To Play</h3>
        <ul className={`${theme.text} space-y-3 text-sm`}>
          <li>• Guess the 5-letter word in 6 tries</li>
          <li>• Each guess must be a valid 5-letter word</li>
          <li>• Color feedback after each guess:
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <span>Correct letter & position</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                <span>Correct letter, wrong spot</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span>Letter not in word</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Main Game Area */}
      <div className={`${theme.nav} p-8 rounded-lg shadow-lg max-w-lg mx-auto flex-1`}>
        <h2 className={`${theme.text} text-3xl font-bold mb-6 text-center font-['Fira_Code']`}>WordWIZE</h2>
        
        {/* Message Display */}
        {message && (
          <div className={`${theme.text} text-center mb-4`}>
            {message}
          </div>
        )}

        {/* Empty Word Slots */}
        {guesses.length === 0 && (
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-12 h-12 border-2 ${theme.text} border-current flex items-center justify-center rounded`}
              />
            ))}
          </div>
        )}

        {/* Guesses Display */}
        <div className="space-y-2 mb-6">
          {guesses.map((guess, i) => (
            <div key={i} className="flex justify-center gap-2">
              {guess.split('').map((letter, j) => (
                <div
                  key={j}
                  className={`w-12 h-12 ${getFeedback(guess)[j]} flex items-center justify-center text-black font-bold rounded`}
                >
                  {letter.toUpperCase()}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Input Form */}
        {!gameOver && (
          <form onSubmit={handleGuess} className="flex flex-col items-center gap-4">
            <input
              type="text"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value.slice(0, 5))}
              className={`w-full p-2 rounded border ${theme.text} bg-opacity-20 ${theme.background}`}
              maxLength={5}
              placeholder="Enter your guess"
            />
            <button
              type="submit"
              className={`${theme.button} px-6 py-2 rounded hover:opacity-90 transition-all`}
            >
              Guess
            </button>
          </form>
        )}

        {/* Reset Button */}
        {gameOver && (
          <button
            onClick={resetGame}
            className={`${theme.button} px-6 py-2 rounded hover:opacity-90 transition-all w-full`}
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
}

export default WordWize; 