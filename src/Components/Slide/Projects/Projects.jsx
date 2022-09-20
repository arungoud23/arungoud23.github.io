import React from "react";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";
import {Modal} from "@mui/material";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const useStyles = makeStyles((theme) => ({
    root: {
      overflowY: "scroll",
      padding: "100px 0 ",
    },
  }));
  
  const BridgeTwo = styled.div`
    padding-top: 150px;
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  
    /* min-height: 400px; */
    z-index: 99;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    > div:nth-child(2) {
      padding: 50px 0;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      grid-row-gap: 20px;
      width: 90%;
      margin: 30px auto;
      align-items: center;
      justify-content: space-evenly;
      background-size: cover;
      background-position: center;
    }
  `;
  
  let projectArray = [
    {
        id:"1",
      img: "https://i.imgur.com/vsgSd40.png",
      title: "Shopperstop",
      description: "E-Commerce shop",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Advancedjs",
        // "Adavancejavascript"
      ],
      repoLink: "https://github.com/mshakir082/Shoppers_Stop-Clone",
      demoLink: "https://steady-bavarois-32dc0a.netlify.app/",
      type: "Group project",
      blogLink: "#",
      features: [
        "Signup and Login.",
        "A user can add a product to cart or to wishlist.",
        "A user can sort and filter.",
        "A user can order by filling in the required details",
        "Orders history can be viewer in profile page",
        "User can search product"
      ],
    },
    // second project 
    {
        id:"2",
      img: "https://i.imgur.com/hA032Ea.png",
      title: "Rodan and field",
      description: "Rodan and field is an ecommerce site,it sells skincare products it is trusted skincare brand in the world ",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        
      ],
      repoLink: "https://github.com/mohitagrawal22/Construct_Week_Project",
      demoLink: "https://eloquent-almeida-697942.netlify.app/index.html",
      type: "Group project",
      blogLink: "#",
      features: [
        "Beautiful Homepage with product list",
        "Signup and Login.",
        "User Can search books",
        "Users can can read the book and buy ",
        "Contact page",
      
      ],
      responsibilities: [
        "Home page ",
        "SignUp and Login page",
        "Contact page",
      ],
    },
    // third project 
    {
      img: "https://i.imgur.com/6ZhRkwv.png",
      title: "Cricket.com",
      description: "Clone of cricket.com  where user can know scores of present match related information",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Chakra"
      
       
      ],
      repoLink: "https://github.com/Salman-2523/aromatic-pull-7043",
      demoLink: "https://cricket-aromatic-pull.netlify.app/",
      type: "Group Project",
      blogLink: "#",
      features: [
        "Beautiful Homepage with different country cricket score",
        
        "User Can get to know team detail of cricket score",
        "Users can can get know that all team details with schedule ",
       
      
      ],
      responsibilities: [
        "Home page ",
        "Seach bar",
        "Design",
      ],
    },
  
  
  
    
   
  ];
  
  function Projects() {
    const [panel, setPanel] = React.useState(false);
    let [currentProject, setCurrentProject] = React.useState({});
    const classes = useStyles();
    return (
      <div id="projects">
        <BridgeTwo backgroundImg={currentProject.img}>
          <MainHeadingWrapper>
            <h1>Projects</h1>
            <div></div>
          </MainHeadingWrapper>
          <div>
            {projectArray?.map((project) => (
              <ProjectCard
                key={project.id}
                setCurrentProject={setCurrentProject}
                setPanel={setPanel}
                {...project}
              ></ProjectCard>
            ))}
          </div>
          <Modal
            className={classes.root}
            open={panel}
            onClose={() => setPanel(false)}
          >
            <ProjectDetail
              {...currentProject}
              setPanel={setPanel}
            ></ProjectDetail>
          </Modal>
        </BridgeTwo>
      </div>
    );
  }
  
  export default Projects;
  