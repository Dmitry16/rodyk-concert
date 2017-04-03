import React from 'react'
import styled from 'styled-components';

import { Section } from './styled/wrappers'

class SliderTop extends React.Component {

	render() {

			const SliderTop = styled.div`
				margin: 0;
			`
			const Img = styled.img`
				width: 100%;
			`
		return (
			<Section style={{marginTop: '5%'}}>
				<SliderTop className='hero'>
					<Img src='./assets/img/album/17.jpeg' alt='xxx' className="slider-img in" />
					<Img src='./assets/img/album/13.jpeg' alt='xxx' className="slider-img out" />
					<Img src='./assets/img/album/14.jpeg' alt='xxx' className="slider-img out" />
					<Img src='./assets/img/album/15.jpeg' alt='xxx' className="slider-img out" />
				</SliderTop>
			</Section>
		)
	}
}

  let img_arr = document.getElementsByClassName('slider-img');

  let i=1,
      visible= false;

  let timer = window.setInterval(function() {

      if (i < img_arr.length && visible === false) {
        img_arr[i].style.opacity = 1;
        i++;

      } else if (i === img_arr.length && visible === false) {
        visible = true;
        i = 1;

      } else if (i < img_arr.length && visible === true) {
        for(let j=1; j < img_arr.length; j++) {
          img_arr[i].style.opacity = 0;
          i++;
        }
      } else if (i === img_arr.length && visible === true) {
        visible = false;
        i = 1;
      }

    }, 2000);

export default SliderTop;
