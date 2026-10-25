import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800,
  );

  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh();
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, vh * 0.4], [15, 0]);
  const opacity1 = useTransform(scrollY, [0, vh * 0.3], [0, 1]);

  const y2 = useTransform(scrollY, [vh * 0.1, vh * 0.5], [20, 0]);
  const opacity2 = useTransform(scrollY, [vh * 0.1, vh * 0.4], [0, 1]);

  const y3 = useTransform(scrollY, [vh * 0.2, vh * 0.6], [20, 0]);
  const opacity3 = useTransform(scrollY, [vh * 0.2, vh * 0.5], [0, 1]);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-white px-5 py-8 font-sans text-black md:h-screen md:min-h-0 md:px-10 md:py-12 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-5 md:grid-cols-12 md:gap-x-10 lg:gap-x-14">
        {/* About Me */}
        <motion.div
          className="md:col-span-3"
          style={{ y: y1, opacity: opacity1 }}
        >
          <div className="mb-2 flex items-center gap-3 md:mb-4">
            <span className="h-[2px] w-7 bg-black" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] md:text-xs">
              About Me
            </p>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-black/60 md:text-base lg:text-lg">
            An IT student building software that solves real problems.
          </p>

          <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 md:mt-5 md:text-xs">
            Based in India
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex min-w-0 flex-col gap-4 md:col-span-9 md:gap-6 lg:gap-7">
          {/* Introduction */}
          <motion.div
            style={{ y: y2, opacity: opacity2 }}
            className="flex flex-col gap-2 md:gap-4"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/45 md:text-xs">
              01 / The Foundation
            </p>

            <h2 className="text-[2rem] font-bold leading-[1.02] tracking-[-0.055em] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Engineering mindset.
              <br />
              <span className="text-black/35">Developer by practice.</span>
            </h2>

            <p className="max-w-2xl text-xs leading-relaxed text-black/65 sm:text-sm md:text-base">
              Pursuing B.Tech in Information Technology at Guru Ghasidas
              Vishwavidyalaya. I enjoy turning ideas into functional products,
              understanding how systems work under the hood, and learning by
              building projects from scratch.
            </p>
          </motion.div>

          <div className="h-px w-full bg-black/15" />

          {/* Education + DSA */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8">
            {/* Education */}
            <motion.div
              style={{ y: y3, opacity: opacity3 }}
              className="flex min-w-0 flex-col gap-2 md:gap-3"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/45 md:text-xs">
                02 / Education
              </p>

              <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] sm:text-2xl lg:text-3xl">
                Guru Ghasidas Vishwavidyalaya
              </h3>

              <p className="text-xs leading-relaxed text-black/60 sm:text-sm md:text-base">
                B.Tech — Information Technology
              </p>

              <div className="mt-1 flex items-center gap-4 md:mt-3 md:gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40 md:text-[10px]">
                    Graduation
                  </p>
                  <p className="mt-1 text-xs font-semibold md:text-sm">
                    2024 — 2028
                  </p>
                </div>

                <div className="h-8 w-px bg-black/15 md:h-10" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40 md:text-[10px]">
                    CGPA
                  </p>
                  <p className="mt-1 text-xl font-bold tracking-tight md:text-2xl">
                    8.16<span className="text-black/35">/10</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* DSA */}
            <motion.div
              style={{ y: y3, opacity: opacity3 }}
              className="flex min-w-0 flex-col gap-2 md:gap-3"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/45 md:text-xs">
                03 / The Grind
              </p>

              <h3 className="text-2xl font-bold leading-[1.02] tracking-[-0.045em] md:text-3xl lg:text-4xl">
                Consistency is
                <br />
                <span className="text-black/35">the real flex.</span>
              </h3>

              <p className="max-w-sm text-xs leading-relaxed text-black/60 md:text-sm">
                Showing up every day, solving problems, and sharpening my
                problem-solving skills one challenge at a time.
              </p>

              <div className="mt-1 grid grid-cols-2 gap-2 md:gap-3">
                <div className="flex min-h-[76px] flex-col justify-between border border-black/15 p-3 md:min-h-[96px] md:p-4">
                  <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-black/45 sm:text-[9px] md:text-[10px]">
                    Current Streak
                  </p>
                  <p className="text-2xl font-bold tracking-tight md:text-3xl">
                    514
                    <span className="ml-1 text-[10px] font-medium text-black/40 md:text-xs">
                      days
                    </span>
                  </p>
                </div>

                <div className="flex min-h-[76px] flex-col justify-between border border-black/15 p-3 md:min-h-[96px] md:p-4">
                  <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-black/45 sm:text-[9px] md:text-[10px]">
                    Problems Solved
                  </p>
                  <p className="text-2xl font-bold tracking-tight md:text-3xl">
                    600<span className="text-black/35">+</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <span className="absolute bottom-3 right-5 text-[8px] font-bold tracking-[0.2em] text-black/30 md:bottom-6 md:right-10 md:text-[10px]">
        ABOUT / 01
      </span>
    </section>
  );
};

export default About;
