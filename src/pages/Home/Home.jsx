import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="overlay" />

      <div className="terminal">
        <div className="header">
          <h1>ECO-FIREWALL</h1>
          <h2>SECURITY SYSTEM</h2>
        </div>

        <div className="alert-box">
          <span>⚠ ALERTA</span>
          <p>A rede de energia sustentável foi invadida.</p>
        </div>

        <div className="mission-box">
          <span>🎯 MISSÃO</span>
          <p>
            Restaurar os sistemas e recuperar o
            Código Mestre de Autorização.
          </p>
        </div>

        <button
          className="start-btn"
          onClick={() => navigate('/dashboard')}
        >
          INICIAR MISSÃO
        </button>
      </div>
    </div>
  )
}