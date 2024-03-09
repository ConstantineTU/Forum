import React, { Component } from 'react'
import './footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <p className="footer__copyright">2022 г.</p>
          <div className="footer__column">
            <a href="https://github.com/ConstantineTU" rel="noreferrer" target="_blank">
              <div className="footer__github-wrap">
                ConstantineTU<div className="footer__github"></div>
              </div>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
