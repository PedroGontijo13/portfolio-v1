import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import ProjectHeading from '../../components/ProjectHeading/ProjectHeading';
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
    </PortfolioContainer>
  )
}

export default Portfolio