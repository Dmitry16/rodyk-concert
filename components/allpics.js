
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom';

export default class AllPics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pics = this.props.pics.map((pic, id) => {
      return (
        <div key={pic.id} className="img sm">
          <img src={pic.source_url} alt={pic.alt_text} />
          {pic.source_url}
        </div>
      )  
    });

    console.log(this.props.pics);

    return (
      <div className="all_pics_section">
        <h3 className="title-front">Album de Fotos</h3>
        <div className="all_pics">
          { pics }
        </div>
      </div>
    )
  }
}
