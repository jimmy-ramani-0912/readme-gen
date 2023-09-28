import React from "react";
import Styled from "styled-components";
import FormTitle from "./FormTitle/FormTitle";
import Input from "./Input/Input";

function Form() {
  const Form = Styled.div`
    padding: 3rem 5rem;
    `;

  const FlexItem = Styled.div`
  display: flex;`;

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
        <Input width={"45%"} title={"w1"} placeholder={"Hi, I'm"} />
        <ML>
          <Input width={"35%"} title={"wpn1"} placeholder={"project name"} />
        </ML>
        <ML>
          <Input width={"35%"} title={"wpl1"} placeholder={"project link"} />
        </ML>
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"45%"} title={"w2"} placeholder={""} />
        <ML>
          <Input width={"35%"} title={"wpn2"} placeholder={"project name"} />
        </ML>
        <ML>
          <Input width={"35%"} title={"wpl2"} placeholder={"project link"} />
        </ML>
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input width={"45%"} title={"w2"} placeholder={""} />
        <ML>
          <Input width={"35%"} title={"wpn2"} placeholder={"project name"} />
        </ML>
        <ML>
          <Input width={"35%"} title={"wpl2"} placeholder={"project link"} />
        </ML>
      </FlexItem>
    </Form>
  );
}

export default Form;
