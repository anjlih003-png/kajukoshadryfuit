'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Home_Banner from '@/public/images/almond.png'
import Home_Banner2 from '@/public/images/cashew.png'
import Home_Banner3 from '@/public/images/walnut.png'
import Home_Banner4 from '@/public/images/pistachio.png'
import Home_Banner5 from '@/public/images/dates.png'
import Home_Banner6 from '@/public/images/fig.png'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import Link from 'next/link'

export default function Categories() {
    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 7,         // Number of items visible
            gap: 20,            // Gap between slides
            breakpoints: {
                1200: { perView: 5 },
                1000: { perView: 4 },
                768: { perView: 3 },
                480: { perView: 1 },
            },
            autoplay: 3000,     // Optional autoplay
            hoverpause: true,
        }).mount()
    }, [])

    const categories = [
        { id: 1, name: 'Almonds', img: Home_Banner },
        { id: 2, name: 'Cashews', img: Home_Banner2 },
        { id: 3, name: 'Walnuts', img: Home_Banner3 },
        { id: 4, name: 'Pistachios', img: Home_Banner4 },
        { id: 5, name: 'Dates', img: Home_Banner5 },
        { id: 6, name: 'Anjeer', img: Home_Banner6 },
    ]

    return (
        <div className="home-categories">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-10 m-auto">
                        <h2>Shop by Kajukosha Dry Fruits</h2>

                        <div className="glide mt-4">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {categories.map(cat => (
                                        <li key={cat.id} className="glide__slide">
                                            <div className="category-item text-center">
                                                <Image
                                                    src={cat.img}
                                                    alt={cat.name}
                                                    width={100}
                                                    height={100}
                                                    className="img-fluid rounded"
                                                />
                                                <h5 className="sub-title">{cat.name}</h5>
                                                <Link className='stretched-link' href={`/${cat.name}`}></Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Optional arrows */}
                            <div className="glide__arrows" data-glide-el="controls">
                                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                                    &#10094;
                                </button>
                                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                                    &#10095;
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
