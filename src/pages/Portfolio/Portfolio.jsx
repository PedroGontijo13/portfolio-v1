import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import ProjectHeading from '../../components/ProjectHeading/ProjectHeading';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ProjectPortifolio from '../../components/ProjectPortifolio/ProjectPortifolio';
const PortfolioContainer = styled.div`
    padding: 1rem 2rem;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
`;

const Portfolio = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <PortfolioContainer theme={theme}>
      <ProjectHeading />
      <ProjectPortifolio />
    </PortfolioContainer>
  )
}

export default Portfolio