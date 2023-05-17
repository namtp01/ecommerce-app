import React from 'react'
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'; 

const Header = () =>
{
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white mb-0'>Hot Line: <a className='text-white' href='tel:+84 0383106586'>+84 0383106586</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className='text-white'>Dev Coner</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className='input-group'>
                                <input type="text" className="form-control py-2"
                                    placeholder="Search Product"
                                    aria-label="Search Product"
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link>
                                        <img src="/images/compare.svg" alt="" />
                                        <p></p>
                                    </Link>
                                </div>
                                <div>
                                    <Link>
                                        <img src="" alt="" />
                                        <p></p>
                                    </Link>
                                </div>
                                <div>
                                    <Link>
                                        <img src="" alt="" />
                                        <p></p>
                                    </Link>
                                </div>
                                <div>
                                    <Link>
                                        <img src="" alt="" />
                                        <p></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
