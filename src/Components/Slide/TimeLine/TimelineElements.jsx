import React from "react";
import {EducationTimelineCard} from "./EducationTimelineCard"
import {
  VerticalTimeline,
//   VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// import styled from "styled-components";

// const CardHead = styled.h3`
//   margin-bottom: 5px;
// `;

// const CardSubHead = styled.h4`
//   margin-bottom: 10px;
//   color: #131010;
//   font-weight: 600;
// `;

// const CardDetailText = styled.li`
//   color: #141313;
//   margin: 5px;
// `;

// const Responsibilities = styled.div`
//   color: #000000;
//   font-size: 16px;
//   font-weight: 600;
//   margin: 10px 0;
//   letter-spacing: 0.2ch;
// `;

function ChronoTimeline({ currentTheme }) {
  const items = [
    {
        id:1,
      title: "November 2021 - Present",
      cardSubtitle: "Masai School",
      cardTitle: "Full Stack Web Development",
      cardDetailedText: [{id:"1",desc:"A full stack web development course."}],
    },
    {
        id:2,
      title: "June 2016 - Agust 2020",
      cardSubtitle: "AGMR-College of engineering and Technology under vtu",
      cardTitle: "B.E (Mechanical engineering)",
      cardDetailedText: [{id:"2",
       desc: "B.E is an undergraduate degree program that forms the base for the students seeking to pursue a career in Engineering and Technology stream.",
     } ],
    },

 
    {
        id:3,
      title: "June 2014- May 2016",
      cardSubtitle: "Prism college of science Dharwad",
      cardTitle: "Pre-University College",
      cardDetailedText: [{id:"3",
       desc: "An intermediate course of two years duration, conducted by state board of Karnataka",
     } ],
    },
  ];

  return (
    <VerticalTimeline animate={false} position="left">
      {items?.map((history) => (
        <EducationTimelineCard
          key={history.id}
          currentTheme={currentTheme}
          {...history}
        />
      ))}
    </VerticalTimeline>
  );
}

// function EducationTimelineCard({
//   title,
//   cardTitle,
//   cardSubtitle,
//   cardDetailedText,
//   internship,
//   currentTheme,
// }) {
//   return (
//     <VerticalTimelineElement
//       className="vertical-timeline-element--work"
//       contentStyle={{
//         textAlign: "left",
//         background: "#ffffff",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
//       date={title}
//       iconStyle={{
//         background: `${currentTheme === "light" ? "#FEC107" : "#C50E6A"}`,
//         color: "#1a1111",
//         transform: "scale(0.4)",
//       }}
//     >
//       <CardHead
//         style={{ color: "#000000" }}
//         className="vertical-timeline-element-title"
//       >
//         {cardTitle}
//       </CardHead>
//       <CardSubHead
//         style={{ color: "#393e46" }}
//         className="vertical-timeline-element-subtitle"
//       >
//         {cardSubtitle}
//       </CardSubHead>
//       {internship && (
//         <Responsibilities>
//           <b>Responsibilities</b>
//         </Responsibilities>
//       )}

//       <ul>
//         {cardDetailedText.map((item) => (
//           <CardDetailText key={item.title}>{item}</CardDetailText>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// }

export { ChronoTimeline };
