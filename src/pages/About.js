import React, { Component } from 'react';
import bgProduct from '../assets/images/background/bg-product.svg'
import about1 from '../assets/images/about1.svg'
import isoImage from '../assets/svg/iso.svg'

import homeServiceSvg from '../assets/images/background/bg-home-service.png'
import { Player, BigPlayButton } from 'video-react';
import logo from '../assets/svg/logo-color.svg'
class About extends Component {
    render() {
        return (
            <div className='flex flex-col w-full'>
                <section  style={{
                backgroundImage: `url(${bgProduct})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }} className="container-md px-4 min-h-max md:px-8 pt-14 flex flex-col">
                    <div className='flex md:flex-row-reverse items-center justify-center gap-4 md:gap-16 flex-col'>
                        <div className='flex-1 py-4 md:py-24'>
                            <div className='h-full relative flex items-center justify-center'>
                                <img src={about1} alt="" className='' />
                                <img className='absolute' src={logo} alt="" />
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <h1 className='text-2xl md:text-5xl font-bold text-white'>About Anpers</h1>
                            <p className='mt-6 text-white font-light text-left text-base md:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className=" mt-48 md:mt-0 relative">
                        <div className="flex w-full md:w-1/3 absolute bottom-16 right-0 items-center flex-row gap-3">
                            <div className='text-right text-white'>
                            Professional Manufacturer
    for Baby/Adult Diaper & Adult Incontinence Products
                            </div>
                            <img src={isoImage} alt="" />

                        </div>
                </div>
                </section>
                <section style={{
                backgroundImage: `url(${homeServiceSvg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                    <div className='container-md px-4 md:px-8 py-8 md:py-40 gap-16 flex flex-col md:flex-row-reverse'>
                        <div className='flex-1 flex items-center justify-center'>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
      <BigPlayButton position="center" />
    </Player>
                        </div>
                        <div className='flex-1 mt-8 md:mt-0  items-center justify-center flex flex-col'>
                        <h1 className='text-5xl font-bold text-anpers-blue'>Anpers Industries Sdn. Bhd.</h1>
                        <p className='mt-6 text-lg'>
                        was founded on 1993 and it was the first baby diapers manufacturer in Malaysia. Anpers Industries is a pioneer and has been a mainstay in the diapers industry across the ASEAN region. Our production capacity has grown as much as 5 times since Anpers was first established. Anpers upgraded the baby diapers facility and also began production for adult incontinence products in 2008. Under new facility and state of the art technology, Anpers produces high quality, sustainable and innovative products to server the Retail, Institutional and Commercial channels throughout the region.
                        </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;