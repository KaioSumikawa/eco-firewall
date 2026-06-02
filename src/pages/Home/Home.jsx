import './Home.css'

import backgroundVideo from '../../assets/background.mp4'
import gradeImage from '../../assets/grade.png'

export default function Home() {
  return (
    <div className="home">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <img
        src={gradeImage}
        alt=""
        className="hud-frame"
      />

      <div className="overlay" />
    </div>
  )
}