import React from 'react'

const icons = [
  {
    icon: 'icon-apple',
    title: 'front-pics',
    link: '#'
  },
  {
    icon: 'icon-apple',
    title: 'front-pics',
    link: '#'
  },
  {
    icon: 'icon-apple',
    title: 'front-pics',
    link: '#'
  },
  {
    icon: 'icon-apple',
    title: 'front-pics',
    link: '#'
  },
]

class Icons extends React.Component {

  render() {
    return (
      <div className="icons-wrapper">
      {icons.map((icon,id) =>
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

export default Icons
