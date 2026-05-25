"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const about = {
  title: "팀 소개",
  description:
    "저희는 세 명의 학생으로 구성된 상처지킴이입니다. 한 학기 동안 사용자 중심 디자인 띵킹 프로세스의 모든 단계를 직접 수행해 왔습니다 — 사용자 인터뷰를 통한 필요 발견부터 아이디어 도출, 단계별 프로토타입 제작, 그리고 평가와 반복까지. 우리 팀은 AURA(AI Ulcer Recognition Assistance)를 통해 욕창 단계를 AI로 빠르게 판별하고 돌봄 현장의 의사결정을 돕는 것을 목표로 합니다.",
  info: [
    { fieldName: "팀 이름", fieldValue: "상처지킴이" },
    { fieldName: "프로젝트", fieldValue: "AURA" },
    { fieldName: "학기", fieldValue: "2026년 1학기" },
  ],
};

const members = [
  {
    name: "정승준",
    studentId: "2026-25642",
    role: "개발",
    photo: "/assets/team/정승준.png",
  },
  {
    name: "문윤서",
    studentId: "2026-28576",
    role: "발표 자료 작성",
    photo: "/assets/team/문윤서.png",
  },
  {
    name: "전효정",
    studentId: "2026-28000",
    role: "사용자 인터뷰",
    photo: "/assets/team/전효정.png",
  },
];

const ResumeClient = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">팀 소개</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[20px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[760px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                      <li key={index} className="flex flex-col items-center xl:items-start gap-1">
                        <span className="text-white/60 text-sm">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-[20px]">
                  <h4 className="text-2xl font-semibold">팀원</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                    {members.map((m, index) => (
                      <li
                        key={index}
                        className="bg-[#1A2A44] rounded-xl p-6 flex flex-col items-center gap-3"
                      >
                        <div className="w-[120px] h-[120px] rounded-full bg-[#0F1E33] border border-accent/40 flex items-center justify-center overflow-hidden">
                          {m.photo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                          ) : (
                            <FaUser className="text-[56px] text-white/30" />
                          )}
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-xl font-semibold">{m.name}</span>
                          <span className="text-white/60 text-sm">{m.studentId}</span>
                          <span className="text-accent text-sm mt-1">{m.role}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/40 text-xs text-center xl:text-left">
                    팀원 사진은 /public/assets/team/ 폴더에 추가한 뒤 각 멤버의 photo 필드에 경로를 넣어주세요.
                  </p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumeClient;
