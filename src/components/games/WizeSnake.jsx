import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

function WizeSnake() {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isAIMode, setIsAIMode] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameTheme, setGameTheme] = useState({
    background: '#000000',
    WizeSnake: '#00ff00',
    food: '#ff0000'
  });
  const [isMobile, setIsMobile] = useState(false);

  // Game constants
  const GRID_SIZE = 20;
  const GAME_SPEED = 100;
  const CANVAS_WIDTH = 600;
  const CANVAS_HEIGHT = 400;

  // Game state
  const [WizeSnake, setWizeSnake] = useState([
    { x: 10, y: 10 }
  ]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 0, y: 0 });

  const gameThemes = {
    classic: {
      name: 'Classic',
      background: '#000000',
      WizeSnake: '#00ff00',
      food: '#ff0000'
    },
    retro: {
      name: 'Retro',
      background: '#2c3e50',
      WizeSnake: '#e74c3c',
      food: '#f1c40f'
    },
    neon: {
      name: 'Neon',
      background: '#1a1a1a',
      WizeSnake: '#00ffff',
      food: '#ff00ff'
    },
    forest: {
      name: 'Forest',
      background: '#2d3436',
      WizeSnake: '#6ab04c',
      food: '#eb4d4b'
    }
  };

  // Add this helper function at the top of your component
  const isOppositeDirection = (current, next) => {
    return (
      (current.x === 1 && next.x === -1) ||
      (current.x === -1 && next.x === 1) ||
      (current.y === 1 && next.y === -1) ||
      (current.y === -1 && next.y === 1)
    );
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let gameInterval;

    const drawGame = () => {
      // Clear canvas with theme background
      ctx.fillStyle = gameTheme.background;
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw WizeSnake with theme color
      WizeSnake.forEach(segment => {
        ctx.fillStyle = gameTheme.WizeSnake;
        ctx.fillRect(
          segment.x * GRID_SIZE,
          segment.y * GRID_SIZE,
          GRID_SIZE - 2,
          GRID_SIZE - 2
        );
      });

      // Draw food with theme color
      ctx.fillStyle = gameTheme.food;
      ctx.fillRect(
        food.x * GRID_SIZE,
        food.y * GRID_SIZE,
        GRID_SIZE - 2,
        GRID_SIZE - 2
      );
    };

    const moveWizeSnake = () => {
      if (gameOver || !gameStarted) return;

      const newWizeSnake = [...WizeSnake];
      const head = { ...newWizeSnake[0] };

      // AI Mode logic
      if (isAIMode) {
        // Calculate distances
        const dx = food.x - head.x;
        const dy = food.y - head.y;

        // Only change direction if needed and avoid self collision
        let newDirection = { ...direction };

        if (Math.abs(dx) > Math.abs(dy)) {
          // Prioritize horizontal movement
          if (dx > 0 && direction.x !== -1) {
            newDirection = { x: 1, y: 0 };
          } else if (dx < 0 && direction.x !== 1) {
            newDirection = { x: -1, y: 0 };
          }
        } else {
          // Prioritize vertical movement
          if (dy > 0 && direction.y !== -1) {
            newDirection = { x: 0, y: 1 };
          } else if (dy < 0 && direction.y !== 1) {
            newDirection = { x: 0, y: -1 };
          }
        }

        // Check if new direction would cause collision
        const nextX = (head.x + newDirection.x + CANVAS_WIDTH / GRID_SIZE) % (CANVAS_WIDTH / GRID_SIZE);
        const nextY = (head.y + newDirection.y + CANVAS_HEIGHT / GRID_SIZE) % (CANVAS_HEIGHT / GRID_SIZE);
        
        const wouldCollide = newWizeSnake.some(segment => 
          segment.x === nextX && segment.y === nextY
        );

        if (!wouldCollide) {
          direction.x = newDirection.x;
          direction.y = newDirection.y;
        }
      }

      head.x += direction.x;
      head.y += direction.y;

      // Wrap around screen
      head.x = (head.x + CANVAS_WIDTH / GRID_SIZE) % (CANVAS_WIDTH / GRID_SIZE);
      head.y = (head.y + CANVAS_HEIGHT / GRID_SIZE) % (CANVAS_HEIGHT / GRID_SIZE);

      // Check collision with self (only if game has started)
      if (gameStarted && newWizeSnake.length > 1 && newWizeSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return;
      }

      newWizeSnake.unshift(head);

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 1);
        const newFood = {
          x: Math.floor(Math.random() * (CANVAS_WIDTH / GRID_SIZE)),
          y: Math.floor(Math.random() * (CANVAS_HEIGHT / GRID_SIZE))
        };
        setFood(newFood);
      } else {
        newWizeSnake.pop();
      }

      setWizeSnake(newWizeSnake);
    };

    // Game loop
    gameInterval = setInterval(moveWizeSnake, GAME_SPEED);
    
    // Draw loop
    const animationFrame = requestAnimationFrame(function animate() {
      drawGame();
      requestAnimationFrame(animate);
    });

    // Event listeners
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'i':
        case 'I':
          setIsAIMode(prev => !prev);
          // Don't return here, allow the game to start if it hasn't
          break;
        default:
          // If in AI mode, ignore other keys
          if (isAIMode) return;
          
          let newDirection = { x: 0, y: 0 };
          
          switch(e.key) {
            case 'ArrowUp':
              newDirection = { x: 0, y: -1 };
              break;
            case 'ArrowDown':
              newDirection = { x: 0, y: 1 };
              break;
            case 'ArrowLeft':
              newDirection = { x: -1, y: 0 };
              break;
            case 'ArrowRight':
              newDirection = { x: 1, y: 0 };
              break;
            default:
              return;
          }

          // Prevent moving in opposite direction
          if (isOppositeDirection(direction, newDirection)) {
            return;
          }

          // Start game on first movement
          if (!gameStarted && (newDirection.x !== 0 || newDirection.y !== 0)) {
            setGameStarted(true);
          }

          setDirection(newDirection);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(gameInterval);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [WizeSnake, food, direction, gameOver, isAIMode, gameTheme, gameStarted]);

  const resetGame = () => {
    setWizeSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 0, y: 0 });
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
  };

  // Touch Controls Component
  const TouchControls = () => (
    <div className="grid grid-cols-3 gap-2 w-48 mx-auto mt-4">
      {/* Up button */}
      <div className="col-start-2">
        <button
          onClick={() => handleDirectionChange({ x: 0, y: -1 })}
          className={`${theme.button} w-12 h-12 rounded-full flex items-center justify-center`}
        >
          ↑
        </button>
      </div>
      
      {/* Left, Down, Right buttons */}
      <div className="col-span-3 flex justify-between">
        <button
          onClick={() => handleDirectionChange({ x: -1, y: 0 })}
          className={`${theme.button} w-12 h-12 rounded-full flex items-center justify-center`}
        >
          ←
        </button>
        <button
          onClick={() => handleDirectionChange({ x: 0, y: 1 })}
          className={`${theme.button} w-12 h-12 rounded-full flex items-center justify-center`}
        >
          ↓
        </button>
        <button
          onClick={() => handleDirectionChange({ x: 1, y: 0 })}
          className={`${theme.button} w-12 h-12 rounded-full flex items-center justify-center`}
        >
          →
        </button>
      </div>
    </div>
  );

  // Handle direction changes
  const handleDirectionChange = (newDirection) => {
    if (isAIMode) return;
    
    // Prevent moving in opposite direction
    if (isOppositeDirection(direction, newDirection)) {
      return;
    }

    // Start game on first movement
    if (!gameStarted && (newDirection.x !== 0 || newDirection.y !== 0)) {
      setGameStarted(true);
    }

    setDirection(newDirection);
  };

  return (
    <div className="flex min-h-[calc(100vh-5rem)] p-4 md:p-8 gap-8">
      {/* Game Instructions */}
      <div className={`hidden md:block w-72 ${theme.nav} p-6 rounded-lg shadow-lg h-fit space-y-6`}>
        <div>
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>How To Play</h3>
          <ul className={`${theme.text} space-y-3 text-sm`}>
            <li>• Use arrow keys to control the WizeSnake</li>
            <li>• Collect food to grow</li>
            <li>• Press 'I' to toggle AI mode</li>
            <li>• Avoid hitting yourself</li>
            <li className="mt-4">Current Score: {score}</li>
            <li>AI Mode: {isAIMode ? 'ON' : 'OFF'}</li>
          </ul>
        </div>

        {/* Theme Selector */}
        <div>
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>Game Theme</h3>
          <div className="space-y-2">
            {Object.entries(gameThemes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => {
                  setGameTheme(theme);
                  if (!gameStarted) return;
                  if (!gameOver) return;
                  resetGame();
                }}
                className={`w-full p-2 rounded flex items-center gap-2 transition-all
                  ${gameTheme.name === theme.name ? 'ring-2 ring-offset-2' : 'hover:opacity-80'}`}
                style={{ 
                  background: theme.background,
                  border: `1px solid ${theme.WizeSnake}`
                }}
              >
                <span className="w-4 h-4 rounded-full" style={{ background: theme.WizeSnake }}></span>
                <span style={{ color: theme.WizeSnake }}>{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        {isMobile && (
          <div className={`${theme.text} space-y-3 text-sm`}>
            <li>• Use on-screen controls on mobile</li>
          </div>
        )}
      </div>

      {/* Game Area */}
      <div className={`${theme.nav} p-8 rounded-lg shadow-lg max-w-3xl mx-auto`}>
        <h2 className={`${theme.text} text-3xl font-bold mb-6 text-center font-['Fira_Code']`}>WIZEsnake</h2>
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="border border-current rounded"
        />
        
        {/* Mobile Controls */}
        {isMobile && !gameOver && <TouchControls />}
        
        {/* Game Messages */}
        {!gameStarted && !gameOver && (
          <div className="text-center mt-4">
            <p className={`${theme.text} mb-4`}>
              {isMobile ? "Use controls below to start!" : "Press any arrow key to start!"}
            </p>
          </div>
        )}
        {gameOver && (
          <div className="text-center mt-4">
            <p className={`${theme.text} mb-4`}>Game Over! Score: {score}</p>
            <button
              onClick={resetGame}
              className={`${theme.button} px-6 py-2 rounded hover:opacity-90 transition-all`}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WizeSnake; 