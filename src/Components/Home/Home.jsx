import React from 'react';
import Awareness from '../Awareness/Awareness';
import Carousel from '../Header/Carousel';
import LiveData from '../Live Updates/LiveData';
import UnsungHeros from '../Unsung Heros/UnsungHeros';
import Youtube from '../Videos/Youtube';

export default function Home() {
    return (
        <div>
            <Carousel />
            <LiveData />
            <Youtube />
            <UnsungHeros />
            <Awareness />

        </div>
    )
}