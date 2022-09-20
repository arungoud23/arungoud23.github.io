import React from "react";
import styled from "styled-components";
import { MainHeadingWrapper, SubHeadingWrapper } from "../../Elements/Elements";

//icons import
import html from "../../Icons/html.svg";
import css from "../../Icons/css.svg";
import javascript from "../../Icons/javascript.svg";
import react from "../../Icons/react.svg";
import redux from "../../Icons/redux.svg";
import node from "../../Icons/node.svg";
import express from "../../Icons/express.svg";
import mongodb from "../../Icons/mongodb.svg";
import git from "../../Icons/git.svg";
import algorithm from "../../Icons/algorithm-1.svg";
import communication from "../../Icons/conversation-svgrepo-com.svg";


const frontEndIcons = [
  { id:1 , icon: html, caption: "HTML" },
  { id:2 , icon: css, caption: "CSS" },
  { id:3 , icon: javascript, caption: "JavaScript" },
  { id:4 , icon: react, caption: "React" },
  { id:5 , icon: redux, caption: "Redux" },
  { id:6 , icon: node, caption: "Node" },
  { id:7 , icon: express, caption: "Express", invert: true },
  { id:8 , icon: mongodb, caption: "MongoDB" },
  { id:9 , icon: git, caption: "Git" },
  { id:10, icon: algorithm,caption:"Data structure & Algorithm"},
  { id:11, icon: "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg",caption:"Chakra-ui"},
  { id:12, icon: communication,caption:"Good communication" }
];

const SkillWrapper = styled.div`
  padding: 50px 0;
`;

const SlideSectionOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  > div {
    padding: 20px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    > div {
      padding: 5px;
    }
  }
`;

const IconHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;

  > div {
    padding: 5px;
    text-align: center;
  }
`;

const Icons = styled.figure`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
    margin: 10px 0;
    background-color: #fffafa;
    padding: 10px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 50px;
  }
`;

function Skillset() {
  return (
    <SkillWrapper>
      <MainHeadingWrapper>
        <h1>Skills & Interests</h1>
        <div></div>
      </MainHeadingWrapper>
      <SlideSectionOne>
        <IconHolder>
          {frontEndIcons?.map((item) => (
            <div key={item.id}>
              <Icons invert={item.invert}>
                <img src={item.icon} alt={item.caption}></img>
                
                <figcaption>{item.caption}</figcaption>
              </Icons>
            </div>
          ))}
        </IconHolder>
      </SlideSectionOne>
    </SkillWrapper>
  );
}

export default Skillset;
