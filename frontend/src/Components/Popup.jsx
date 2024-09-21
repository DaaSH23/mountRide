import React from 'react';

const Popup = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='h-56 max-w-md rounded-2xl bg-slate-200 text-center p-6 shadow-lg'>
                <div className='text-3xl font-semibold font-Ramabhadra text-slate-700 mb-4'>
                    Please Signup / SignIn
                </div>
                <p className='text-sm text-slate-600 px-4'>
                    We suggest you sign in or sign up before proceeding to book your slot. This helps us improve your user experience.
                </p>
                <div className='flex justify-center py-4 space-x-2'>
                    <button
                        className="bg-blue-200 rounded-3xl p-3 px-6 font-Ramabhadra flex transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white"
                        onClick={onClose}
                    >
                        SignIn / Signup
                    </button>
                    <a
                        href="https://calendly.com/testing-mountride-shekh?hide_gdpr_banner=1" // Calendly URL
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="bg-white rounded-3xl p-3 px-6 font-Ramabhadra flex transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white"
                            onClick={onClose}
                        >
                            Proceed to Book
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Popup;
