import React from 'react';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Main from '../../components/main';
import Footer from '../../components/footer';
import './style.css';

export default function LandingPage() {
    return (
        <>
            <Header>
                <img src="https://little-lemon-booking-website.vercel.app/Logo.svg" alt='logo' />
                <Navbar />
            </Header>
            <Main>
                <section className='hero-section w-100 d-flex justify-content-around'>
                    <div className='mt-5 d-flex flex-column w-25'>
                        <h1 className='text-warning'>Little Lemon</h1>
                        <span className='mb-3 text-white'><b>Casablanca</b></span>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in ratione ipsum odio quo blanditiis cum fugit distinctio quibusdam nostrum dolor velit, esse, hic ad quas, eos mollitia veniam eum?</p>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in ratione ipsum odio quo blanditiis cum fugit distinctio quibusdam nostrum dolor velit, esse, hic ad quas, eos mollitia veniam eum?</p>
                        <button className='mt-5 btn btn-lg btn-warning'><b className='text-white'>Book a table</b></button>
                    </div>
                    <div className='p-5'>
                        <img src='https://little-lemon-booking-website.vercel.app/static/media/restaurantfood.e8abf5b772b6817189aa.jpg' alt='a chef holding a meal in a restarant' width={400} height={500} />
                    </div>
                </section>
            </Main>
            <Footer>
                <p>this footer</p>
            </Footer>
        </>
    )
}
