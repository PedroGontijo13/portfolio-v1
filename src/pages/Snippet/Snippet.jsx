import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";

const SnippetContainer = styled.div`
  padding: 1rem 2rem;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
`;

const CardContent = styled.div`
  height: 200px;
  border:
`

export default function Snippet() {
  const [content, setContent] = useState([]);
  const [contentArea, setContentArea] = useState();
  const { theme } = useContext(ThemeContext);

  async function search(query) {
    try {
      const response = await axios.get(
        `http://api.serpstack.com/search?access_key=6ac98416d3589a9bd42fb33117020c37&query=${query}`
      );
      console.log(response.data.organic_results);
      setContent(response.data.organic_results);
      createHtml();
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearchSubmit = async (event, searchQuery) => {
    event.preventDefault();
    console.log(await search(searchQuery));
    setContentArea(<div>{createHtml()}</div>);
  };

  const createHtml = () => {
    return content.map((contents, index) => {
      return (
        <div key={index}>
          <p>{contents.title}</p>
        </div>
      );
    });
  };

  return (
    <SnippetContainer theme={theme}>
      <SearchBar Search={handleSearchSubmit} />
      {contentArea}
    </SnippetContainer>
  );
}
