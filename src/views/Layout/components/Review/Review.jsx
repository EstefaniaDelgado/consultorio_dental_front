import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import ProfileImg from "@/assets/profile-img.png";
import Star from "@/assets/star.svg";
import StarFilled from "@/assets/star-filled.png";

const Review = () => {
  return (
    <div className="text-center w-full mt-8 mb-20">
      <h2 className="text-robineggblue font-extrabold">NUESTRAS OPINIONES</h2>
      <h2 className="text-spacecadet font-bold text-4xl mt-4 mb-8">
        Lo que dicen de nosotros
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full h-full pb-8 pt-4"
      >
        <SwiperSlide className="flex flex-col p-4 justify-center items-center bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-3xl">
          <figure>
            <img src={ProfileImg} alt="" />
          </figure>
          <h2 className="text-spacecadet font-semibold text-lg dark:text-robineggblue">
            Alessandro
          </h2>
          <p className="text-primary dark:text-white py-2">
            Personal amable y rápido... Lo recomiendo encarecidamente a
            cualquiera que necesite atención dental.
          </p>
          <div className="flex space-x-1">
            <div className="relative bg-red-500 w-8 h-8">
              <img src={Star} alt="Estrella" className="absolute top-0 z-50" />
              <img
                src={StarFilled}
                alt="Estrella"
                className="w-4 h-4 top-1 right-3 absolute z-20 block hover:hidden"
              />
            </div>
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-4 justify-center items-center bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-3xl">
          <figure>
            <img src={ProfileImg} alt="" />
          </figure>
          <h2 className="text-spacecadet font-semibold text-lg dark:text-robineggblue">
            Alessandro
          </h2>
          <p className="text-primary dark:text-white py-2">
            Personal amable y rápido... Lo recomiendo encarecidamente a
            cualquiera que necesite atención dental.
          </p>
          <div className="flex space-x-1">
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-4 justify-center items-center bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-3xl">
          <figure>
            <img src={ProfileImg} alt="" />
          </figure>
          <h2 className="text-spacecadet font-semibold text-lg dark:text-robineggblue">
            Alessandro
          </h2>
          <p className="text-primary dark:text-white py-2">
            Personal amable y rápido... Lo recomiendo encarecidamente a
            cualquiera que necesite atención dental.
          </p>
          <div className="flex space-x-1">
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-4 justify-center items-center bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-3xl">
          <figure>
            <img src={ProfileImg} alt="" />
          </figure>
          <h2 className="text-spacecadet font-semibold text-lg dark:text-robineggblue">
            Alessandro
          </h2>
          <p className="text-primary dark:text-white py-2">
            Personal amable y rápido... Lo recomiendo encarecidamente a
            cualquiera que necesite atención dental.
          </p>
          <div className="flex space-x-1">
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-4 justify-center items-center bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-3xl">
          <figure>
            <img src={ProfileImg} alt="" />
          </figure>
          <h2 className="text-spacecadet font-semibold text-lg dark:text-robineggblue">
            Alessandro
          </h2>
          <p className="text-primary dark:text-white py-2">
            Personal amable y rápido... Lo recomiendo encarecidamente a
            cualquiera que necesite atención dental.
          </p>
          <div className="flex space-x-1">
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-4 justify-center items-center bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-3xl">
          <figure>
            <img src={ProfileImg} alt="" />
          </figure>
          <h2 className="text-spacecadet font-semibold text-lg dark:text-robineggblue">
            Alessandro
          </h2>
          <p className="text-primary dark:text-white py-2">
            Personal amable y rápido... Lo recomiendo encarecidamente a
            cualquiera que necesite atención dental.
          </p>
          <div className="flex space-x-1">
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
            <img src={Star} alt="Estrella" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
