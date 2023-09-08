import React from 'react';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Main from '../../components/main';
import Footer from '../../components/footer';
import logo from '../../logo.svg';

export default function LandingPage() {
    return (
        <>
            <Header>
                <img src={logo} alt='logo' width={66} height={66} />
                <Navbar />
            </Header>
            <Main>
                <p>this is main</p>
            </Main>
            <Footer>
                <p>this footer</p>
            </Footer>
        </>
    )
}
