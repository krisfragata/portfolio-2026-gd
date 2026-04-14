'use client';
import photo1 from '@/../public/philippines/phil1.jpg';
import photo2 from '@/../public/philippines/phil2.jpg';
import photo3 from '@/../public/philippines/phil3.jpg';
import photo4 from '@/../public/philippines/phil4.jpg';
import photo5 from '@/../public/philippines/phil5.jpg';
import photo6 from '@/../public/philippines/phil6.jpg';
import Image from 'next/image';
import { useState } from 'react';

const PhilippinesBlurb = () => {
    const [isPhoto1Loading, setIsPhoto1Loading] = useState(true);
    const [isPhoto2Loading, setIsPhoto2Loading] = useState(true);
    const [isPhoto3Loading, setIsPhoto3Loading] = useState(true);
    const [isPhoto4Loading, setIsPhoto4Loading] = useState(true);
    const [isPhoto5Loading, setIsPhoto5Loading] = useState(true);
    const [isPhoto6Loading, setIsPhoto6Loading] = useState(true);

    return (
        <div className='philippines-photos'>
            <div className='image'>
                {
                    isPhoto1Loading && <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-primary-red rounded-full animate-spin"/>
                    </div>
                }
                <Image
                    src={photo1}
                    alt='black and white image of two men by a truck. background of mountains'
                    onLoadingComplete={() => {
                        setTimeout(() => setIsPhoto1Loading(false), 0)
                    }}
                />
            </div>
            <div className='image'>
                {
                    isPhoto2Loading && <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-primary-red rounded-full animate-spin"/>
                    </div>
                }
                <Image
                    src={photo2}
                    alt='photograph'
                    onLoadingComplete={() => {
                        setTimeout(() => setIsPhoto2Loading(false), 0)
                    }}
                />
            </div>
            <div className='image'>
                {
                    isPhoto3Loading && <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-primary-red rounded-full animate-spin"/>
                    </div>
                }
                <Image
                    src={photo3}
                    alt='photograph'
                    onLoadingComplete={() => {
                        setTimeout(() => setIsPhoto3Loading(false), 0)
                    }}
                />
            </div>
            <div className='image'>
                {
                    isPhoto4Loading && <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-primary-red rounded-full animate-spin"/>
                    </div>
                }
                <Image
                    src={photo4}
                    alt='photograph'
                    onLoadingComplete={() => {
                        setTimeout(() => setIsPhoto4Loading(false), 0)
                    }}
                />
            </div>
            <div className='image'>
                {
                    isPhoto5Loading && <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-primary-red rounded-full animate-spin"/>
                    </div>
                }
                <Image
                    src={photo5}
                    alt='photograph'
                    onLoadingComplete={() => {
                        setTimeout(() => setIsPhoto5Loading(false), 0)
                    }}
                />
            </div>
            <div className='image'>
                {
                    isPhoto6Loading && <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-primary-red rounded-full animate-spin"/>
                    </div>
                }
                <Image
                    src={photo6}
                    alt='photograph'
                    onLoadingComplete={() => {
                        setTimeout(() => setIsPhoto6Loading(false), 0)
                    }}
                />
            </div>
        </div>
    );
}

export default PhilippinesBlurb;