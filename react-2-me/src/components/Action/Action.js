import React, { useState } from "react";
import Styled from "styled-components";
import Button from "./Button/Button";

const FlexButton = Styled.div`
display:flex;
justify-content:space-around;
margin:3rem 5rem;
`;

const Box = Styled.div`
background-color: #f3f3f3;
border:1.4px solid black;
margin:3rem 8.5vw;
height:50rem;
`;

function Action({ toggleFormVisibility }) {
  const [showForm, setShowForm] = useState(false);

  const handleBackToEdit = () => {
    setShowForm(true);
    toggleFormVisibility();
  };

  return (
    <div>
      <FlexButton>
        <Button
          Icon={"arrow-back-outline"}
          Title={"back to edit"}
          onPressed={handleBackToEdit}
        />
        <Button Icon={"copy-outline"} Title={"copy-markdown"} onPressed={""} />
        <Button
          Icon={"download-outline"}
          Title={"download markdown"}
          onPressed={""}
        />
      </FlexButton>
      <Box>
        <p></p>
      </Box>
    </div>
  );
}

export default Action;
