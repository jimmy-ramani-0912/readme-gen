import React from "react";
import Styled from "styled-components";
import FormTitle from "./FormTitle/FormTitle";
import Input from "./Input/Input";
import CategoryList from "./Categories/Categories";
import Social from "./Social/Social";

function Form({ toggleFormVisibility }) {
  const Form = Styled.div`
    padding: 3rem 5rem;
    `;

  const FlexItem = Styled.div`
  display: flex;
  gap:10rem;
  `;

  const ML = Styled.div`
  width: 100%;
  margin-left:2rem;
  `;

  const Space = Styled.div`
  height:3.4rem;
  `;

  const SpaceM = Styled.div`
    height:1.4rem;
`;

  const Box = Styled.div`
  margin:auto;
  width: 26rem;
  border: 0.2rem solid black;
  & h1{
    text-align: center;
    color:#0B0B23;
    font-size:2.2rem;
    font-weight:500;
    padding:0.8rem ;
  }
  cursor:pointer;
  transition: box-shadow 0.3s ease-in-out;
  animation: pulseShadow 0.8s infinite; /* Apply animation on hover */

    @keyframes pulseShadow {
      0% {
        box-shadow: 0px 0px 0px 3px rgb(128, 128, 128, 0.0);
      }
      25% {
        box-shadow: 0px 0px 0px 6px rgb(128, 128, 128, 0.1);
      }
      50% {
        box-shadow: 0px 0px 0px 9px rgb(128, 128, 128, 0.3); /* Increase shadow intensity */
      }
      75% {
        box-shadow: 0px 0px 0px 6px rgb(128, 128, 128, 0.1); /* Increase shadow intensity */
      }
      100% {
        box-shadow: 0px 0px 0px 3px rgb(128, 128, 128, 0); /* Increase shadow intensity */
      }
    }
`;
  const handleGenerateReadme = () => {
    // Add logic to generate the README here

    // Toggle the visibility to hide the form and show Action and HeadingTitle
    toggleFormVisibility();
  };
  return (
    <Form>
      <FormTitle headingTitle={"Title"} />
      <FlexItem>
        <Input width={"15%"} title={"title"} placeholder={""} />
        <ML>
          <Input width={"45%"} title={"title"} placeholder={"name"} />
        </ML>
      </FlexItem>
      <Space />
      <FormTitle headingTitle={"Subtitle"} />
      <Input width={"70%"} title={"title"} placeholder={""} />
      <Space />
      <FormTitle headingTitle={"Work"} />
      <FlexItem>
        <Input width={"25%"} title={"w1"} placeholder={"Hi, I'm"} />
        <Input width={"20%"} title={"wpn1"} placeholder={"project name"} />
        <Input width={"20%"} title={"wpl1"} placeholder={"project link"} />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"25%"} title={"w2"} placeholder={""} />
        <Input width={"20%"} title={"wpn2"} placeholder={"project name"} />
        <Input width={"20%"} title={"wpl2"} placeholder={"project link"} />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"25%"} title={"w3"} placeholder={""} />
        <Input width={"20%"} title={"wpn3"} placeholder={"project name"} />
        <Input width={"20%"} title={"wpl3"} placeholder={"project link"} />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"25%"} title={"w4"} placeholder={""} />
        <Input
          width={"25%"}
          title={"wpn4"}
          placeholder={"Frameworks, courses etc."}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"25%"} title={"w5"} placeholder={""} />
        <Input
          width={"25%"}
          title={"wpn5"}
          placeholder={"react, vue and gsap"}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"25%"} title={"w6"} placeholder={""} />
        <Input width={"25%"} title={"wpn6"} placeholder={"example@gmail.com"} />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"25%"} title={"w7"} placeholder={""} />
        <Input width={"25%"} title={"wpn7"} placeholder={"portfolio link"} />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"25%"} title={"w8"} placeholder={""} />
        <Input width={"25%"} title={"wpn8"} placeholder={"blog link "} />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"25%"} title={"w9"} placeholder={""} />
        <Input width={"25%"} title={"wpn9"} placeholder={"resume link"} />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"25%"} title={"w9"} placeholder={""} />
        <Input
          width={"25%"}
          title={"wpn9"}
          placeholder={"I think I am funny"}
        />
      </FlexItem>
      <Space />
      <CategoryList />
      <Space />
      <FormTitle headingTitle={"Social"} />
      <SpaceM />
      <Social />
      <Space />
      <Box onClick={handleGenerateReadme}>
        <h1>Generate README</h1>
      </Box>
    </Form>
  );
}

export default Form;
