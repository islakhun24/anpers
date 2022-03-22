import React, { Component } from 'react';
import bgProduct from '../assets/images/background/bg-product.svg'
import contactus1 from '../assets/images/contactus1.png'
import isoImage from '../assets/svg/iso.svg'
class ContactUs extends Component {
    render() {
        return (
            <div className='flex flex-col w-full'>
                <section  style={{
                backgroundImage: `url(${bgProduct})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '700px'
                }} className="container-md px-4  h-full  min-h-max md:px-8 pt-14 flex flex-col">
                    <div className='flex  h-full  md:flex-row-reverse items-center justify-center gap-4 md:gap-24 flex-col'>
                        <div className='relative h-full flex-1 '>
                            <img src={contactus1} alt="" className='md:absolute bottom-0' />
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <h1 className='text-2xl md:text-5xl font-bold text-white'>Get in Touch</h1>
                            <p className='mt-6 text-white font-light text-left text-base md:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </section>
                <section className='px-4 md:px-8 container-md py-4 flex md:py-8 items-center justify-center'>
                        Map not found
                </section>
            </div>
        );
    }
}

export default ContactUs;