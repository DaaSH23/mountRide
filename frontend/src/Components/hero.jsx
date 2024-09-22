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
            t1.from("#himg", {
                xPercent: "20",
                duration: 1.3,
                opacity: 0,
            }).from(["#text1", "#text2"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.5,
            }).to(["#text1", "#text2"], {
                opacity: 0,
                y: "-=30",
                delay: 0.3,
                stagger: 0.5,
            }).from(["#text3", "#text4"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.5,
            }).from("#buttonSlot", {
                xPercent: "-10",
                duration: 1.3,
                opacity: 0,
            })
        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <div className="relative" ref={comp}>
            <div className="w-full h-screen mb-32 " id="main2">
                <div className="z-10 sm:px-1 lg:px-6">
                    <div className="flex flex-col h-screen mt-6 hover:shadow-2xl hover:shadow-blue-500/70 transition-shadow bg-zinc-950 rounded-3xl overflow-hidden relative ">
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
                        <img
                            src="/src/assets/download__2_-removebg.png"
                            alt="Horse"
                            className="absolute h-full left-2/4"
                            id="himg"
                        />
                        <div className="relative mt-24 ml-6">
                            <h1 className="absolute text-gray-100 font-Ramabhadra text-9xl" id="text1">
                                Welcome
                            </h1>
                            <h1 className="absolute text-gray-100 font-Ramabhadra text-7xl top-32" id="text2">
                                to <span className="text-green-200">MountRide</span>
                            </h1>
                            <h1 className=" text-gray-100 font-Ramabhadra text-9xl" id="text3">
                                Experience
                            </h1>
                            <h1 className=" text-gray-100 font-Ramabhadra text-9xl" id="text4">
                                Freedom
                            </h1>
                        </div>

                        <div className="absolute ml-80  top-2/3" id="buttonSlot">
                            <Link to={"/Booking"}>
                                <button className="bg-sky-200 rounded-3xl p-3 px-6 font-Ramabhadra flex transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white">Book Your Slot<ArrowUpRightIcon className="size-6 ml-1" /></button>
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