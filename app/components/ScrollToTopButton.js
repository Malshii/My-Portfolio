"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function checkScroll() {
      const scrolled = window.scrollY || window.pageYOffset;
      const nearBottom =
        window.innerHeight + scrolled >= document.documentElement.scrollHeight - 120;
      setVisible(nearBottom || scrolled > 600);
    }

    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed right-6 bottom-6 z-50 rounded-full bg-[#00C896] p-3 shadow-lg transition-shadow hover:shadow-2xl"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M12 19V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12l7-7 7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
