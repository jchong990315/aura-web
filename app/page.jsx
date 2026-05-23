import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export const metadata = {
  title: "AURA | 상처지킴이",
  description:
    "AURA(AI Ulcer Recognition Assistance) — 욕창 단계를 AI로 빠르게 판별해 간호 현장을 돕는 애플리케이션.",
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">상처지킴이</span>
            <h1 className="h1 mb-6">
              우리는 <br />
              <span className="text-accent">AURA</span>
            </h1>
            <p className="max-w-[560px] mb-9 text-white/80">
              사진 한 장으로 욕창의 단계를 AI가 판별해, 간호 현장에서 누구나 같은 기준으로 빠르게 의사결정할 수 있게 돕습니다.
            </p>
            <p className="max-w-[560px] mb-9 text-white/60">
              이 사이트에는 우리 팀의 디자인 여정이 처음부터 끝까지 담겨 있습니다. 사용자 인터뷰로 발견한 필요부터, 그 필요를 해결하기 위해 거쳐 온 아이디어 도출, 프로토타입 제작, 평가 과정까지 모두 정리했습니다. AURA를 처음 접하시는 분이라도 페이지를 따라가며 전체 흐름을 이해하실 수 있도록 구성했습니다.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <span>최종 포스터 다운로드</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
