import { useEffect, useRef, useState } from "react";
import { snakeAchievements } from "../data";
import "./SnakeAcademyGame.css";

const snakeGridSize = 10;
const startSnake = [42, 41, 40];

const getSnakeFood = (snake: number[], gridSize: number) => {
  const occupied = new Set(snake);
  const openCells = Array.from(
    { length: gridSize * gridSize },
    (_, index) => index
  ).filter((cell) => !occupied.has(cell));
  if (openCells.length === 0) {
    return -1;
  }
  return openCells[Math.floor(Math.random() * openCells.length)];
};

type SnakeAcademyGameProps = {
  isActive: boolean;
};

const SnakeAcademyGame = ({ isActive }: SnakeAcademyGameProps) => {
  const [snake, setSnake] = useState(startSnake);
  const snakeDirRef = useRef<"right" | "left" | "up" | "down">("right");
  const [snakeFood, setSnakeFood] = useState(() =>
    getSnakeFood(startSnake, snakeGridSize)
  );
  const [snakeAchievementIndex, setSnakeAchievementIndex] = useState(0);
  const [snakeGameOver, setSnakeGameOver] = useState(false);
  const [snakeStarted, setSnakeStarted] = useState(false);
  const snakeScrollRef = useRef<HTMLDivElement | null>(null);
  const [snakeThumb, setSnakeThumb] = useState({ top: 0, height: 40 });

  useEffect(() => {
    if (
      !snakeStarted ||
      snakeAchievementIndex >= snakeAchievements.length ||
      snakeGameOver
    ) {
      return;
    }
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const row = Math.floor(head / snakeGridSize);
        const col = head % snakeGridSize;
        let nextRow = row;
        let nextCol = col;

        const direction = snakeDirRef.current;
        if (direction === "right") {
          nextCol = col + 1;
        } else if (direction === "left") {
          nextCol = col - 1;
        } else if (direction === "down") {
          nextRow = row + 1;
        } else if (direction === "up") {
          nextRow = row - 1;
        }

        if (
          nextRow < 0 ||
          nextRow >= snakeGridSize ||
          nextCol < 0 ||
          nextCol >= snakeGridSize
        ) {
          setSnakeGameOver(true);
          return prev;
        }

        const nextHead = nextRow * snakeGridSize + nextCol;
        const ate = nextHead === snakeFood;
        const nextSnake = [nextHead, ...prev];
        if (!ate) {
          nextSnake.pop();
        } else {
          const unlocked = snakeAchievements[snakeAchievementIndex];
          if (unlocked) {
            setSnakeAchievementIndex((prevIndex) => prevIndex + 1);
          }
          setSnakeFood(getSnakeFood(nextSnake, snakeGridSize));
        }

        return nextSnake;
      });
    }, 380);

    return () => clearInterval(interval);
  }, [snakeAchievementIndex, snakeFood, snakeGameOver, snakeStarted]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isActive || !snakeStarted) {
        return;
      }
      const directionMap: Record<string, "up" | "down" | "left" | "right"> = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };
      const nextDir = directionMap[event.key];
      if (nextDir) {
        event.preventDefault();
        const prevDir = snakeDirRef.current;
        if (
          (prevDir === "up" && nextDir === "down") ||
          (prevDir === "down" && nextDir === "up") ||
          (prevDir === "left" && nextDir === "right") ||
          (prevDir === "right" && nextDir === "left")
        ) {
          return;
        }
        snakeDirRef.current = nextDir;
      }
    };
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, snakeStarted]);

  const resetSnakeState = () => {
    setSnake(startSnake);
    snakeDirRef.current = "right";
    setSnakeFood(getSnakeFood(startSnake, snakeGridSize));
    setSnakeAchievementIndex(0);
    setSnakeGameOver(false);
  };

  const resetSnakeGame = () => {
    resetSnakeState();
    setSnakeStarted(true);
  };

  const finishSnakeGame = () => {
    resetSnakeState();
    setSnakeStarted(false);
  };

  useEffect(() => {
    const scrollEl = snakeScrollRef.current;
    if (!scrollEl) {
      return;
    }

    const updateThumb = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      if (scrollHeight <= clientHeight) {
        setSnakeThumb({ top: 0, height: clientHeight });
        return;
      }
      const maxThumbTop = clientHeight - 24;
      const rawHeight = Math.max(
        24,
        (clientHeight / scrollHeight) * clientHeight
      );
      const thumbHeight = Math.min(clientHeight, rawHeight);
      const top = Math.min(
        maxThumbTop,
        (scrollTop / (scrollHeight - clientHeight)) *
          (clientHeight - thumbHeight)
      );
      setSnakeThumb({ top, height: thumbHeight });
    };

    updateThumb();
    scrollEl.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);
    return () => {
      scrollEl.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, [snakeAchievementIndex]);

  const skipSnakeGame = () => {
    setSnakeStarted(true);
    setSnakeGameOver(false);
    setSnakeAchievementIndex(snakeAchievements.length);
    setSnakeFood(-1);
  };

  return (
    <div className="snake-game" aria-live="polite">
      <div className="snake-header">
        <p className="snake-title">Snake Academy</p>
        <span className="snake-meta">
          {snakeAchievementIndex >= snakeAchievements.length
            ? "Finished"
            : `${snakeAchievementIndex}/${snakeAchievements.length} unlocked`}
        </span>
      </div>
      <p className="snake-instructions">
        Each node is a project, leadership role, or academic win.
      </p>
      <div className="snake-grid">
        {Array.from({ length: snakeGridSize * snakeGridSize }).map(
          (_, index) => {
            const isHead = index === snake[0];
            const isBody = snake.includes(index);
            const isFood =
              index === snakeFood &&
              snakeAchievementIndex < snakeAchievements.length;
            return (
              <div
                key={`snake-${index}`}
                className={`snake-cell${isHead ? " snake-head" : ""}${
                  isBody ? " snake-body" : ""
                }${isFood ? " snake-node" : ""}`}
              >
                {isFood && <span>★</span>}
              </div>
            );
          }
        )}
      </div>
      {snakeAchievementIndex >= snakeAchievements.length && (
        <div className="snake-overlay">
          <div className="snake-overlay-card snake-overlay-card-wide snake-overlay-tilt">
            <p>Achievements Unlocked!</p>
            <div className="snake-scroll-shell">
              <div
                ref={snakeScrollRef}
                className="snake-panel-list snake-panel-scroll"
              >
                <ul className="snake-timeline">
                  {snakeAchievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="snake-scroll-rail" aria-hidden="true">
                <span
                  className="snake-scroll-thumb"
                  style={{
                    height: `${snakeThumb.height}px`,
                    top: `${snakeThumb.top}px`,
                  }}
                />
              </div>
            </div>
            <div className="snake-overlay-actions">
              <button
                type="button"
                onClick={resetSnakeGame}
                className="snake-overlay-button"
              >
                Play again
              </button>
              <button
                type="button"
                onClick={finishSnakeGame}
                className="snake-overlay-button ghost"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      )}
      {snakeGameOver && (
        <div className="snake-overlay">
          <div className="snake-overlay-card">
            <p>Uhoh! You Lose.</p>
            <button type="button" onClick={resetSnakeGame}>
              Restart
            </button>
            <button
              type="button"
              className="snake-overlay-button ghost"
              onClick={skipSnakeGame}
            >
              I give up
            </button>
          </div>
        </div>
      )}
      {!snakeStarted && (
        <div className="snake-overlay">
          <div className="snake-overlay-card">
            <p>Snake Academy</p>
            <p className="snake-overlay-text">
              Play the game to unlock my achievements.
            </p>
            <button type="button" onClick={resetSnakeGame}>
              Start game
            </button>
            <button
              type="button"
              className="snake-overlay-button ghost"
              onClick={skipSnakeGame}
            >
              I don’t have time for games
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SnakeAcademyGame;
