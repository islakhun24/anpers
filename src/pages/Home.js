import React, { Component } from 'react';
import bgImage from '../assets/images/bg-home.png'
import bgImageProduct from '../assets/images/background/bg-home-product.png'
import product1 from '../assets/images/background/product1.png'
import homeAboutSvg from '../assets/images/background/home-about.png'
import homeServiceSvg from '../assets/images/background/bg-home-service.png'
import getInTOuchSvg from '../assets/images/background/get-in-touch.png'
import homeAbout1Svg from '../assets/images/home-about-1.svg'
import homeAbout2Svg from '../assets/images/home-about-2.svg'
import isoImage from '../assets/svg/iso.svg'
import checkIcon from '../assets/icons/check.svg'
import userIcon from '../assets/icons/user.svg'
import mail2Icon from '../assets/icons/mail2.svg'
import editIcon from '../assets/icons/edit.svg'
class Home extends Component {
    render() {
        return (
            <div className='flex flex-col'>
                <section style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '750px'
            }} className="">
               <div className=' top-0 bottom-0 pt-12 px-8 w-full h-full bg-gradient-to-r from-anpers-blue to-transparent'>
               <div className='container-md h-full md:gap-8 flex flex-col md:flex-row'>
               <div className='flex-1 flex flex-col justify-center items-start'>
                <div className='text-5xl text-white font-semibold'>Necessities for healthy living</div>
                    <div className='text-lg text-white font-light mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    <button className='mt-16 rounded-md border border-white text-white text-base font-light px-4 py-2'>Contact Us</button>
                </div>
                <div className="flex-1 relative">
                    <div className="flex absolute bottom-16 right-0 items-center flex-row gap-3">
                        <div className='text-right text-white'>
                        Professional Manufacturer
for Baby/Adult Diaper & Adult Incontinence Products
                        </div>
                        <img src={isoImage} alt="" />

                    </div>
                </div>
               </div>
               </div>
                </section>
                <section style={{
                    backgroundImage: `url(${bgImageProduct})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="px-4 md:px-8 py-4 md:py-8">
                    <div className='container-md mt-24 flex flex-col items-center justify-center'>
                        <div className='text-bold text-anpers-blue text-5xl font-bold'>Product</div>
                        <div className='mt-16 flex flex-row gap-6 items-center'>
                            <div className='rounded border border-anpers-blue px-4 py-2 cursor-pointer'>Baby Diapers</div>
                            <div>Adult Diapers</div>
                            <div>Adult Insert Diapers</div>
                            <div>Underpad</div>
                        </div>
                        <div className="grid mt-16 md:grid-cols-2 gap-16  items-center justify-center grid-cols-1">
                            <div className='col-span-1 flex  items-center justify-center'>
                                <img src={product1} alt="" className='w-60' />
                            </div>
                            <div className='col-span-1 flex flex-col space-y-2'>
                                <div>Disposable Diaper Type and Non Woven Fabric Material baby diaper.</div>
                                <div className='flex flex-row gap-3 items-start'>
                                    <img src={checkIcon} alt="" className='mt-1' />
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam, natus obcaecati animi velit incidunt tenetur possimus qui ab iure vel similique, molestiae hic modi dolor rem mollitia dolores accusantium?
                                    </div>
                                </div>
                                <div className='flex flex-row gap-3 items-start'>
                                    <img src={checkIcon} alt="" className='mt-1' />
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam, natus obcaecati animi velit incidunt tenetur possimus qui ab iure vel similique, molestiae hic modi dolor rem mollitia dolores accusantium?
                                    </div>
                                </div>
                                <div className='flex flex-row gap-3 items-start'>
                                    <img src={checkIcon} alt="" className='mt-1' />
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam, natus obcaecati animi velit incidunt tenetur possimus qui ab iure vel similique, molestiae hic modi dolor rem mollitia dolores accusantium?
                                    </div>
                                </div>
                                <div className='flex flex-row gap-3 items-start'>
                                    <img src={checkIcon} alt="" className='mt-1' />
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam, natus obcaecati animi velit incidunt tenetur possimus qui ab iure vel similique, molestiae hic modi dolor rem mollitia dolores accusantium?
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <button className='mt-24 mb-8 rounded border-anpers-blue text-anpers-blue border py-2 px-4'>LEARN MORE</button>
                    </div>
                </section>
                <section style={{
                backgroundImage: `url(${homeAboutSvg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='container-md px-4 md:px-8 py-4 md:py-24 grid grid-cols-1 md:grid-cols-2'>
                    <div className='col-span-1 flex items-center justify-center'>
                        <img src={homeAbout1Svg} alt="" />
                    </div>
                    <div className='col-span-1 mt-8 md:mt-0  flex flex-col justify-center items-center'>
                        <h1 className='text-5xl font-bold'>About <span className='text-anpers-blue'>Company</span></h1>
                        <p className='mt-6 text-lg'>
                        Anpers Industries was founded on 1993 and it was the first baby diapers manufacturer in Malaysia. Anpers Industries is a pioneer and has been a mainstay in the diapers industry across the ASEAN region. Our production capacity has grown as much as 5 times since Anpers was first established. Anpers upgraded the baby diapers facility and also began production for adult incontinence products in 2008. Under new facility and state of the art technology, Anpers produces high quality, sustainable and innovative products to server the Retail, Institutional and Commercial channels throughout the region.
                        </p>
                        <button className='mt-16 text-base font-normal text-white rounded bg-anpers-blue py-2 px-8'>Learn More</button>
                    </div>
                </div>
                </section >
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
                        <h1 className='text-5xl font-bold'>Services</h1>
                        <p className='mt-6 text-lg'>
                        Our company has been focusing on OEM/ODM personal hygiene products for many years. Anpers Industries is a hygiene products manufacturer, products involving baby diaper, adult diaper, adult insertpad, underpad, etc.
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
                <section style={{
                backgroundImage: `url(${getInTOuchSvg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                    <div className='container-md px-4 md:px-8 py-4 md:py-24 flex justify-center items-center flex-col'>
                        <h1 className='text-5xl font-bold'>Get in  <span className='text-anpers-blue'>Touch</span></h1>
                        <p className='mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='w-full md:w-1/2 flex flex-col mt-16'>
                            <div className='flex flex-row w-full h-12 border border-blue-400 rounded pr-4'>
                                <input className='flex-grow  focus:outline-none px-4 bg-transparent' placeholder='Name'/>
                                <img src={userIcon} alt="" />
                            </div>
                            <div className='flex flex-row mt-4 w-full h-12 border border-blue-400 rounded pr-4'>
                                <input className='flex-grow  focus:outline-none px-4 bg-transparent' placeholder='Email'/>
                                <img src={mail2Icon} alt="" />
                            </div>
                            <div className='flex flex-row mt-4 w-full h-24 justify-end items-start py-2 border border-blue-400 rounded pr-4 relative'>
                                <textarea className='flex-grow  h-full  focus:outline-none px-4 bg-transparent' placeholder='Message'/>
                                <img src={editIcon} className="absolute top-2 right-4" alt="" />
                            </div>
                        </div>
                        <button className='mt-16 text-base font-normal text-white rounded bg-anpers-blue py-2 px-8'>Send</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;