import React from "react";
// import {arrow-up-right}
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Starts from "../assets/Screenshot 2024-07-22 211716.png"
import RatingDp from "../assets/RatingPic.png"
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {

    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from("#main2", {
                xPercent: "-100",
                duration: 1.3,
                delay: 0.3,
            })

        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <div className="relative" ref={comp}>
            <div className="w-full h-screen mb-32 " id="main2">
                <div className="z-10 sm:px-1 lg:px-6">
                    <div className="flex flex-col mt-6 hover:shadow-2xl hover:shadow-blue-500/70 transition-shadow bg-zinc-950 rounded-3xl overflow-hidden relative ">
                        <nav className="flex items-center justify-between pr-10">
                            <div className="flex space-x-10 items-center">
                                <div className="Clogo"></div>
                                <div className="Home fontNav">Home</div>
                                <div className="Contact fontNav">Contact</div>
                                <div className="Blog fontNav">Blog</div></div>
                            <div className="hidden md:flex items-center">
                                <div className="Login fontNav">Login</div>
                            </div>
                            <div className="SomeButtom md:hidden w-8 h-8 bg-slate-500"></div>
                        </nav>
                        {/* <div className=""> */}
                        <img
                            src="/src/assets/download__2_-removebg.png"
                            alt="Horse"
                            className="horseImg transition-transform hover:scale-105 left-2/4 "
                        />
                        {/* </div> */}
                        <div className="Heading">
                            <h1>Experience</h1>
                            <h1>Freedom</h1>
                        </div>

                        <div className="BookNowButton flex justify-end mr-8 mt-36">
                            <Link to={"/Booking"}>
                                <button className="bg-white rounded-3xl p-3 px-6 font-Ramabhadra flex transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white">Book Your Slot<ArrowUpRightIcon className="size-6 ml-1" /></button>
                            </Link>
                        </div>

                        <div className="absolute flex h-full items-end justify-end w-60 py-7">
                            <div className="bg-slate-400 bg-opacity-30 text-white rounded-3xl p-4 shadow-lg w-52 transition-transform hover:scale-105">
                                <div className="flex items-center space-x-2">
                                    <img src={Starts} alt="stars" className="w-26 h-8" />
                                    <span className="text-lg font-semibold">5 Stars</span>
                                </div>
                                <div className="text-2xl font-semibold">+1000 Ratings</div>
                                <div className="text-sm pt-2"><img src={RatingDp} alt="stars" className="w-40 h-12" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}