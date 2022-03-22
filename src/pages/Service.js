import React, { Component } from 'react';


import homeAbout2Svg from '../assets/images/home-about-2.svg'
import homeServiceSvg from '../assets/images/background/bg-home-service.png'
import isoImage from '../assets/svg/iso.svg'
import bgImageService from '../assets/images/background/bg-service.svg'
import checkIcon from '../assets/icons/check.svg'
class Service extends Component {
    render() {
        return (
            <div className='flex flex-col w-full'>
                <section  style={{
                backgroundImage: `url(${bgImageService})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '600px'
                }} className="container-md px-4 min-h-max md:px-8 pt-14 items-center justify-center flex h-full flex-col">
                    <div className='flex md:flex-row items-center justify-center h-full gap-4 md:gap-16 flex-col'>
                       
                        <div className='flex-1 flex flex-col'>
                            <h1 className='text-2xl md:text-5xl font-bold text-white'>Product Range and Spesification</h1>
                            <p className='mt-6 text-white font-light text-left text-base md:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className='relative flex-1 h-full py-4 md:py-24'>
                        <div className="flex w-full  md:absolute bottom-16 right-0 items-center flex-row gap-3">
                            <div className='text-right text-white'>
                            Professional Manufacturer
    for Baby/Adult Diaper & Adult Incontinence Products
                            </div>
                            <img src={isoImage} alt="" />

                        </div>
                        </div>
                    </div>
                  
                </section>
                <section style={{
                backgroundImage: `url(${homeServiceSvg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                    <div className='container-md px-4 md:px-8 py-4 md:py-24 flex flex-col md:flex-row-reverse'>
                        <div className='flex-1 flex items-center justify-center'>
                            <img src={homeAbout2Svg} alt="" />
                        </div>
                        <div className='flex-1 mt-8 md:mt-0  items-center justify-center flex flex-col'>
                        <h1 className='text-5xl font-bold text-anpers-blue'>OEM/ODM</h1>
                        <p className='mt-6 text-lg'>
                        Our company has been focusing on OEM/ODM personal hygiene products for many years.
Anpers Industries is a hygiene products manufacturer, products involving baby diaper, adult diaper, adult insertpad, underpad, etc.
                        </p>
                        <div className='grid mt-4 grid-cols-1 md:grid-cols-2 gap-3 '>
                            <div className='flex flex-row gap-3 justify-start items-start'>
                                <img src={checkIcon} alt="" />
                                <div>Customized product range and quality.</div>
                            </div>
                            <div className='flex flex-row gap-3 justify-start items-start'>
                                <img src={checkIcon} alt="" />
                                <div>Generic products are available.</div>
                            </div>
                            <div className='flex flex-row gap-3 justify-start items-start'>
                                <img src={checkIcon} alt="" />
                                <div>Every process will be checked by QC to ensure the product quality are always up to customers’ expectation.</div>
                            </div>
                            <div className='flex flex-row gap-3 justify-start items-start'>
                                <img src={checkIcon} alt="" />
                                <div>Customized packaging, backsheet, frontal patch and carton design for your product.</div>
                            </div>
                        </div>
                        <button className='mt-16 text-base font-normal text-white rounded bg-anpers-blue py-2 px-8'>Learn More</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Service;