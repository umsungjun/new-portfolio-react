import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

/* swiper css */
import "swiper/css";
import "swiper/css/effect-cards";

const PROFILE_IMAGES = [
  "/images/profile/profile-1.jpg",
  "/images/profile/profile-2.jpg",
  "/images/profile/profile-3.jpg",
];

export default function ProfileSwiper() {
  return (
    <Swiper
      effect={"cards"}
      modules={[EffectCards]}
      className="w-[215px] h-[286px]"
      /* 반복 여부 */
      loop={true}
      // loopAdditionalSlides={1}
      /* 커서 끌기 여부 */
      grabCursor={true}
      /* 클릭 슬라이드 이동 여부 */
      slideToClickedSlide={true}
    >
      {PROFILE_IMAGES.map((src) => {
        return (
          <SwiperSlide key={src}>
            <img
              src={src}
              className="w-full"
              alt="profile"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
