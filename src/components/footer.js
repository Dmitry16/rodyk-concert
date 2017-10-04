import React from 'react'
import styled from 'styled-components'
import { media } from './styled/medias'
import { H1, H3, Icon, P } from './styled/typographies'

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    const WrapperLinks = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    `
    const Footer = styled.footer`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      border: none;
      background: rgba(0,0,200,0.6) !important;
    `
    return (
      <Footer className="footer" role="contentinfo">

          <div className='icon-wrapper'>
            <Icon className="icon-apple"></Icon>
          </div>

          <WrapperLinks>
            <ul>
              <li><h3>Contenido</h3></li>
              <li><a href="javascript:void(0)">Inicio</a></li>
              <li><a href="javascript:void(0)">Contacto</a></li>
              <li><a href="javascript:void(0)">Fotos</a></li>
            </ul>
            <ul>
              <li><h3>Sigue nos</h3></li>
              <li><a href="javascript:void(0)">Facebook</a></li>
              <li><a href="javascript:void(0)">Twitter</a></li>
              <li><a href="javascript:void(0)">YouTube</a></li>
            </ul>
            <ul>
              <li><h3>Aviso Legal</h3></li>
              <li><a href="javascript:void(0)">Terminos y condiciones</a></li>
              <li><a href="javascript:void(0)">Politica de privacidad</a></li>
            </ul>
          </WrapperLinks>

          <hr />
          <p>Todos los derechos muy reservados!</p>
    </Footer>
  );
  }
}
export default Footer;
