import './Home.css'
import { useNavigate } from 'react-router-dom'

import backgroundVideo from '../../assets/background.mp4'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div
      className="home"
      onClick={() => navigate('/simon')}
    >
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="overlay" />


    </div>
  )
}