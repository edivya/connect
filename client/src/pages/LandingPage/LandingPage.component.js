import React from 'react';
import {
  LandingPageProps
} from './LandingPage.propTypes';

import {
  ReactRouterDetails
} from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './LandingPage.styles.scss';
import LoginButton from "../../components/LoginButton/LoginButton";
import Carousel from "../../components/Carousel/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('componentDidMount()', this.props);
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
  }


  render() {
    return ( 
      <div className ="loginButton" >
      <LoginButton />
           <div className ="carousel">
           
      <Carousel />
      </div> 
      </div>
      )
  };
}

LandingPage.propTypes = LandingPageProps.propTypes;
LandingPage.defaultProps = LandingPageProps.defaultProps;