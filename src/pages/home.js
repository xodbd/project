import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

SwiperCore.use([Autoplay, EffectCards]);

function Home() {
    const nfts = [
        {
            id: 1,
            name : 'Cute Ghost',
            seller : 'homeboy._.doodle',
            img : '/img/nft1.jpeg',
            startPrice : '100000',
            startDate : '2024/03/30',
            endDate : '2024/03/31'
        },
        {
            id: 2,
            name : 'Sprout and Ants',
            seller : 'homeboy._.doodle',
            img : '/img/nft2.jpeg',
            startPrice : '50000',
            startDate : '2024/03/30',
            endDate : '2024/03/31'
        },
        {
            id: 3,
            name : 'Stupid snot boy',
            seller : 'homeboy._.doodle',
            img : '/img/nft3.jpeg',
            startPrice : '80000',
            startDate : '2024/03/30',
            endDate : '2024/03/31'
        }
    ]

    return(
        <div className="home-wrap">
            <section className="main">
                <div className="inner">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        /* centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }} */
                        effect={'cards'}
                        grabCursor={true}
                        loop={true}
                        modules={[Autoplay, EffectCards]}
                        className="main-list-wrap"
                    >
                        {
                            nfts.map((prd,i)=>{
                                return(
                                    <SwiperSlide className="main-list" key={i}>
                                        <Link to={`/detail/${prd.id}`}>
                                            <div className="thumb">
                                                <img src={prd.img} alt={prd.name} />
                                            </div>
                                            <div className="desc">
                                                <p className="prd-name">{prd.name}</p>
                                                <p className="prd-start-bid"><span>Starting Bid</span> {prd.startPrice}</p>
                                                <p className="prd-seller">by. {prd.seller}</p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </div>
    );
}

export default Home;