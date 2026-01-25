import { useEffect, useState } from 'react'
import bugImage from '../../../assets/images/bug2.png'
import { bugLabels, lifecycleStages } from '../data'
import './WhackABugGame.css'

const WhackABugGame = () => {
  const [activeHoles, setActiveHoles] = useState<number[]>([])
  const [activeBugs, setActiveBugs] = useState<
    Record<number, { label: string; score: number }>
  >({})
  const [score, setScore] = useState(0)
  const [popLabel, setPopLabel] = useState<{ hole: number; text: string } | null>(null)
  const [progress, setProgress] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState(0)

  const spawnDelay = Math.max(500, 1800 - difficulty * 140)
  const progressDelay = Math.max(60, 170 - difficulty * 12)
  const progressStep = Math.min(8, 2 + Math.floor(difficulty / 1.5))
  const maxConcurrent = Math.min(3, 1 + Math.floor(difficulty / 3))

  useEffect(() => {
    if (gameOver || !gameStarted) {
      return
    }
    const interval = setInterval(() => {
      setActiveHoles((prev) => {
        const next = [...prev]
        while (next.length < maxConcurrent) {
          const candidate = Math.floor(Math.random() * 5)
          if (!next.includes(candidate)) {
            next.push(candidate)
            setActiveBugs((current) => ({
              ...current,
              [candidate]: bugLabels[Math.floor(Math.random() * bugLabels.length)],
            }))
          } else {
            break
          }
        }
        return next
      })
    }, spawnDelay)

    return () => clearInterval(interval)
  }, [gameOver, gameStarted, spawnDelay, maxConcurrent])

  useEffect(() => {
    if (gameOver || !gameStarted) {
      return
    }
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + progressStep, 100)
        if (next >= 100) {
          setGameOver(true)
          setActiveHoles([])
          setActiveBugs({})
        }
        return next
      })
    }, progressDelay)

    return () => clearInterval(interval)
  }, [gameOver, gameStarted, progressDelay, progressStep])

  useEffect(() => {
    if (gameOver || !gameStarted) {
      return
    }
    const interval = setInterval(() => {
      setDifficulty((prev) => prev + 1)
    }, 6000)

    return () => clearInterval(interval)
  }, [gameOver, gameStarted])

  useEffect(() => {
    if (!popLabel) {
      return
    }
    const timeout = window.setTimeout(() => {
      setPopLabel(null)
    }, 900)
    return () => window.clearTimeout(timeout)
  }, [popLabel])

  const handleWhack = (index: number) => {
    const bug = activeBugs[index]
    if (!gameStarted || gameOver || !bug || !activeHoles.includes(index)) {
      return
    }

    setPopLabel({ hole: index, text: `${bug.label} +${bug.score}` })
    setScore((prev) => prev + bug.score)
    setProgress(0)
    setActiveHoles((prev) => prev.filter((hole) => hole !== index))
    setActiveBugs((prev) => {
      const next = { ...prev }
      delete next[index]
      return next
    })
  }

  const startGame = () => {
    setScore(0)
    setProgress(0)
    setGameOver(false)
    setActiveHoles([])
    setActiveBugs({})
    setDifficulty(0)
    setGameStarted(true)
  }

  return (
    <div className="whack-game" aria-live="polite">
      <div className="whack-header">
        <p className="whack-title">Whack-a-bug</p>
        <span className="whack-score">Score: {score}</span>
      </div>
      <p className="whack-instructions">Tap the bug before it makes it to prod.</p>
      <div className="whack-grid">
        <div className="whack-column">
          {[0, 1].map((index) => (
            <div
              key={`hole-${index}`}
              className={`whack-hole${activeHoles.includes(index) ? ' is-active' : ''}`}
            >
              {popLabel?.hole === index && <span className="whack-pop">{popLabel.text}</span>}
              <div className="whack-hole-mask">
                <button
                  type="button"
                  className="whack-bug-button"
                  onClick={() => handleWhack(index)}
                  disabled={!gameStarted || !activeHoles.includes(index)}
                  aria-disabled={!gameStarted || !activeHoles.includes(index)}
                  aria-label={`Whack ${activeBugs[index]?.label ?? 'bug'}`}
                >
                  <img className="whack-bug" src={bugImage} alt="" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="whack-column whack-column-center">
          <div className={`whack-hole${activeHoles.includes(2) ? ' is-active' : ''}`}>
            {popLabel?.hole === 2 && <span className="whack-pop">{popLabel.text}</span>}
            <div className="whack-hole-mask">
              <button
                type="button"
                className="whack-bug-button"
                onClick={() => handleWhack(2)}
                disabled={!gameStarted || !activeHoles.includes(2)}
                aria-disabled={!gameStarted || !activeHoles.includes(2)}
                aria-label={`Whack ${activeBugs[2]?.label ?? 'bug'}`}
              >
                <img className="whack-bug" src={bugImage} alt="" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="whack-column">
          {[3, 4].map((index) => (
            <div
              key={`hole-${index}`}
              className={`whack-hole${activeHoles.includes(index) ? ' is-active' : ''}`}
            >
              {popLabel?.hole === index && <span className="whack-pop">{popLabel.text}</span>}
              <div className="whack-hole-mask">
                <button
                  type="button"
                  className="whack-bug-button"
                  onClick={() => handleWhack(index)}
                  disabled={!gameStarted || !activeHoles.includes(index)}
                  aria-disabled={!gameStarted || !activeHoles.includes(index)}
                  aria-label={`Whack ${activeBugs[index]?.label ?? 'bug'}`}
                >
                  <img className="whack-bug" src={bugImage} alt="" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="whack-progress">
        <div className="whack-progress-header">
          <span>Pipeline</span>
          <span>{gameOver ? 'Prod hit' : `${progress}%`}</span>
        </div>
        <div
          className="whack-progress-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="whack-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="whack-progress-stages">
          {lifecycleStages.map((stage) => (
            <span key={stage}>{stage}</span>
          ))}
        </div>
        {gameOver && <div className="whack-gameover">Bug shipped to prod. Game over.</div>}
      </div>
      {!gameStarted && (
        <div className="whack-overlay">
          <div className="whack-overlay-card">
            <p className="whack-overlay-title">Start game</p>
            <p className="whack-overlay-text">Keep bugs out of prod by whacking them fast.</p>
            <button type="button" className="whack-overlay-button" onClick={startGame}>
              Start game
            </button>
          </div>
        </div>
      )}
      {gameOver && (
        <div className="whack-overlay">
          <div className="whack-overlay-card">
            <p className="whack-overlay-title">Oh no!</p>
            <p className="whack-overlay-text">You shipped a bug to prod. Try again.</p>
            <p className="whack-overlay-score">Score: {score}</p>
            <button type="button" className="whack-overlay-button" onClick={startGame}>
              Play again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WhackABugGame
