import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import view from '../images/view.svg';
import prodcompare from '../images/prodcompare.svg';
import addcart from '../images/add-cart.svg';
import wishlist from '../images/wish.svg';
import watch from '../images/watch.jpg';
import watch01 from '../images/watch-01.avif';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';

const ProductCard = (props) =>
{
    const { grid, data } = props;
    const dispatch = useDispatch();

    let location = useLocation();

    const addToWish = (id) => {
        dispatch(addToWishlist(id));
    };
    
    return (
        <>
            {
                data?.map((item, index) =>
                {
                    return (
                        <div key={index} className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`} >
                            <div className="product-card position-relative">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wishlist} alt="wishlist" onClick={() => addToWish(item?._id)} />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img src={item?.images[0].url} className='img-fluid mx-auto' alt="product" width={160}/>
                                    <img src={item?.images[0].url} className='img-fluid mx-auto' alt="product" width={160}/>
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">{item?.brand}</h6>
                                    <h5 className="product-title">
                                        {item?.title}
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={item?.totalrating}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
                                        dangerouslySetInnerHTML={ {__html: item?.description}}
                                    >
                                    </p>
                                    <p className='price'>${item?.price}</p>
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column gap-15">
                                        {/* <button className="border-0 bg-transparent">
                                            <img src={prodcompare} alt="addcart" />
                                        </button> */}
                                        <Link to={'/product/' + item?._id} className="border-0 bg-transparent">
                                            <img src={view} alt="view" />
                                        </Link>
                                        {/* <button className="border-0 bg-transparent">
                                            <img src={addcart} alt="addcart" />
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default ProductCard;
