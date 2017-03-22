import React from 'react';

class Modal extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div id="modal" className="modal">
        <div id="close" className="close">x</div>
        <div>
          <div id="left" className="direct left">prev</div>
          <div id="right" className="direct right">next</div>
        </div>
      </div>
    )
  }
}

export default Modal;
