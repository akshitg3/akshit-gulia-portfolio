import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../data/data";
import { useSectionInView } from "../hooks/useSectionInView";
import useIsMobile from "../hooks/useIsMobile";

export default function Experience() {
  const { ref } = useSectionInView("Experience", { threshold: 0, rootMargin: "0px 0px -70% 0px", stableMs: 200 });
  const isMobile = useIsMobile();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline animate={!isMobile} lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={
                <img
                  src={item.icon}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
              }
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
                padding: "8px",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="italic font-light !mt-0">{item.companyName}</p>

              {/* <p className="font-normal !mt-0">{item.location}</p> */}
              <div className="px-4.5 mt-4">
                {(() => {
                  const parts = item.description
                    .split(";")
                    .map((s) => s.trim())
                    .filter(Boolean);

                  return (
                    <ul className="list-disc space-y-1">
                      {parts.map((part, i) => (
                        <li key={i} className="text-gray-700 !font-normal">
                          {part}
                        </li>
                      ))}
                    </ul>
                  );
                })()}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
