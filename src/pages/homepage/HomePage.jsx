import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../styles/colors";
import PersonIcon from "../../assets/icons/ic_person.svg?react";
import PostForm from "../../components/UI/PostForm";
import QuestionButtonTop from "../../components/UI/QuestionButtonTop";
import Logoimg from "../../assets/logo/txt_logo.svg?react";
import BackImg from "../../assets/logo/img_logo.svg?react";

const StyledDiv = styled.div`
  width: 400px;
  height: 172px;
  background-color: #ffffff;
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 305px;
    height: 156px;
    position: fixed;
    top: 260px;
  }
`

const FormContainer = styled.div`
  width: 336px;
  height: 108px;
  border: none;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 767px) {
    width: 257px;
    position: absolute;
  }
`

const StyledIcon = styled(PersonIcon)`
  position: absolute;
  top: 12px;
  left: 16px;
  width: 20px;
  height: 20px;
`



const BackColor = styled.div`
  background-color: ${colors.GRAYSCALE_20};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImg = styled(BackImg)`
  position: fixed;
  bottom: 0;
  z-index: -5;
  width: 100%;
  height: auto;

  fill: none;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

const MainContainer = styled.div`
  background-color: none;
  width: 100%;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TitleLogo = styled(Logoimg)`
  width: 456px;
  height: 180px;

  @media (max-width: 767px) {
    width: 248px;
    height: 98px;
    position: fixed;
    top: 80px;
  }
`;

//PostForm의 스타일 지정
export const Input = styled.input`
  width: 336px;
  height: 46px;
  border: solid 1px ${colors.GRAYSCALE_40};
  border-radius: 8px;
  background-color: #ffffff;
  padding: 12px 40px;

  &:focus {
    border: solid 1px ${colors.BROWN_40};
  }

  @media (max-width: 767px) {
    width: 257px;
  }
`;

export const QuestionButton = styled.button`
  width: 336px;
  height: 46px;
  background-color: ${colors.BROWN_40};
  cursor: pointer;
  border-radius: 8px;
  border: none;
  text-decoration: none;
  color: #ffffff;

  transition: transform 0.2s ease-in-out;

  &:active {
    background-color: ${(props) =>
      props.disabled ? colors.BROWN_20 : colors.BROWN_50};
    transform: scale(0.98);
  }

  @media (max-width: 767px) {
    width: 257px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 108px;
  border: none;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


function HomePage() {
  return (
    <BackColor>
      <BackgroundImg />
      <Link to="/list">
        <QuestionButtonTop text="질문하러 가기" />
      </Link>
      <MainContainer>
        <TitleLogo />
        <StyledDiv>
          <FormContainer>
            <StyledIcon/>
            <PostForm/>
          </FormContainer>
        </StyledDiv>
      </MainContainer>
    </BackColor>
  );
}

export default HomePage;
