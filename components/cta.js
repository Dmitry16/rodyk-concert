import React from 'react';

class CTA extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="cta">
        <h3>Que te apetece hacer?</h3>
        <div className="cta-buttons-wrapper">
          <button className="cta-button">Conocer quien somos</button>
          <button className="cta-button">Saber que ofrecemos</button>
          <button className="cta-button">Ver las fotos</button>
        </div>
      </div>
    );
  }
}

export default CTA;
