"use client";

import { FaFilePdf, FaRegFilePowerpoint } from "react-icons/fa";
import { motion } from "framer-motion";

const stages = [
  {
    title: "필요 발견하기",
    description:
      "잠재 사용자와 대화하며 실제로 충족되지 않은 필요를 발견했습니다. 리서치 계획, 인터뷰 프로토콜, 원본 기록, 그리고 발견 사항을 주제별로 묶기 위해 사용한 어피니티 다이어그램까지 이 단계의 산출물에 포함되어 있습니다.",
    reportHref: "#",
    slidesHref: "https://drive.google.com/file/d/1S_Fq0bANe3IBZzb7eLZ0_nxzzNiRvHVu/view?usp=drive_link",
  },
  {
    title: "아이디어 도출하기",
    description:
      "발견한 필요를 바탕으로 브레인스토밍과 구조화된 아이디에이션 기법을 활용해 다양한 디자인 아이디어를 만들어냈습니다. 이후 매력도, 실현 가능성, 임팩트와 같은 기준으로 추려 프로토타입으로 발전시킬 하나의 컨셉을 선정했습니다.",
    reportHref: "https://drive.google.com/file/d/1R__Y0OqZ8gqBDaGfy5s9PObaT7imi1c0/view?usp=drive_link",
    slidesHref: "#",
  },
  {
    title: "컨셉 비디오",
    description:
      "선정된 아이디어를 효과적으로 전달하기 위해 짧은 컨셉 비디오를 제작했습니다. 영상은 타깃 사용자가 문제 상황을 마주하고, 우리의 솔루션을 사용한 뒤, 더 나은 결과에 이르는 과정을 3분 이내로 보여줍니다.",
    reportHref: "https://drive.google.com/file/d/1mzr7a4F3D9A5vN0uue_eNKCwX5yzHqvu/view?usp=drive_link",
    slidesHref: "#",
  },
  {
    title: "Low-fi 프로토타입 & 테스트",
    description:
      "핵심 인터랙션을 빠르고 저렴하게 탐색하기 위해 종이와 거친 디지털 스케치 형태의 프로토타입을 만들었습니다. 이후 실제 사용자와 함께 테스트를 진행해 더 정교한 작업에 들어가기 전에 근본적인 사용성 문제를 발견했습니다.",
    reportHref: "https://drive.google.com/file/d/1g6IdJBivj33S4JKM4c4nCccdwhYoEtKW/view?usp=drive_link",
    slidesHref: "#",
  },
  {
    title: "Medium-fi 프로토타입",
    description:
      "Low-fi 테스트에서 얻은 인사이트를 토대로, 현실적인 플로우와 기본 인터랙션이 포함된 디지털 와이어프레임 수준의 프로토타입을 제작했습니다. 이 단계에서 정보 구조와 레이아웃에 관한 의사결정을 마무리했습니다.",
    reportHref: "https://drive.google.com/file/d/16OJiskjzCixs3uaEmaf1iWP_TrxvhJio/view?usp=drive_link",
    slidesHref: "#",
  },
  {
    title: "그룹 휴리스틱 평가",
    description: "진행 예정",
    reportHref: "#",
    slidesHref: "#",
  },
  {
    title: "Hi-fi 프로토타입",
    description: "진행 예정",
    reportHref: "#",
    slidesHref: "#",
  },
  {
    title: "포스터 & 최종 발표",
    description: "진행 예정",
    reportHref: "#",
    slidesHref: "#",
  },
];

const linkTarget = (href) => (href.startsWith("#") ? "_self" : "_blank");

const ProjectsClient = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
          className="mb-10 text-center xl:text-left"
        >
          <h2 className="text-4xl xl:text-5xl font-bold">
            우리의 <span className="text-accent">디자인 진행 과정</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-[760px] mx-auto xl:mx-0">
            아래 8개 단계를 거쳐 빈 백지에서 출발해 동작하는 고해상도 프로토타입까지 만들어 왔습니다. 각 단계의 카드에서 보고서와 발표 자료를 바로 열어볼 수 있고, 아직 링크가 활성화되지 않은 항목은 업로드 준비 중인 자료입니다.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {stages.map((stage, index) => {
            const hasReport = typeof stage.reportHref === "string";
            const hasSlides = typeof stage.slidesHref === "string";
            return (
              <div key={index} className="flex-1 flex flex-col justify-start gap-6 group">
                <h2 className="text-[34px] xl:text-[40px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                  {stage.title}
                </h2>
                <p className="text-white/60">{stage.description}</p>
                {(hasReport || hasSlides) && (
                  <div className="flex flex-wrap gap-3">
                    {hasReport && (
                      <a
                        href={stage.reportHref}
                        target={linkTarget(stage.reportHref)}
                        rel="noopener noreferrer"
                        aria-label={stage.title + " 보고서 열기"}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-primary transition-all"
                      >
                        <FaFilePdf className="text-base" />
                        <span>보고서</span>
                      </a>
                    )}
                    {hasSlides && (
                      <a
                        href={stage.slidesHref}
                        target={linkTarget(stage.slidesHref)}
                        rel="noopener noreferrer"
                        aria-label={stage.title + " 발표 자료 열기"}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-primary transition-all"
                      >
                        <FaRegFilePowerpoint className="text-base" />
                        <span>발표 자료</span>
                      </a>
                    )}
                  </div>
                )}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsClient;
