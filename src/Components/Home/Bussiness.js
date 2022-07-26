import React, { useState } from 'react';
import { FaFlag, FaUserFriends, FaCompass, FaRegBookmark } from 'react-icons/fa';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Bussiness = () => {
    const [focus, setFocus] = useState(false)
    return (
        <div className='shadow gradient'>
            <div className='app'>

            <div className=" grid sm:grid-cols-2 md:grid-cols-4 justify-items-center rounded-none py-9  w-full px-9">
                <div className="stat pl-20 md:pl-0 flex justify-center items-center">
                    <div className=''>
                        < FaFlag
                            className='text-3xl text-center'
                        />

                        <div className="stat-title">Countries</div>

                        <CountUp start={focus ? 0 : null} end={20} duration={3}>
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={isVisible => {
                                    if (isVisible) {
                                        setFocus(true)
                                    }
                                }}>
                                    <div>
                                        <span className="stat-value" ref={countUpRef} /><span className="stat-value">K</span>

                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>

                    </div>

                </div>

                <div className="stat pl-20 md:pl-0 flex justify-center items-center">
                    <div className=''>
                        < FaCompass
                            className='text-3xl text-center'
                        />
                        <div className="stat-title">Order Complete</div>
                        <CountUp start={focus ? 0 : null} end={4200} decimal={1} duration={3}>
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={isVisible => {
                                    if (isVisible) {
                                        setFocus(true)
                                    }
                                }}>
                                    <div>
                                        <span className="stat-value" ref={countUpRef} /><span className="stat-value">K</span>

                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        {/* <div className="stat-value">4,200+</div> */}

                    </div>
                </div>

                <div className="stat pl-20 md:pl-0 flex justify-center items-center">
                    <div className=''>
                        < FaUserFriends
                            className='text-3xl text-center'
                        />
                        <div className="stat-title">Happy Client</div>
                        <CountUp start={focus ? 0 : null} end={1000} duration={3}>
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={isVisible => {
                                    if (isVisible) {
                                        setFocus(true)
                                    }
                                }}>
                                    <div>
                                        <span className="stat-value" ref={countUpRef} /><span className="stat-value">K+</span>

                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        {/* <div className="stat-value">1000K +</div> */}

                    </div>
                </div>
                <div className="stat pl-20 md:pl-0  flex justify-center items-center">
                    <div>
                        < FaRegBookmark
                            className='text-3xl text-center'
                        />
                        <div className="stat-title">Feedbacks</div>
                        <CountUp start={focus ? 0 : null} end={3000} duration={3}>
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={isVisible => {
                                    if (isVisible) {
                                        setFocus(true)
                                    }
                                }}>
                                    <div>
                                        <span className="stat-value" ref={countUpRef} /><span className="stat-value">K+</span>

                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        {/* <div className="stat-value">3000K +</div> */}

                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Bussiness;