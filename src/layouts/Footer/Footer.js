import React, { Component } from 'react';
import bgFooter from '../../assets/images/background/footer.svg'
import logo from '../../assets/svg/logo.svg'
import homeIcon from '../../assets/icons/home.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import printerIcon from '../../assets/icons/printer.svg'
import mailIcon from '../../assets/icons/mail.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
class Footer extends Component {
    render() {
        return (
            <footer style={{
                backgroundImage: `url(${bgFooter})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}  className='container-md px-4 md:px-8 py-4 md:py-8 flex flex-col'>
                <div className='grid md:grid-cols-6 grid-cols-1 gap-8'>
                    <div className='col-span-1 md:col-span-2'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='col-span-1 flex flex-col text-white'>
                        <div className='text-lg font-bold'>Uselink</div>
                        <div className='mt-6 font-light'>FAQ</div>
                        <div className='mt-3 font-light'>About Us</div>
                        <div className='mt-3 font-light'>Contact Us</div>
                        <div className='mt-3 font-light'>Terms and Service </div>
                        <div className='mt-3 font-light'>Privacy Police </div>
                    </div>
                    <div className='col-span-1 flex flex-col text-white'>
                        <div className='text-lg font-bold'>Product</div>
                        <div className='mt-6 font-light'>Baby Diapers</div>
                        <div className='mt-3 font-light'>Adult Diapers</div>
                        <div className='mt-3 font-light'>Adult Insert Diapers</div>
                        <div className='mt-3 font-light'>Underpad</div>
                    </div>
                    <div className='col-span-1 md:col-span-2 flex flex-col text-white'>
                        <div className='text-lg font-bold'>Contact Us</div>
                        <div className='mt-6 justify-start items-start font-light flex flex-row gap-3'>
                            <img src={homeIcon} alt="" />
                            <div>LOT 202-A, Jalan Empat, Kawasan Perusahaan Bakar Arang, 08000 Sungai Petani, Kedah, Malaysia</div>
                        </div>
                        <div className='mt-2 justify-start items-start font-light flex flex-row gap-3'>
                            <img src={phoneIcon} alt="" />
                            <div>+604-422 3631</div>
                        </div>
                        <div className='mt-2 justify-start items-start font-light flex flex-row gap-3'>
                            <img src={printerIcon} alt="" />
                            <div>+604-423 9916</div>
                        </div>
                        <div className='mt-2 justify-start items-start font-light flex flex-row gap-3'>
                            <img src={mailIcon} alt="" />
                            <div>info@anpers.com</div>
                        </div>
                        <div className='mt-2 justify-start items-start font-light flex flex-row gap-3'>
                            <img src={facebookIcon} alt="" />
                            <div>Anpers Industries Sdn Bhd</div>
                        </div>
                    </div>
                </div>
                <div className='mt-6 font-light text-center text-white'>
                Copyright © 2021 ANPERS Industries
                </div>
            </footer>
        );
    }
}


export default Footer;