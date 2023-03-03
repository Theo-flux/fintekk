import styled from 'styled-components';
import { StyledH3, StyledTitle } from '../../shared';
import { device } from '../../utils';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & div {
      width: 45%;
    }
  }

  @media ${device.lg} {
    & div {
      width: 50%;
    }
  }
`;

export const HoreSection = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 530px;
  }
`;

export const HeroFig = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 2rem;

  @media ${device.md} {
    margin-top: 0rem;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
`;

export const HeroTitle = styled(StyledTitle)`
  color: var(--deepblue);
  width: 100%;
  text-align: center;

  @media ${device.md} {
    text-align: left;
  }
`;

export const HeroText = styled(StyledH3)`
  font-weight: 300;
  color: var(--gray);
  min-width: 300px;
  margin: 0rem auto;
  text-align: center;

  @media ${device.md} {
    text-align: left;
    margin: 0rem;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;

  button:nth-of-type(2) {
    transform: translateY(10px);
  }

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    button:nth-of-type(2) {
      transform: translateX(10px);
    }
  }
`;
