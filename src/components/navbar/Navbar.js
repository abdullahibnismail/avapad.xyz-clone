import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <div className="navbar flex  bg-app-clr z-999 sticky top-0 py-3 px-[120px]  mx-auto w-full">
            <div className="flex w-full  mx-auto">
                <div className="">
                    <a href="/" className="font-normal leading-none text-base my-1.5">
                    <img src='/assets/logo.png' alt="Avapad" className=" h-auto w-56 mr-2 align-middle"/>
                    </a>
                </div>  
                <div className="flex  grow items-center justify-end">
                    <ul className="  flex  flex-row  list-none  text-[hsla(0,0%,100%,.7)] items-center  text-lg font-medium">
                        <div>
                            <li className="">
                                <a href="">Projects</a>
                            </li>
                        </div>
                        <div>
                            <li className="px-4">
                                <a href="">Stakings</a>
                            </li>
                        </div>
                        <div>
                            <li className="px-4">
                                <a href="">Claimer</a>
                            </li>
                        </div>
                        <div>
                            <li className="px-4">
                                <button className="border-2 border-soild border-[#e63f40] bg-[linear-gradient(90deg,#e63f40,#db4d4e)] px-5 py-1 text-white text-sm rounded-sm font-medium leading-6 items-center m-0">Connect Wallet</button>
                            </li>
                        </div>
                    </ul>    
                </div>
            </div>
        </div>
    );
  }
}

export default Navbar;
