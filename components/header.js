import React from 'react';

class HeaderLarge extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="header">
        <div className="header-logo-title">
          <p className="icon-apple"></p>
          <h1 className="site-title">Receptum in Natura</h1>
        </div>
      </header>
    )
  }
}

export default HeaderLarge;
