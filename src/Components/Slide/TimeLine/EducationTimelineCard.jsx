import styled from "styled-components";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  
function EducationTimelineCard({
    title,
    cardTitle,
    cardSubtitle,
    cardDetailedText,
    internship,
    currentTheme,
  }) {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          textAlign: "left",
          background: "#ffffff",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
        date={title}
        iconStyle={{
          background: `${currentTheme === "light" ? "#FEC107" : "#C50E6A"}`,
          color: "#1a1111",
          transform: "scale(0.4)",
        }}
      >
        <CardHead
          style={{ color: "#000000" }}
          className="vertical-timeline-element-title"
        >
          {cardTitle}
        </CardHead>
        <CardSubHead
          style={{ color: "#393e46" }}
          className="vertical-timeline-element-subtitle"
        >
          {cardSubtitle}
        </CardSubHead>
        {internship && (
          <Responsibilities>
            <b>Responsibilities</b>
          </Responsibilities>
        )}
  
        <ul>
          {cardDetailedText.map((item) => (
            <CardDetailText key={item.id}>{item.desc}</CardDetailText>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  }

  const CardDetailText = styled.li`
  color: #141313;
  margin: 5px;
`;

const Responsibilities = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  letter-spacing: 0.2ch;
`;

const CardHead = styled.h3`
  margin-bottom: 5px;
`;

const CardSubHead = styled.h4`
  margin-bottom: 10px;
  color: #131010;
  font-weight: 600;
`;


  export {EducationTimelineCard}