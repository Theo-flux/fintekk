import React from 'react';
import { Button, DivTag, SectionTag } from '../../shared';
import {
  StepsContainer,
  StepFigure,
  StepImg,
  StepsWrapper,
  StepStyledH1,
  StepCardContainer,
  StepCard,
  StepCol,
  StepColOther,
  StepNo,
  StepTitle,
  StepLine,
  StepText,
  BtnWrapper,
} from './steps.css';
import Phonemockup from '../../assets/images/phone.svg';
import { stepsArr } from './stepsdata';

function Steps() {
  return (
    <SectionTag>
      <DivTag>
        <StepsContainer>
          <StepFigure>
            <StepImg src={Phonemockup} alt="phone_mockup" />
          </StepFigure>

          <StepsWrapper>
            <StepStyledH1>
              Start the journey to reach your financial goals today.
            </StepStyledH1>

            <StepCardContainer>
              {stepsArr.map((step, index) => {
                const { no, title, text } = step;
                return (
                  <StepCard key={index}>
                    <StepCol>
                      <StepNo>{no}</StepNo>
                      {index !== stepsArr.length - 1 && <StepLine />}
                    </StepCol>
                    <StepColOther>
                      <StepTitle>{title}</StepTitle>
                      <StepText>{text}</StepText>
                    </StepColOther>
                  </StepCard>
                );
              })}
            </StepCardContainer>
            <BtnWrapper>
              <Button>Try Fintekk now</Button>
            </BtnWrapper>
          </StepsWrapper>
        </StepsContainer>
      </DivTag>
    </SectionTag>
  );
}

export default Steps;
