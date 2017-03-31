
// Libs
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom'
import { connect } from "react-redux"
// Components
import HeaderLarge from "./components/header"
import Manifesto from "./components/manifesto"
import Footer from "./components/footer"
import Slider from "./components/slider_component"
import CTA from "./components/cta"
import Modal from "./components/modal"
import SliderTop from "./components/slider-top"
import MainNav from "./components/nav"
import AllPics from "./components/allpics"
import Blog from "./components/blog"
import Article from "./components/article"
// css
require ('./assets/sass/main.scss')
require ('./production/css/newstyle.css')
//Styled components
import { Container_main } from './components/styled/containers'

@connect((store) => {
  return {
    initialPics: store.initialPics,
    pics: store.pics
  }
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // this.props.dispatch(fetchPics())
    // console.log(this.props)
  }

  showAllPics = () => {
    console.log(this.props.pics)
    if (this.props.pics)
    // console.log(pics)
    this.renderAllPics(this.props.pics)
  }

  renderSlider = () => {
    return (
      <Slider showPics={this.showAllPics.bind(this)}  pics={this.props.initialPics}
      dispatch={ this.props.dispatch }/>
    )
  }

  renderAllPics = () => {
    return (
      <AllPics pics={ this.props.pics } initialPics={ this.props.initialPics }
       />
    )
  }

  render() {


    return (
      <Router>
        <Container_main>

          <Route path="/" component={HeaderLarge}/>
          <Route path="/" component={MainNav}/>
          <Route exact={true} path="/" component={SliderTop}/>
          <Route exact={true} path="/" component={Manifesto}/>
          <Route exact={true} path="/" component={CTA}/>
          <Route exact={true} path="/" render={this.renderSlider.bind(this)}/>
          <Route exact={true} path="/" component={Blog}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/fotos" render={this.renderAllPics.bind(this)}/>
          <Route path="/" component={Footer}/>

        </Container_main>
      </Router>
    )
  }
}
