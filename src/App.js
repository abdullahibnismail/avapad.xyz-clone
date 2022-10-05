import { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banners/Banner';
import FadedBanner from './components/banners/FadedBanner';


class App extends Component{
  render(){
    return(
    <div className='mainContainer'>
      <Navbar/>
      <Banner title='hello' />
      <FadedBanner html="The world's fastest growing network combined with a new generation launchpad in a dual token structure." before="TRUST" />
      <FadedBanner html="ABOUT US" before="WHAT AND WHY" />
      <FadedBanner html="ABOUT US" before="WHAT AND WHY" />
      <FadedBanner html="ABOUT US" before="WHAT AND WHY" />
    </div>
    
    )
  }
    
}

export default App;
