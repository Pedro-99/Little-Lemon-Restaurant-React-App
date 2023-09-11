import React from 'react';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Main from '../../components/main';
import Footer from '../../components/footer';
import Card from '../../components/card';
import Testimonial from '../../components/testimonials';
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
                <section className='m-5 d-flex flex-column justify-content-around gap-5 '>
                    <div className='d-flex justify-content-between mt-5'>
                        <h1>This Weeks Specials!</h1>
                        <button className='text-white btn btn-warning btn-lg'><b>Online Menu</b></button>
                    </div>
                    <div className='grid-container'>
                        <Card title="pizza" price="20.99" image="https://little-lemon-booking-website.vercel.app/static/media/greekSalad.bed423a1fab5b210e347.jpg" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odio voluptate dicta odit ullam non quas eaque veniam, sapiente, blanditiis ratione nisi, laudantium perspiciatis eum ea placeat enim repellat reiciendis." />
                        <Card title="pizza" price="20.99" image="https://little-lemon-booking-website.vercel.app/static/media/greekSalad.bed423a1fab5b210e347.jpg" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odio voluptate dicta odit ullam non quas eaque veniam, sapiente, blanditiis ratione nisi, laudantium perspiciatis eum ea placeat enim repellat reiciendis." />
                        <Card title="pizza" price="20.99" image="https://little-lemon-booking-website.vercel.app/static/media/greekSalad.bed423a1fab5b210e347.jpg" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odio voluptate dicta odit ullam non quas eaque veniam, sapiente, blanditiis ratione nisi, laudantium perspiciatis eum ea placeat enim repellat reiciendis." />
                        <Card title="pizza" price="20.99" image="https://little-lemon-booking-website.vercel.app/static/media/greekSalad.bed423a1fab5b210e347.jpg" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odio voluptate dicta odit ullam non quas eaque veniam, sapiente, blanditiis ratione nisi, laudantium perspiciatis eum ea placeat enim repellat reiciendis." />
                    </div>
                </section>
                <section className='testimonials'>
                    <h1 className='mb-5 text-warning'>Testimonials</h1>
                    <div className='d-flex justify-content-around my-5'>
                        <Testimonial rating="5/5" avatar="https://cdn3d.iconscout.com/3d/premium/thumb/boy-pray-avatar-8145251-6491295.png" username="john duo" review="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Testimonial rating="4.5/5" avatar="https://cdn3d.iconscout.com/3d/premium/thumb/boy-pray-avatar-8145251-6491295.png" username="mark duo" review="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Testimonial rating="5/5" avatar="https://cdn3d.iconscout.com/3d/premium/thumb/boy-pray-avatar-8145251-6491295.png" username="tasty pop" review="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Testimonial rating="4/5" avatar="https://cdn3d.iconscout.com/3d/premium/thumb/boy-pray-avatar-8145251-6491295.png" username="bob sweet" review="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    </div>
                </section>
                <section className='bg-warning w-100 d-flex justify-content-around'>
                    <div className='mt-5 d-flex flex-column w-25'>
                        <h1 className='text-white'>Little Lemon</h1>
                        <span className='mb-3 text-white'><b>Casablanca</b></span>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in ratione ipsum odio quo blanditiis cum fugit distinctio quibusdam nostrum dolor velit, esse, hic ad quas, eos mollitia veniam eum?</p>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in ratione ipsum odio quo blanditiis cum fugit distinctio quibusdam nostrum dolor velit, esse, hic ad quas, eos mollitia veniam eum?</p>
                    </div>
                    <div className='images p-5'>
                        <img id='img-1' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/restaurant.13306fcaa4576f20fd42.jpg' alt='restaurant space' width={400} height={500} />
                        <img id='img-2' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Mario%20and%20Adrian%20b.6ba0e06bfa9c1ea75109.jpg' alt='a chef holding a meal in a restarant' width={400} height={500} />
                    </div>
                </section>
            </Main>
            <Footer>
                <div className='d-flex justify-content-around flex-wrap'>
                    <div>
                        <img src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.6c132dfefa69396bba43f72aa595e62f.svg' alt='logo' width={400} height={400} />
                    </div>
                    <div className='d-flex flex-column  justify-content-center gap-3'>
                        <a className='text-decoration-none text-black' href='/home' >Home</a>
                        <a className='text-decoration-none text-black' href='/about' >About</a>
                        <a className='text-decoration-none text-black' href='/menu' >Menu</a>
                        <a className='text-decoration-none text-black' href='/Reservations' >Reservations</a>
                        <a className='text-decoration-none text-black' href='/Login' >Login</a>
                    </div>
                    <div className='d-flex flex-column  justify-content-center gap-3'>
                        <span className='m-2'>Moulay Abdellah Street, N 50, 34551</span>
                        <span className='m-2'>+212 596928873</span>
                        <span className='m-2'>zidan99example@gmail.com</span>
                    </div>
                    <div className='d-flex flex-column justify-content-center gap-3 '>
                        <a className="text-decoration-none text-black" href='/instagram'>Instagram</a>
                        <a className="text-decoration-none text-black" href='/facebook' >Facebook</a>
                        <a className="text-decoration-none text-black" href='/tweeter' >Tweeter</a>
                    </div>
                </div>
            </Footer>
        </>
    )
}
