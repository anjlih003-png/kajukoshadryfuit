'use client'

import Image from 'next/image'
import Link from 'next/link'
import Payment_icon from '@/public/images/payment.svg'

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from 'react-icons/fa'


 

 const footerCategories = [
        { id: 1, name: 'Almonds', slug: 'almond'},
        { id: 2, name: 'Cashews', slug: 'cashew' },
        { id: 3, name: 'Walnuts', slug: 'walnut' },
        { id: 4, name: 'Pistachios', slug: 'pistachio' },
        { id: 5, name: 'Dates', slug: 'date' },
        { id: 6, name: 'Anjeer', slug: 'anjeer' },
    ]


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-10 m-auto">
                        {/* TOP SECTION */}
                        <div className="footer-top">
                            <div className="footer-grid">

                                {/* Our Range */}
                                <div>
                                    <h6 className='title'>Our Categories</h6>
                                    <ul>
                                        {footerCategories.map((item) => (
                                            <li key={item.slug}>
                                                <Link href={`/${item.slug}`}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* About Us */}
                                <div>
                                    <h6 className='title'>About Us</h6>
                                    <ul>
                                        <li><Link href="/about">Company</Link></li>
                                        <li><Link href="/brands">Our Brand</Link></li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                        <li><Link href="/track-order">Track Order</Link></li>
                                    </ul>
                                </div>

                                {/* Legal */}
                                <div>
                                    <h6 className='title'>Legal</h6>
                                    <ul>
                                        <li><Link href="/terms">Terms & Conditions</Link></li>
                                        <li><Link href="/shipping-policy">Shipping Policy</Link></li>
                                        <li><Link href="/return-policy">Return & Exchange</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    </ul>
                                </div>

                                {/* Newsletter */}
                                <div className="footer-newsletter">

                                    <p className="timing">
                                        <strong>Timing :</strong><br />
                                        Monday To Saturday<br />
                                        10:00 AM to 05:30 PM IST
                                    </p>

                                    <p className="email">
                                        <strong>Email :</strong><br />
                                        care@kajukosha.com
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* PAYMENT + SOCIAL */}
                        <div className="footer-middle">
                            <div className="payments">
                                <Image src={Payment_icon} alt="Payments" width={260} height={40} />
                            </div>

                            <div className="social">
                                <span>Follow Us On</span>
                                <a><FaFacebookF /></a>
                                <a><FaInstagram /></a>
                                <a><FaLinkedinIn /></a>
                                <a><FaWhatsapp /></a>
                            </div>
                        </div>

                        {/* COPYRIGHT */}
                        <div className="footer-bottom">
                            © {new Date().getFullYear()} Kajukosha. All Rights Reserved
                        </div>

                    </div>
                </div>


            </div>
        </footer>
    )
}
