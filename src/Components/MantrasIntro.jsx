import React from 'react'
import '../styles/MantrasIntro.css'

const MantrasIntro = () => {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <div className="intro-container">
      <p className="intro_title">Mantra Collection</p>
      <img
        src={require(`../assets/${
          darkMode ? 'mala.png' : 'mala.png'
        }`)}
        alt="Mantra Collection Logo"
        className="intro_image"
      />
      <p className="intro_text">
        We’re collecting <b>1M</b> mantras of Karmapa Chenno for growth and 
        development of Silicon Valley Buddhist Center and
        for finding a nice permanent place for our meditations.
      </p>
    </div>
  )
}

export default MantrasIntro
