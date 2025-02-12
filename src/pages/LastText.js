import React from "react";
import styled from "@emotion/styled";
import flower from "../img/flower.png";

const LastText = () => {
  return (
    <TextContentWrapper>
        <TitleText>
            Будут сюрпризы, улыбки и, конечно же, я – твой главный поклонник! 🎭<br/><br/>

            ⚠ Внимание: без тебя это приглашение превращается в тыкву! 🎃<br/><br/>
            Так что приходи, ведь идеальное 14 февраля – это когда ты рядом.
        </TitleText>
    </TextContentWrapper>
  );
};

export default LastText;

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
