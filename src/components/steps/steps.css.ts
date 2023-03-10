import styled from 'styled-components';
import { StyledH1, StyledH4 } from '../../shared';
import { device } from '../../utils';

export const StepsContainer = styled.div`
  width: 100%;
  /* border: 1px solid magenta; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StepFigure = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */

  @media ${device.md} {
    width: 45%;
    /* justify-content: flex-start;
    align-items: flex-start; */
  }
`;

export const StepImg = styled.img`
  width: 250px;
  object-fit: center;

  @media ${device.md} {
    width: 250px;
  }

  @media ${device.lg} {
    width: 300px;
  }
`;

export const StepsWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;

  @media ${device.md} {
    margin-top: 0rem;
    width: 45%;
  }
`;

export const StepStyledH1 = styled(StyledH1)`
  color: var(--deepblue);
  font-weight: 600;
  text-align: center;

  @media ${device.md} {
    text-align: left;
    margin-top: 0rem;
  }
`;

export const StepCardContainer = styled.div`
  margin: 3rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BtnWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepCard = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export const StepCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  @media ${device.md} {
    margin-right: 4rem;
  }
`;

export const StepColOther = styled(StepCol)`
  align-items: flex-start;
`;

export const StepNo = styled(StyledH4)`
  color: var(--primary);
  margin-bottom: 2rem;
`;

export const StepTitle = styled(StyledH4)`
  color: var(--deepblue);
  text-align: left;
  margin-bottom: 1.5rem;
`;
export const StepText = styled(StyledH4)`
  font-weight: 300;
  text-align: left;
`;
export const StepLine = styled.div`
  width: 1px;
  height: 100px;
  background-color: var(--primary);
`;
