import React from 'react'
import HeroSection from '../Components/HeroSection';
import styled from 'styled-components';

const MainStyles = styled.div`
h1 {

}
`


export default function Home() {
    return (
        <div className="house">
            <MainStyles>
                <h1>Welcome to the Homepage</h1>
            </MainStyles>
            <HeroSection />
        </div>
    );
}
