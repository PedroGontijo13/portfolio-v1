import React from 'react'
import styled from 'styled-components'
import SnippetCard from '../Card/SnippetCard/SnippetCard';
import SeeMoreButton from '../Button/SeeMoreButton/SeeMoreButton';
const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .list{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(556px, 1fr));
        gap: 1rem;
        @media (max-width: 768px) {
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
        }
    }
`;

const Title =  styled.h1`
    font-size: 48px;
`;

const SnippetSection = () => {
  return (
    <Wrapper>
        <Title>Code Snippet</Title>
        <div className='list'>
            <SnippetCard />
            <SnippetCard />
            <SnippetCard />
            <SnippetCard />
        </div>
        <SeeMoreButton />
    </Wrapper>
  )
}

export default SnippetSection