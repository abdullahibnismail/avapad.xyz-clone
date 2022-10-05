import React, { Component } from 'react'
import {beforeStyle} from '../../constants/Constant' 

class FadedBanner extends Component {
  render() {
    return (
      <div className='py-12  absolute overflow-x-hidden w-full z-10'>
        <div className='flex flex-wrap px-3  text-center pb-14  mx-6'>
            <div className=' m-12'>
                <h2 className={`font-bold mb-0 relative text-[40px] leading-tight text-white ${beforeStyle}`}  title={this.props.before} >
                {/* The world's fastest growing network combined with a new generation launchpad in a dual token structure. */}
                {this.props.html}
                </h2>
            </div>
        </div>
      </div>
    )
  }
}

export default FadedBanner