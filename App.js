
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
import ContactPage from "./components/contactPage"
import Icons from "./components/icons"
// css
import styles from './production/css/newstyle.css'
//Styled components
import { Container_main, WrapperMax1100 } from './components/styled/wrappers'
import { ThemeProvider } from 'styled-components'
import { greenTheme } from './components/styled/themes'

@connect((store) => {
  return {
    initialPics: store.pics.initialPics,
    pics: store.pics.pics,
    modalVisibility: store.modal.modalVisibility,
    modalPic: store.modal.modalPic,
    nextImg: store.modal.nextImg,
    prevImg: store.modal.prevImg,
  }
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  showAllPics = () => {
    console.log(this.props.pics)
    if (this.props.pics)
    // console.log(pics)
    this.renderAllPics(this.props.pics)
  }

  renderSlider = () => {
    return (
      <Slider
        showPics={this.showAllPics.bind(this)}
        pics={this.props.initialPics}
        dispatch={ this.props.dispatch }
        modalVisibility={ this.props.modalVisibility }
        modalPic={ this.props.modalPic }
        nextImg={ this.props.nextImg }
        prevImg={ this.props.prevImg }
      />
    )
  }

  renderAllPics = () => {
    return (
      <AllPics pics={ this.props.pics } initialPics={ this.props.initialPics }
       />
    )
  }

  render() {

    // console.log(this.props.modalVisible)
    // console.log(this.props.nextImg)

    return (
      <Router>
        <ThemeProvider theme={ greenTheme }>
          <Container_main>
            <Route path="/" component={HeaderLarge}/>
            <WrapperMax1100>
              <Route path="/" component={MainNav}/>
              <Route exact={true} path="/" component={SliderTop}/>
              <Route exact={true} path="/" component={Manifesto}/>
              <Route exact={true} path="/" component={CTA}/>
              <Route exact={true} path="/" component={Icons}/>
              <Route exact={true} path="/" render={this.renderSlider.bind(this)}/>
              <Route exact={true} path="/" component={Blog}/>
              <Route path="/about" component={Manifesto}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/contact" component={ContactPage}/>
              <Route path="/fotos" render={this.renderAllPics.bind(this)}/>
            </WrapperMax1100>
            <Route path="/" component={Footer}/>
          </Container_main>
        </ThemeProvider>
      </Router>
    )
  }
}
