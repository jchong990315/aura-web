"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const prototypes = [
  {
    num: "01",
    category: "Low-fi 프로토타입",
    title: "종이 스케치 & 거친 플로우",
    description:
      "손으로 그린 스케치와 거친 디지털 와이어프레임으로 컨셉의 핵심 화면들을 표현했습니다. 이 단계의 목표는 픽셀 단위의 디테일에 시간을 쏟기 전에 사용자 경험의 큰 흐름을 검증하고, 근본적인 혼란 지점을 발견하는 것이었습니다.",
    howTo:
      "아래 Drive 폴더 링크를 열어 원본 스케치 시트를 확인하실 수 있습니다. 각 시트에는 사용자가 마주하는 순서대로 번호가 매겨져 있고, 모든 산출물은 이미지이므로 별도 프로그램이 필요하지 않습니다.",
    stack: [
      { name: "종이 프로토타입" },
      { name: "Wizard-of-Oz" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://drive.google.com/file/d/1eawoiV0fbQ8LWvLMr1W2Bo_CiiU7DluK/view?usp=drive_link",
  },
  {
    num: "02",
    category: "Medium-fi 프로토타입",
    title: "클릭 가능한 와이어프레임",
    description:
      "현실적인 플로우와 기본 인터랙션이 동작하는 디지털 와이어프레임 수준의 프로토타입입니다. 비주얼 디자인은 의도적으로 단순하게 유지해 정보 구조, 레이아웃, 핵심 인터랙션에 대한 피드백에 집중할 수 있도록 했습니다.",
    howTo:
      "프로토타입 링크를 열면 프로토타입이 탑재된 웹사이트로 연결됩니다. 홈 화면에서 출발해 주요 태스크 경로를 따라가 보세요. 클릭 가능한 영역을 누르면 다음 화면으로 이동하고, 언제든 뒤로가기 버튼으로 이전 화면으로 돌아갈 수 있습니다.",
    stack: [
      { name: "HTML" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://jchong990315.github.io/auta-mid-fi/",
  },
  {
    num: "03",
    category: "Hi-fi 프로토타입",
    title: "최종 인터랙티브 프로토타입",
    description:
      "구현 예정",
    howTo:
      "구현예정",
    stack: [
      { name: "" },
    ],
    image: "/assets/work/thumb3.png",
    live: "#",
    youtube: "#",
  },
];

const WorkClient = () => {
  const [prototype, setPrototype] = useState(prototypes[0]);

  const handleSlideChange = (swiper) => {
    setPrototype(prototypes[swiper.activeIndex]);
  };

  const liveTarget = prototype.live.startsWith("#") ? "_self" : "_blank";
  const youtubeTarget = prototype.youtube && prototype.youtube.startsWith("#") ? "_self" : "_blank";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{prototype.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{prototype.category}</h2>
              <p className="text-white/80 font-medium">{prototype.title}</p>
              <p className="text-white/60">{prototype.description}</p>
              <p className="text-white/60">
                <span className="text-accent font-semibold">조작 방법. </span>
                {prototype.howTo}
              </p>
              <ul className="flex flex-wrap gap-4">
                {prototype.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}{index !== prototype.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={prototype.live} target={liveTarget} aria-label={prototype.category + " 프로토타입 열기"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>프로토타입 열기</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {prototype.youtube && (
                  <Link href={prototype.youtube} target={youtubeTarget} aria-label="워크스루 영상 열기">
                    <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <FaYoutube className="text-white text-3xl group-hover:text-accent" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {prototypes.map((object, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={object.image} fill className="object-cover" alt={object.category + " 미리보기"} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkClient;
