import React from "react";
import styled from "@emotion/styled";
import flower from "../img/flower.png";

const InvitationText = () => {
  return (
    <TextContentWrapper>
      <TitleText>
          Дорогая Сикош 😊 ,<br/><br/>

          Если бы я был поэтом, я бы написал сонет.<br/>
          Если бы художником – нарисовал твой портрет.<br/>
          Но я просто парень, который хочет провести с тобой этот особенный день. 💖<br/>
      </TitleText>
    </TextContentWrapper>
  );
};

export default InvitationText;

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const NameText = styled.div`
  font-family: "GreatFont";
  color: #a11b14;
  font-size: 42px;
  line-height: 280%;
  @media (max-width: 320px) {
    font-size: 38px;
  }
`;

const TitleText = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  color: #a11b14;
  font-size: 19px;
  text-align: start;
  font-weight: 600;
  font-weight: 200;
    padding: 0 20px;
`;
const ContentText = styled.h2`
  font-family: "BKANTKZ", Arial, sans-serif;
  line-height: 160%;
  font-weight: 200;
  text-align: center;
  font-size: 18px;
  margin: 0;

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;
