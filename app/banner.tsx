
import Image from 'next/image'
import Home_Banner from '@/public/images/banner.webp'

export default function Banner() {


    return (

        <>
            <div className="home-banners" role="banner">
                <div id="slider" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <Image src={Home_Banner} alt="banner" className='img-fluid' width={1920} height={650} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
