import styled from "styled-components";
// Import Swiper React components
// import Swiper core and required modules
// import Swiper core and required modules
import { EffectCards, Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";
import img7 from "../assets/Nfts/bighead-6.svg";
import img8 from "../assets/Nfts/bighead-7.svg";
import img9 from "../assets/Nfts/bighead-8.svg";
import img10 from "../assets/Nfts/bighead-9.svg";
import arrow from "../assets/Arrow.svg";

export default function Carousel() {
  return (
    <Container>
      <Swiper
        // install Swiper modules
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[EffectCards, Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        navigation={true}
        pagination={{ type: "fraction" }}
        scrollbar={{ draggable: true }}
        effect={"cards"}
      >
        <SwiperSlide>
          <img src={img1} width={500} height={400} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} width={500} height={400} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} width={500} height={400} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} width={500} height={400} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} width={500} height={400} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} width={500} height={400} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} width={500} height={400} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} width={500} height={400} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} width={500} height={400} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} width={500} height={400} alt="Nft" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
const Container = styled.div`
  width: 25vw;
  height: 70vh;
  @media (max-width: 70em) {
    height: 60vh;
    padding: 15px 0;
  }
  @media (max-width: 64em) {
    height: 50vh;
    width: 20vw;
  }
  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
    &::after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
    transform: rotate(180deg);
    &::after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
  }
`;

