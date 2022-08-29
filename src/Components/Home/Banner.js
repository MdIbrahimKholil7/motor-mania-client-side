import React from 'react';
import banner from '../../assets/images/banner.jpg'
import PrimaryBtn from '../Shared/PrimaryBtn';
import { motion } from 'framer-motion'
const Banner = () => {


    const showVariants = {
        show: {
            y: 0,
            transition: {
                delay: .3,
                ease: 'linear',
                duration: .4
            },
            opacity: 1
        },
        hide: {
            y: 15,
            opacity: 0,
            delay: .5,
        }
    }
    const paraVariants = {
        show: {
            y: 0,
            transition: {
                delay: .5,
                ease: 'linear',
                duration: .4
            },
            opacity: 1
        },
        hide: {
            y: 15,
            opacity: 0,
            delay: .7,
        }
    }

    const btnVariants = {
        show: {
            x: 0,
            transition: {
                delay: .9,
                duration: 0.5,
                ease: "linear",
                type: 'spring',
                stiffness: 220
            }
        },
        hide: {
            x: 1000,
            transition: {
                delay: 1,
                duration: 1
            }
        }
    }
    return (
        <div
            style={{
                background: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'

            }}
            className="hero min-h-screen mt-[62px]" >
            <div className="hero-overlay bg-[#000000a7] bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <motion.h1
                        variants={showVariants}
                        initial='hide'
                        animate='show'
                        className="mb-5 md:text-5xl text-3xl font-bold">Find The Best Parts For Your Vehicle</motion.h1>
                    <motion.p
                        variants={paraVariants}
                        initial='hide'
                        animate='show'
                        className="mb-5 text-white">Browse our range of Gore-Tex motorcycle clothing including Rukka, Dainese, Richa, Alpinestars, and more</motion.p>
                    <motion.div
                     variants={btnVariants}
                     initial='hide'
                     animate='show'
                    >
                        <PrimaryBtn>Shop Now</PrimaryBtn>
                    </motion.div>
                </div>
            </div>
        </div>

    );
};

export default Banner;