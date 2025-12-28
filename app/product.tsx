'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
// import Glide from '@glidejs/glide'
// import '@glidejs/glide/dist/css/glide.core.min.css'
import Link from 'next/link'

import Home_Banner from '@/public/images/product-1.png'
import Home_Banner2 from '@/public/images/product-2.png'
import Home_Banner3 from '@/public/images/product-3.png'
import Home_Banner4 from '@/public/images/product-4.png'
import Home_Banner5 from '@/public/images/product-5.png'
import Home_Banner6 from '@/public/images/product-6.png'

import { FaCartShopping } from "react-icons/fa6";

export default function Products() {
    // const glideRef = useRef<HTMLDivElement>(null)

    const products = [

        { id: 1, name: 'Royal California Almonds', img: Home_Banner3 },
        { id: 2, name: 'Kajukosha Imperial Cashews', img: Home_Banner5 },
        { id: 3, name: 'Gold Select Walnuts', img: Home_Banner2 },
        { id: 4, name: 'Elite Pistachios', img: Home_Banner },
        { id: 5, name: 'Signature Dates', img: Home_Banner4 },
        { id: 6, name: 'Premium Raisins', img: Home_Banner6 },
        { id: 7, name: 'Premium Anjeer', img: Home_Banner6 },
        { id: 8, name: 'Premium Nuts', img: Home_Banner6 },


    ]

    // useEffect(() => {
    //     if (!glideRef.current) return

    //     const glide = new Glide(glideRef.current, {
    //         type: 'carousel',
    //         startAt: 0,
    //         perView: 4,
    //         gap: 20,
    //         breakpoints: {
    //             1200: { perView: 4 },
    //             1000: { perView: 3 },
    //             768: { perView: 2 },
    //             480: { perView: 1 },
    //         },
    //         autoplay: 3000,
    //         hoverpause: true,
    //     })

    //     glide.mount()

    //     return () => glide.destroy() // cleanup on unmount
    // }, [])

    return (
        <div className="home-products">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-10 m-auto">
                        <h2 className="title">New Arrival Products</h2>


                        <div className="row">
                            {products.map((cat) => (
                                <div
                                    key={cat.id}   // ✅ IMPORTANT
                                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                                >
                                    <div className="category-item">
                                        <Link
                                            className="stretched-link"
                                            href={`/products`}
                                        >  
                                            <Image
                                                src={cat.img}
                                                alt={cat.name}
                                                width={300}
                                                height={300}
                                                className="img-fluid rounded"
                                            />
                                            <h5 className="sub-title text-center">{cat.name}</h5>
                                            <p className='price text-center mb-0'><span className='sale-price'>₹ 250.00 </span>
                                            <span className='regular-price'>₹ 350.00</span></p>

                                        </Link>
                                        <Link
                                            className="btn d-flex gap-2 align-items-center btn-danger"
                                            href={`/category/${cat.name
                                                .toLowerCase()
                                                .replace(/\s+/g, '-')}`}
                                        ><FaCartShopping /> Add to Cart
                                        </Link>

                                    </div>
                                </div>
                            ))}

                        </div>



                    </div>
                </div>
            </div>
        </div>

    )
}
