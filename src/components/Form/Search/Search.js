import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 4px;
  padding: 0.8rem;
  width: 30rem;

  @media screen and (max-width: 768px) {
    width: 25rem;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.6rem;
`;

const SearchIcon = styled.span`
  margin-left: auto;
  cursor: pointer;
  font-size: 1.8rem;
  display: ${(props) => (props.showSearchIcon ? "inline" : "none")};
`;

const ClearIcon = styled.span`
  margin-left: auto;
  font-size: 1.8rem;
  cursor: pointer;
  display: ${(props) => (props.showClearIcon ? "inline" : "none")};
`;

function SearchBar(props) {
  const { placeholder, value, onSearch, onClear } = props;

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={placeholder || "Search..."}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      <SearchIcon showSearchIcon={!value} onClick={handleSearch}>
        <ion-icon name="search-outline"></ion-icon>
      </SearchIcon>
      <ClearIcon showClearIcon={value} onClick={handleClear}>
        <ion-icon name="close-outline"></ion-icon>
      </ClearIcon>
    </SearchContainer>
  );
}

export default SearchBar;
