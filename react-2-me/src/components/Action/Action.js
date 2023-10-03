import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Button from "./Button/Button";
import Markdown from "react-markdown";

const FlexButton = Styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3rem 5rem;
`;

const BoxStyle = Styled.div`
  background-color: #f3f3f3;
  border: 1.4px solid black;
  margin: 3rem 8.5vw;
  color: black;
  padding: 2rem;
  font-size: 1.2rem;
  line-height: 1;
  display: flex;
  flex-direction: column;
`;

function Action({ Data, handleGenerateReadme }) {
  const [categories, setCategories] = useState();
  const savedCategories = localStorage.getItem("categoriesIconData");
  let filteredData = [];
  console.log(Data.social);
  useEffect(() => {
    if (savedCategories) {
      filteredData = JSON.parse(savedCategories)
        .map((category) => {
          const filteredIcons = category.icons.filter((icon) => icon.isChecked);
          if (filteredIcons.length > 0) {
            return {
              category: category.category,
              icons: filteredIcons,
            };
          }
          return null;
        })
        .filter(Boolean);
      setCategories(filteredData);
    }
  }, []);

  const renderIcons = (icons) => {
    return icons.map((icon) => (
      <div key={icon.name}>
        <img
          src={icon.iconImage}
          style={{ marginRight: "2rem", marginBottom: "1.6rem" }}
          alt={icon.name}
          width="30"
          height="30"
        />
      </div>
    ));
  };

  const renderSocialLinks = (social) => {
    return social.map((item) => (
      <a key={item.title} href={item.title + item.value} target="_blank">
        <img
          src={item.logo}
          style={{ marginRight: "1rem" }}
          width="30"
          height="30"
        />
      </a>
    ));
  };

  const aboutMeMarkdown = Data.input
    .slice(12, 26)
    .map((_, index) => {
      const titleIndex = 12 + index * 2;
      const contentIndex = 13 + index * 2;
      if (
        Data.input[titleIndex] === undefined ||
        Data.input[contentIndex] === undefined
      ) {
        return "";
      }
      const title = Data.input[titleIndex].value || "";
      const content = Data.input[contentIndex].value || "";
      return `${title || content ? `- ${title} ${content}` : ""}`;
    })
    .filter(Boolean)
    .join("\n");

  const markdown = `
  # ${(Data.input[0].value || "") + " " + (Data.input[1].value || "")}
  ## ${Data.input[2].value || ""}
  ---

  ## About Me

  - ${Data.input[3].value || ""}  ${Data.input[4].value || ""} ${
    Data.input[5].value ? `[${Data.input[5].value}]` : ""
  }

  - ${Data.input[6].value || ""}  ${Data.input[7].value || ""} ${
    Data.input[8].value ? `[${Data.input[8].value}]` : ""
  }

  - ${Data.input[9].value || ""}  ${Data.input[10].value || ""} ${
    Data.input[11].value ? `[${Data.input[11].value}]` : ""
  }

  ${aboutMeMarkdown}

  `;

  const finalMarkdown =
    markdown +
    `
  ${
    categories &&
    categories
      .map(
        (category) => `
  ### ${category.category}

  ${category.icons
    .map((icon) => `- [![${icon.name}](${icon.iconImage}](${icon.iconImage})`)
    .join("\n")}
  `
      )
      .join("\n")
  }

  ## Social

  ${renderSocialLinks(Data.social)
    .map(
      (social) =>
        `- [![${social.props.href}](${social.props.src})](${social.props.href})`
    )
    .join("\n")}
  `;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(finalMarkdown);
    alert("Markdown copied to clipboard!");
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([finalMarkdown], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "readme.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <FlexButton>
        <Button
          Icon={"arrow-back-outline"}
          Title={"back to edit"}
          onPressed={handleGenerateReadme}
        />
        <Button
          Icon={"copy-outline"}
          Title={"copy-markdown"}
          onPressed={handleCopyMarkdown}
        />
        <Button
          Icon={"download-outline"}
          Title={"download markdown"}
          onPressed={handleDownloadMarkdown}
        />
      </FlexButton>
      <BoxStyle>
        <Markdown>{markdown}</Markdown>
        {categories &&
          categories.map((category) => (
            <div key={category.category}>
              <h2 style={{ marginBottom: "2rem" }}>{category.category}</h2>
              <div style={{ display: "flex" }}>
                {renderIcons(category.icons)}
              </div>
            </div>
          ))}
        <h2 style={{ marginBottom: "2rem" }}>Social</h2>
        <div style={{ display: "flex" }}>{renderSocialLinks(Data.social)}</div>
      </BoxStyle>
    </div>
  );
}

export default Action;
