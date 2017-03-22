import React from 'react';

class WhoWeAre extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="title-front">
          <h3>QUIENES SOMOS</h3>
        </div>

        <div className="icons-wrapper">

            <div className="icon">
                <p className="icon-eye"></p>
                <h3 className="icon_title">Quien somos</h3>
                <p className="quien-somos">SoluTecs- ¡TU ALIADO EN EL MUNDO DIGITAL!
    Somos una agéncia de marketing online económico.
    Estamos ubicados en Barcelona y somos proveedores de servicios
     de marketing online (digital) en internet.
     También realizamos servicios de Tour Virtual 360º, foto y video
     grabación, diseño grafico para imprenta, tarjetas, logotipos, etc.
     ¡Nuestros precios son mas que razonables! En general, somos muy
     flexibles a la hora de hacer un presupuesto.
     ¡Incluso tenemos servicios de marketing online gratis que puedes
     probar sin compromiso alguno por tu parte!</p>
            </div>

        </div>
      </div>
    );
  }
}
export default WhoWeAre;
