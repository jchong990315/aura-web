"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaUsers, FaGraduationCap } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const info = [
  { icon: <FaEnvelope />, title: "이메일", description: "jchong990315@snu.ac.kr" },
  { icon: <FaUsers />, title: "팀 · 프로젝트", description: "상처지킴이 · AURA" },
  { icon: <FaGraduationCap />, title: "강의", description: "간호정보시스템분석및설계  · 2026년 1학기" },
];

const ContactClient = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_74dgqtg", "template_siieu57", form.current, "MAnY7UA_AxPftoLM8")
      .then(
        () => {
          setSuccessMsg("메시지가 정상적으로 전송되었습니다.");
          form.current.reset();
        },
        () => {
          setSuccessMsg("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#1A2A44] rounded-xl">
              <h3 className="text-4xl text-accent">문의하기</h3>
              <p className="text-white/60">
                AURA에 대한 질문, 보고서나 프로토타입 원본 요청, 또는 사이트를 보신 뒤의 피드백을 자유롭게 남겨주세요. 상처지킴이 팀에서 확인하고 답장 드리겠습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="이름" required />
                <Input type="text" name="lastname" placeholder="성" required />
                <Input type="email" name="email" placeholder="이메일 주소" required />
                <Input type="text" name="phone" placeholder="연락처 (선택)" />
              </div>
              <Textarea name="message" className="h-[200px]" placeholder="문의 내용을 입력해주세요." required />
              <Button type="submit" size="md" className="max-w-40">
                {loading ? "전송 중..." : "메시지 보내기"}
              </Button>
              {successMsg && <p className="text-sm text-white/60 pt-2">{successMsg}</p>}
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#1A2A44] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-cl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactClient;
