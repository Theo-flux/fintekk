import styled from 'styled-components';
import { StyledH3, StyledTitle } from '../../shared';
import { device } from '../../utils';
import { FaApple } from 'react-icons/fa';
import { SiGoogleplay } from 'react-icons/si';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    justify-content: flex-start;
    align-items: flex-start;
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
  width: 100%;
  max-width: 400px;
  color: var(--deepblue);
  width: 100%;
  text-align: center;

  @media ${device.md} {
    text-align: left;
    max-width: 530px;
  }
`;

export const HeroText = styled(StyledH3)`
  font-weight: 300;
  color: var(--gray);
  min-width: 300px;
  margin: 1rem auto;
  text-align: center;

  @media ${device.md} {
    text-align: left;
    margin: 1rem 0rem;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: fit-content;

  button:nth-of-type(1) {
    transform: translateY(10px);
  }

  @media ${device.md} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    button:nth-of-type(1) {
      transform: translateY(0px);
    }
    button:nth-of-type(2) {
      transform: translateX(10px);
    }
  }
`;

export const GoogleIcon = styled(SiGoogleplay)`
  font-size: 1.3rem;
  margin-right: 0.35rem;
`;

export const AppleIcon = styled(FaApple)`
  font-size: 1.3rem;
  margin-right: 0.35rem;
`;
