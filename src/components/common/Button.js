import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const ButtonBox = styled.button`
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background: #0486dd;
  color: #fff;
  border-radius: 50x;
  border: none;
  &:hover {
    background: ${lighten(0.1, "#0486dd")};
  }

  ${(props) =>
    props.outline &&
    css`
      background: #fff;
      border: 1px solid #0486dd;
      color: #0486dd;
      &:hover {
        background: ${darken(0.1, "#fff")} !important;
      }
    `}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}


  ${(props) =>
    props.red &&
    css`
      background: #740202;
      border: 1px solid #740202;
      &:hover {
        background: ${lighten(0.1, "#740202")};
      }
      ${(props) =>
        props.outline &&
        css`
          background: #fff;
          color: #740202;
        `}
    `}

  ${(props) =>
    props.gray &&
    css`
      background: #747474;
      border: 1px solid #747474;
      &:hover {
        background: ${lighten(0.1, "#747474")};
      }
      ${(props) =>
        props.outline &&
        css`
          background: #fff;
          color: #747474;
        `}
    `}

  ${(
    props // props 안에 있는 인자를 styled components가 속성에 넣어줌
  ) =>
    props.large &&
    css`
      width: 200px;
      height: 45px;
    `}
  ${(props) =>
    props.small &&
    css`
      width: 100px;
      height: 25px;
    `}
`;

export default function Button({ children, ...rest }) {
  console.log(rest);
  return <ButtonBox {...rest}>{children}</ButtonBox>;
}
