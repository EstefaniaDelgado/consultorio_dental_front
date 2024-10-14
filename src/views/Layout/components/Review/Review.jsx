import { Swiper, SwiperSlide } from "swiper/react";
import reviewsData from "@/utils/reviewsData.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import StarFullFilled from "@/assets/star-full-filled.svg";
import { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState(reviewsData.data);
  const [slidesQuantity, setSlidesQuantity] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesQuantity(
        window.innerWidth <= 500 ? 1 : window.innerWidth <= 768 ? 2 : 3
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const reviewSwiperSlides = review.map(({ name, review, image }, index) => (
    <SwiperSlide
      key={index}
      className="flex flex-col p-4 justify-center items-center bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-3xl"
    >
      <figure className="w-14 h-14 rounded-full">
        <img src={image} alt="Profile Image" className="rounded-full"/>
      </figure>
      <h2 className="text-spacecadet font-semibold text-lg dark:text-robineggblue">
        {name}
      </h2>
      <p className="text-primary dark:text-white py-2">{review}</p>
      <div className="flex space-x-1">
        <img src={StarFullFilled} className="w-4 h-4" alt="Estrella" />
        <img src={StarFullFilled} className="w-4 h-4" alt="Estrella" />
        <img src={StarFullFilled} className="w-4 h-4" alt="Estrella" />
        <img src={StarFullFilled} className="w-4 h-4" alt="Estrella" />
        <img src={StarFullFilled} className="w-4 h-4" alt="Estrella" />
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="text-center w-full mt-8 mb-20">
      <h2 className="text-robineggblue font-extrabold">NUESTRAS OPINIONES</h2>
      <h2 className="text-spacecadet font-bold text-4xl mt-4 mb-8">
        Lo que dicen de nosotros
      </h2>
      <Swiper
        slidesPerView={slidesQuantity}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full h-full pb-8 pt-4 px-2"
      >
        {reviewSwiperSlides}
      </Swiper>
    </div>
  );
};

export default Review;
