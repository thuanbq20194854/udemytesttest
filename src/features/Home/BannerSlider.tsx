// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import SwiperCore from "swiper";

import { bannerData } from "@/data/common";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function BannerSlider() {
    const [swiper, setSwiper] = useState<SwiperCore>();
    return (
        <div className="relative mx-[auto] h-[400px] w-[1340px]">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {bannerData.map((bannerItem) => (
                    <SwiperSlide key={bannerItem.id}>
                        <img src={bannerItem.image} alt="" className="" />

                        <div className="absolute left-[64px] top-[64px] w-[440px] text-wrap bg-white p-[24px] shadow-md">
                            <div className="ud-heading-serif-xxl mb-[8px] !text-[40px]">
                                {bannerItem.title}
                            </div>
                            <div className="ud-text-md">
                                {bannerItem.content}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                className="absolute left-[28px] top-[50%] z-10 flex h-[32px] w-[32px] translate-y-[-50%] items-center justify-center rounded-full bg-black"
                onClick={() => {
                    swiper?.slidePrev();
                }}
            >
                <MdKeyboardArrowLeft color="white" size={32} />
            </button>

            <button
                className="absolute right-[28px] top-[50%] z-10 flex h-[32px] w-[32px] translate-y-[-50%] items-center justify-center rounded-full bg-black"
                onClick={() => {
                    swiper?.slideNext();
                }}
            >
                <MdKeyboardArrowRight color="white" size={32} />
            </button>
        </div>
    );
}

export default BannerSlider;
