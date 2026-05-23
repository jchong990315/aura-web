"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3, text: "핵심 태스크" },
  { prefix: "AI", text: "욕창 단계 판별" },
  { num: 4, text: "욕창 단계 분류" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              {typeof item.num === "number" ? (
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              ) : item.prefix ? (
                <span className="text-4xl xl:text-6xl font-extrabold text-accent">
                  {item.prefix}
                </span>
              ) : null}
              <p
                className={
                  "leading-snug text-white/80 " +
                  (item.text.length < 8 ? "max-w-[120px]" : "max-w-[220px]")
                }
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
