"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { CSSProperties, useEffect } from "react";

export default function Page() {
  let percentage = useMotionValue("0%");

  useEffect(() => {
    animate(percentage, ["0%", "100%", "0%"], {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    });
  }, [percentage]);

  return (
    <motion.div
      style={
        {
          "--percentage": percentage,
          "--background": "30 41 59",
          "--highlight": "255 255 255",
          "--bg-color":
            "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
          "--border-color": `linear-gradient(145deg,
            rgb(var(--highlight)) 0%,
            rgb(var(--highlight) / 0.3) var(--percentage),
            rgb(var(--highlight) / 0) 100%)
          `,
        } as CSSProperties
      }
      className="flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      <p className="text-lg text-white">Hello, gradient</p>
    </motion.div>
  );
}
