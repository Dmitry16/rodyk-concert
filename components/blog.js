import React from "react";

import Article from "./article";

export default class Blog extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="blog">
        <Article />
      </div>
    )
  }
}
