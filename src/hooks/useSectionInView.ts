import { useActiveSectionContext } from "../context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "../types/types";

type UseSectionOptions = {
  threshold?: number;
  rootMargin?: string;
  stableMs?: number;
};

export function useSectionInView(sectionName: SectionName, opts: number | UseSectionOptions = 0.35) {
  const options: UseSectionOptions =
    typeof opts === "number" ? { threshold: opts } : opts;

  // Safer defaults for tall sections: lower threshold and small rootMargin
  const threshold = options.threshold ?? 0.35;
  const rootMargin = options.rootMargin ?? "-10% 0px -40% 0px";
  const stableMs = options.stableMs ?? 250;

  const { ref, inView } = useInView({ threshold, rootMargin });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    // Avoid updating right after a user-initiated click
    if (Date.now() - timeOfLastClick <= 1000) return;

    let timer: number | undefined;

    if (inView) {
      timer = window.setTimeout(() => {
        setActiveSection(sectionName);
      }, stableMs);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [inView, setActiveSection, timeOfLastClick, sectionName, stableMs]);

  return {
    ref,
  };
}
