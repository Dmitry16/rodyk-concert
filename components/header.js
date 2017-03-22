import React from 'react';

class HeaderLarge extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header-logo-title">
        <p className="icon-apple"></p>
        <h1 className="site-title">Receptum in Natura</h1>
      </div>
    )
  }
}

export default HeaderLarge;
