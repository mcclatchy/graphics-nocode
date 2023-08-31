import { Link } from 'react-router-dom'
import { useState } from 'react'
import './root.css'

function App() {
  return (
    <>
      <div className="tool-landing">
        <div className="tool-background">
          <div className="tool-pane">
            <div className="ellipse one"></div>
            <div className="ellipse two"></div>
            <div className="ellipse three"></div>
            <div className="ellipse four"></div>
            <div className="ellipse five"></div>
          </div>
        </div>

        <div className="tool-foreground">
          <div className="tool-banner centered-x">McClatchy <span className="divider">|</span> Graphics</div>
          <div className="tool-card">
            <h1 className="tool-h1">The easy way to enhance stories in CUE</h1>
            <p className="tool-tagline centered">
              A no-code tool for creating graphical elements, themes and other page enhancements
            </p>
            <div className="tool-buttons">
              <Link to="/enhance">
                <button className="enhance">
                  + Enhance story
                </button>
              </Link>
              <button className="documentation">
                Documentation
              </button>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default App
