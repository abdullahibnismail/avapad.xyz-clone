import React, { Component } from 'react'

import FadedBanner from './FadedBanner'
import {cardsData,cardBtn,cardsData2nd} from '../../constants/Constant'


class Tiers extends Component {
    constructor() {
        super()
        this.state = {
          cardData: []
        };
        this.onClickListner = this.onClickListner.bind(this);
        this.onClickListner2nd = this.onClickListner2nd.bind(this);
      }
    onClickListner(){
        this.setState({cardData: [...cardsData]})
        console.log(this.state.cardData);
    }
    onClickListner2nd(){
        this.setState({cardData: [...cardsData2nd]})
        console.log(this.state.cardData);
    }
       
  render() {
    const headColor = 'text-[28px] text-[hsla(0,0%,100%,.75)]'  
    return (
        <div>
            <div>
                <FadedBanner html="GUARANTEED ALLOCATION TIERS" clr={headColor}/>
            </div>
            <div className='border-b-2 border-[#262626] border-solid  mb-12 justify-center flex flex-wrap text-[hsla(0,0%,100%,.5)]' >
                <div className='box-border'>
                    <button href="" onFocus={this.onClickListner}  className='text-[hsla(0,0%,100%,.5)] py-[10px] mr-[25px] border-0 rounded-none font-medium shadow-none block focus:border-solid focus:border-b-4 focus:border-[#db4d4e] focus:text-[#db4d4e]' autoFocus >AKITAX Tiers</button>
                </div>
                <div className='box-border'>
                    <button href="" onClick={this.onClickListner2nd} className='text-[hsla(0,0%,100%,.5)] py-[10px] mr-[25px] border-0 rounded-none font-medium shadow-none block border-b-4 border-solid border-transparent focus:border-solid focus:border-b-4 focus:border-[#db4d4e] focus:text-[#db4d4e]'>XAKITA Tiers </button>
                </div>
            </div>
            <div className='mb-4 flex flex-wrap box-border mx-32 justify-between'>
                {this.state.cardData.map((e)=>{
                    return(
                        <div className='max-w-full w-[32%]  '>
                            <div className='w-full p-8 bg-[#1f1f21] rounded-xl shadow-[0 10px 30px 0 rgb(5 16 44 / 15%)] text-center mx-auto mt-0 mb-6'>
                              <p className='text-[#db4d4e] text-2xl font-extrabold mb-4 bg-transparent'>{e.tiername}</p>
                              <hr className='h-px my-4  border-0 opacity-25 bg-white' />
                              <p className='text-[hsla(0,0%,100%,.9)] mb-4 bg-transparent'>Staking Requirement</p>
                              <p className='text-white mb-4 font-medium text-4xl bg-transparent'>{e.price}</p>
                              <p className='text-white mb-4 bg-transparent font-medium text-lg'>1 Guaranteed Allocation</p>
                              <p className='text-[hsla(0,0%,100%,.9)] mb-4 bg-transparent'>Pool Weight</p>
                              <p className='text-white mb-4 bg-transparent font-medium text-lg '>{e.percentage}</p>
                              <hr className='h-px my-4  border-0 opacity-25 bg-white ' />
                              <button className={cardBtn}>LEARN MORE</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
  }
}

export default Tiers