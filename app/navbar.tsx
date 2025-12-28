'use client'



import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.png'

import { RiSearch2Line } from "react-icons/ri";
import { PiUserBold } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function Navbar() {
    // const [query, setQuery] = useState('')
    const router = useRouter()

    useEffect(() => {
        const initMenu = async () => {
            try {
                // Bootstrap JS
                // await import('bootstrap/dist/js/bootstrap.bundle.min.js')

                // jQuery
                // const jQuery = (await import('jquery')).default
                // const $ = jQuery

                // SmartMenus (correct path)
                // await import('smartmenus/src/jquery.smartmenus.js')

                const $menu = $('#main-menu')
                const $mainMenuState = $('#main-menu-state')
                if (!$menu.length || !$mainMenuState.length) return

                ($menu as any).smartmenus({
                    mainMenuSubOffsetX: -1,
                    mainMenuSubOffsetY: 4,
                    subMenusSubOffsetX: 6,
                });


                if (window.innerWidth <= 991) {
                    const onChange = function (this: HTMLInputElement) {
                        if (this.checked) { // 'this' is HTMLInputElement, which has 'checked'
                            $menu.animate({ left: '0px' }, 100)
                            $('.main-menu-btn').addClass('fixed-menu-button')
                            $('body').addClass('overlay')
                        } else {
                            $('.main-menu-btn').removeClass('fixed-menu-button')
                            $menu.animate({ left: '-350px' }, 100)
                            $('body').removeClass('overlay')
                        }
                    }

                    $mainMenuState.on('change', onChange)

                    const onLinkClick = () => {
                        const inputEl = $mainMenuState[0] as HTMLInputElement;
                        if (inputEl.checked) {
                            $mainMenuState.prop('checked', false).trigger('change');
                        }
                    }


                    $menu.find('a').on('click', onLinkClick)

                    return () => {
                        $mainMenuState.off('change', onChange)
                        $menu.find('a').off('click', onLinkClick)
                    }
                }
            } catch (err) {
                console.error('Menu init failed', err)
            }
        }

        initMenu()
    }, [])

    // const handleSearch = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     if (query.trim()) {
    //         router.push(`/search?q=${query}`)
    //     }
    // }


    return (

        <>

            <div className="topbar">
                <div className='container-fluid'>
                    <div className='col-xl-10 m-auto'>
                        <div className="d-sm-flex justify-content-between">
                            <p className='d-flex align-items-center gap-2'><HiOutlineMailOpen /> kajukosha@gmail.com</p>
                            <p className='d-flex align-items-center gap-2'> Free Shipping on Orders Above ₹1499/-</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="navbar_header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 m-auto">
                            <nav className="main-nav" role="navigation">
                                <input type="checkbox" id="main-menu-state" />

                                <label
                                    htmlFor="main-menu-state"
                                    className="main-menu-btn"
                                    aria-label="Toggle main menu visibility"
                                    role="button"
                                >
                                    <span className="main-menu-btn-icon" />
                                    <span className="visually-hidden">Toggle main menu</span>
                                </label>

                                <div className="row align-items-center">

                                    <div className="col-lg-4 col-xl-4 col-6">

                                        <Link href="/" className="nav-brand">
                                            <Image
                                                src={Logo}
                                                alt="Kajukosha"
                                                width={175}
                                                priority
                                            />
                                        </Link>

                                    </div>


                                    <div className="col-lg-8 col-xl-8 col-6">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <ul id="main-menu" className="sm sm-clean">
                                                <li><Link href="/about">About Kajukosha</Link></li>
                                                <li><Link href="/categories">Our Categories</Link></li>

                                                <li><Link href="/contact">Contact Us</Link></li>
                                                <li><Link href="/blogs">Blogs</Link></li>
                                            </ul>
                                            <div className="icons gap-4 d-flex">
                                                <button type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                                    <RiSearch2Line />
                                                </button>
                                                <Link href="/user">
                                                    <PiUserBold />
                                                </Link>
                                                <button type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                    <IoBagOutline />
                                                </button>



                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* search */}

            <div className="offcanvas offcanvas-top" tabIndex={1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header container">
                    <p className="offcanvas-title" id="offcanvasTopLabel">Searh Porduct </p>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body container">
                    ...
                </div>
            </div>


            {/* cart  */}
            <div className="offcanvas offcanvas-end" tabIndex={2} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </>
    )
}
