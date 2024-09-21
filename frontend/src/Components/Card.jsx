import React, { useState } from 'react';
import { HorseData } from '../utils/horseData';
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Popup from './Popup'; // Adjust the import path as needed


const Card = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const openPopup = () => setPopupVisible(true);
    const closePopup = () => setPopupVisible(false);

    return (
        <>
            {/* Background Blur */}
            {isPopupVisible && (
                <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 pointer-events-none' />
            )}

            <div className='flex flex-wrap justify-center'>
                {HorseData.map((data, index) => (
                    <div key={index} className='bg-slate-950 text-white h-52 w-80 rounded-xl flex justify-between m-4 overflow-hidden mx-10 hover:shadow-xl hover:shadow-blue-300 transition-transform transform hover:scale-105'>
                        {/* images */}
                        <div className='flex transition-transform transform hover:scale-105'>
                            <img src={data.img} alt="horse image" className='object-cover' />
                        </div>
                        {/* info/ stats */}
                        <div className='flex-1 pr-4 pt-2 text-end'>
                            <div className='text-xl font-bold'>Horse No. {data.No}</div>
                            <h3 className='text-md font-semibold'>{data.Name}</h3>
                            <p className='font-semibold py-2'>
                                <span className='text-4xl font-semibold text-yellow-300'>{data.rating}<span className='text-white font-light'>/</span></span>10
                            </p>
                            <p className='text-xs font-medium'>origin: {data.origin}</p>
                            <p>{data.Speed} km/hr</p>
                            <div className='flex justify-end text-center'>
                                <button
                                    className='bg-slate-100 text-black rounded-2xl px-4 py-1.5 mt-1 text-xs font-bold transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white flex items-center'
                                    onClick={openPopup}
                                >
                                    <span>Book Now</span>
                                    <ArrowUpRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Popup isVisible={isPopupVisible} onClose={closePopup} />
        </>
    );
};

export default Card;
