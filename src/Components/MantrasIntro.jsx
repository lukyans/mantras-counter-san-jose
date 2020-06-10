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
        Let's collect mantras with the intention of finding another new resident
        very soon that is a good fit for our Center.
        Let's make strong wishes and commit to collecting <b>111,111 Karmapa Chenno</b> mantras.
        It is a nice way to keep our bonds and strength as a sangha during these times we are now living.
      </p>
    </div>
  )
}

export default MantrasIntro
