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
color:black;
padding:2rem;
font-size:2rem;
`;

function Action({ Data, handleGenerateReadme }) {
  console.log(
    JSON.stringify(Data) + "]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[["
  );
  console.log(Data.input[0].value + "]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]77");
  return (
    <div>
      <FlexButton>
        <Button
          Icon={"arrow-back-outline"}
          Title={"back to edit"}
          onPressed={handleGenerateReadme}
        />
        <Button Icon={"copy-outline"} Title={"copy-markdown"} onPressed={""} />
        <Button
          Icon={"download-outline"}
          Title={"download markdown"}
          onPressed={""}
        />
      </FlexButton>
      <Box>
        <div>
          # {(Data.input[0].value || "") + " " + (Data.input[1].value || "")}
          <br />
          {/* {(Data.input[2].value || "") && `## ${Data.input[2].value || ""}`}
          <br />
          {(Data.input[4].value || "") &&
            `🔭 I’m currently working on ${Data.input[4].value || ""} : ${
              Data.input[6].value || ""
            }`}
          <br />
          {(Data.input[8].value || "") &&
            `👯 I’m looking to collaborate on ${Data.input[8].value || ""} : ${
              Data.input[10].value || ""
            }`}
          <br />
          {(Data.input[12].value || "") &&
            `🤝 I’m looking for help with ${Data.input[12].value || ""} : ${
              Data.input[14].value || ""
            }`}
          <br />
          {(Data.input[16].value || "") &&
            `🌱 I’m currently learning ${Data.input[16].value || ""}`}
          <br />
          {(Data.input[18].value || "") &&
            `💬 Ask me about ${Data.input[18].value || ""}`}
          <br />
          {(Data.input[20].value || "") &&
            `📫 How to reach me ${Data.input[20].value || ""}`}
          <br />
          {(Data.input[22].value || "") &&
            `👨‍💻 All of my projects are available at ${
              Data.input[22].value || ""
            }`}
          <br />
          {(Data.input[24].value || "") &&
            `📝 I regularly write articles on ${Data.input[24].value || ""}`}
          <br />
          {(Data.input[26].value || "") &&
            `📄 Know about my experiences ${Data.input[26].value || ""}`}
          <br />
          {(Data.input[28].value || "") &&
            `⚡ Fun fact ${Data.input[28].value || ""}`}
          <br />
        </div> */}
        </div>
      </Box>
    </div>
  );
}

export default Action;
