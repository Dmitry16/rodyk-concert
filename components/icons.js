import React from 'react';

class Icons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="icons-wrapper">
      {this.props.icons.map((icon,id) =>
          <a href={icon.link}>
            <div className="icon">
                <p className={icon.icon}></p>
                <p className="icon_title">{icon.title}</p>
            </div>
          </a>
        )}
      </div>
    )
  }
}

export default Icons;
