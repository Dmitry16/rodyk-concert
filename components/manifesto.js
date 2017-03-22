import React from 'react';

class Manifesto extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="manifesto">
        <div className="title-front">
          <h3>Nuestro Manifesto</h3>
        </div>

        <div className="icons-wrapper">
          <a href="#categorias">
            <div className="icon">
                <p className="icon-eye"></p>
                <h3 className="icon_title">Luminatium perdurantium!</h3>
                <p className="quien-somos">Lorem ipsum dolor sit amet Luminatium! consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.</p>
            </div>
          </a>
        </div>
      </div>
    )
  }
}
export default Manifesto;
