// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import SwiperCore from "swiper";

import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const fakeData = [
    {
        id: 1,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
    {
        id: 2,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
    {
        id: 3,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
    {
        id: 4,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
    {
        id: 5,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
    {
        id: 6,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
    {
        id: 7,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
    {
        id: 8,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
    {
        id: 9,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
    {
        id: 10,
        image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
        averageRate: 4.6,
        starCount: 144834,
        price: 349000,
    },
];

function CourseListSlider() {
    const [swiper, setSwiper] = useState<SwiperCore>();

    return (
        <div className="relative">
            <Swiper
                spaceBetween={24}
                slidesPerView={5}
                slidesPerGroup={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {fakeData.map((item) => (
                    <SwiperSlide key={item.id}>
                      
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                className="absolute left-[-20px] top-[50%] z-10 flex h-[32px] w-[32px] translate-y-[-50%] items-center justify-center rounded-full bg-black"
                onClick={() => {
                    swiper?.slidePrev();
                }}
            >
                <MdKeyboardArrowLeft color="white" size={32} />
            </button>

            <button
                className="absolute right-[-20px] top-[50%] z-10 flex h-[32px] w-[32px] translate-y-[-50%] items-center justify-center rounded-full bg-black"
                onClick={() => {
                    swiper?.slideNext();
                }}
            >
                <MdKeyboardArrowRight color="white" size={32} />
            </button>
        </div>
    );
}

export default CourseListSlider;
