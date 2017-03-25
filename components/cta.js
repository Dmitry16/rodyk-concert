import React from 'react';
import { Link } from 'react-router-dom';

class CTA extends React.Component {
  constructor(props) {
    super(props);
  }

callBack() {
  this.props.callback("kuku");
}

  render() {
    const styleObj = {
    background: "darkkhaki",
    color: "darkred",
    textAlign: "center",
    }
    return (
      <div style={styleObj} className="cta">
        <h3>Que te apetece hacer?</h3>
        <div className="cta-buttons-wrapper">
          <button className="cta-button">Conocer quien somos</button>
          <button className="cta-button">Saber que ofrecemos</button>
          <Link to="/fotos"><button className="cta-button" onClick={this.callBack.bind(this)}>
            Ver las fotos</button></Link>
        </div>
      </div>
    );
  }
}

export default CTA;
