import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../components/common/Button";

const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  background: #fff;
  padding: 20px 25px;
  min-width: 300px;
  h1 {
    font-size: 25px;
    font-weight: bold;
  }
`;

export default function MainModal() {
  return (
    <ModalLayout>
      <ModalBox>
        <h1>모달</h1>
        <span>나 모달인데!</span>
        <ModalBtnWrapper>
          <Button red onClick={"onToggleModal"}>
            취소
          </Button>
          <Button>확인</Button>
        </ModalBtnWrapper>
      </ModalBox>
    </ModalLayout>
  );
}
