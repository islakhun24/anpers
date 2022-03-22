import React, { Component } from 'react';
import bgProduct from '../assets/images/background/bg-product.svg'
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import isoImage from '../assets/svg/iso.svg'
import bgImageProduct from '../assets/images/background/bg-home-product.png'
import checkIcon from '../assets/icons/check.svg'
class Product extends Component {
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
                            <img src={product1} alt="" />
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <h1 className='text-2xl md:text-5xl font-bold text-white'>Product Range and Spesification</h1>
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
                            <div className='col-span-1 flex flex-col  items-center justify-center'>
                                <img src={product2} alt=""/>
                                <div className='flex flex-row gap-4'>
                                    <div className='rounded-full h-8 w-8 justify-center items-center flex text-md font-bold text-white bg-anpers-blue cursor-pointer p-1.5'>S</div>
                                    <div className='rounded-full h-8 w-8 justify-center items-center flex text-md font-bold border-2 hover:text-white hover:bg-anpers-blue border-anpers-blue p-1.5 cursor-pointer bg-white text-anpers-blue'>M</div>
                                    <div className='rounded-full h-8 w-8 justify-center items-center flex text-md font-bold border-2 hover:text-white hover:bg-anpers-blue border-anpers-blue p-1.5 cursor-pointer bg-white text-anpers-blue'>L</div>
                                    <div className='rounded-full h-8 w-8 justify-center items-center flex text-md font-bold border-2 hover:text-white hover:bg-anpers-blue border-anpers-blue p-1.5 cursor-pointer bg-white text-anpers-blue'>XL</div>
                                    <div className='rounded-full h-8 w-8 justify-center items-center flex text-md font-bold border-2 hover:text-white hover:bg-anpers-blue border-anpers-blue p-1.5 cursor-pointer bg-white text-anpers-blue'>XXL</div>
                                </div>
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
                       
                    </div>
                </section>
            </div>
        );
    }
}

export default Product;