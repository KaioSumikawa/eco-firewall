import './SimonSays.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cards = [
  'solar',
  'wind',
  'battery',
  'network',
]

export default function SimonSays() {
  const navigate = useNavigate()

  const [gameStarted, setGameStarted] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const [isPlayerTurn, setIsPlayerTurn] = useState(false)
  const [playerSequence, setPlayerSequence] = useState([])
  const [message, setMessage] = useState('')
  const [level, setLevel] = useState(1)

  const [sequence, setSequence] = useState([
    'solar',
    'wind',
    'battery',
  ])

  async function showSequence(sequenceToShow) {
    setIsPlayerTurn(false)

    for (const card of sequenceToShow) {
      setActiveCard(card)

      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      )

      setActiveCard(null)

      await new Promise((resolve) =>
        setTimeout(resolve, 250)
      )
    }

    setPlayerSequence([])
    setMessage('Sua vez!')
    setIsPlayerTurn(true)
  }

  async function startGame() {
    setGameStarted(true)
    setLevel(1)

    const initialSequence = [
      'solar',
      'wind',
      'battery',
    ]

    setSequence(initialSequence)

    setMessage('Memorize a sequência...')

    await showSequence(initialSequence)
  }

  async function nextLevel() {
    const nextCard =
      cards[
        Math.floor(
          Math.random() * cards.length
        )
      ]

    const newSequence = [
      ...sequence,
      nextCard,
    ]

    setSequence(newSequence)
    setLevel((prev) => prev + 1)

    setMessage(
      `Nível ${level + 1} - Memorize a sequência...`
    )

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    )

    await showSequence(newSequence)
  }

  async function handleCardClick(card) {
    if (!isPlayerTurn) return

    setActiveCard(card)

    setTimeout(() => {
      setActiveCard(null)
    }, 450)

    const newPlayerSequence = [
      ...playerSequence,
      card,
    ]

    setPlayerSequence(newPlayerSequence)

    if (
      newPlayerSequence[
        newPlayerSequence.length - 1
      ] !==
      sequence[
        newPlayerSequence.length - 1
      ]
    ) {
      setMessage('❌ Sequência incorreta!')
      setIsPlayerTurn(false)
      return
    }

    if (
      newPlayerSequence.length ===
      sequence.length
    ) {
      if (level >= 5) {
        setMessage(
          '✅ Eco-Firewall Restaurado!'
        )

        setIsPlayerTurn(false)
        return
      }

      setMessage(
        '✅ Sequência correta!'
      )

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      )

      await nextLevel()
    }
  }

  return (
    <div className="simon-page">
      <h1>
        REINICIALIZAÇÃO DO ECO-FIREWALL
      </h1>

      <p>
        Memorize e repita a sequência de
        energia.
      </p>

      {gameStarted && (
        <p className="game-message">
          NÍVEL {level}/5
        </p>
      )}

      {message && (
        <p className="game-message">
          {message}
        </p>
      )}

      {message ===
        '✅ Eco-Firewall Restaurado!' && (
        <button
          className="start-game-btn"
          onClick={() =>
            navigate('/malware-shooter')
          }
        >
          PRÓXIMA FASE →
        </button>
      )}

      {!gameStarted && (
        <button
          className="start-game-btn"
          onClick={startGame}
        >
          INICIAR SISTEMA
        </button>
      )}

      <div className="simon-grid">
        <button
          className={`card solar ${
            activeCard === 'solar'
              ? 'active'
              : ''
          }`}
          onClick={() =>
            handleCardClick('solar')
          }
        >
          SOLAR
        </button>

        <button
          className={`card wind ${
            activeCard === 'wind'
              ? 'active'
              : ''
          }`}
          onClick={() =>
            handleCardClick('wind')
          }
        >
          EÓLICA
        </button>

        <button
          className={`card battery ${
            activeCard === 'battery'
              ? 'active'
              : ''
          }`}
          onClick={() =>
            handleCardClick('battery')
          }
        >
          BATERIA
        </button>

        <button
          className={`card network ${
            activeCard === 'network'
              ? 'active'
              : ''
          }`}
          onClick={() =>
            handleCardClick('network')
          }
        >
          REDE
        </button>
      </div>
    </div>
  )
}