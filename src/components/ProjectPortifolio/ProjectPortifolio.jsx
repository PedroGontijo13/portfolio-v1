import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import ProjectCard from "../Card/ProjectCard/ProjectCard";
import SeeMoreButton from "../Button/SeeMoreButton/SeeMoreButton";
import WebSiteImage from "../../assets/website.png";
import ProjectImg from "../../assets/project.jpg";
const Wrapper = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 2rem;
`;

const ProjectPortifolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <ProjectCard
        type={"Web Development"}
        title={"React Movies"}
        content={
          "Movies page that contains movie information, such as ratings. Using React Js and Axios to fetch the Movie Db Api data."
        }
        image={ProjectImg}
      />
      <SeeMoreButton />
    </Wrapper>
  );
};

export default ProjectPortifolio;
