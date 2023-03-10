import styled from 'styled-components';
import { StyledH1, StyledText } from '../../shared';
import { device, radius } from '../../utils';
import { HiStar, HiOutlineStar } from 'react-icons/hi';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

type NumProps = {
  active: boolean;
};

export const Testimonialcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${device.md} {
    flex-direction: row;
  }
`;

export const TestimonialSection = styled.div`
  width: 100%;
  /* border: 1px solid magenta; */
  text-align: center;

  @media ${device.md} {
    text-align: left;
    width: 40%;
  }

  @media ${device.xl} {
    width: 30%;
  }
`;

export const TestimonialTitle = styled(StyledH1)`
  color: var(--deepblue);
  font-weight: 600;
`;

export const TestimonyWrapper = styled.div`
  /* border: 1px solid magenta; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media ${device.md} {
    width: 50%;
  }

  @media ${device.lg} {
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media ${device.xl} {
    width: 650px;
    /* width: 60%; */
  }
`;

export const TestimonyCardWrapper = styled.div`
  /* border: 1px solid magenta; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  border-radius: ${radius.md};
  overflow: hidden;

  @media ${device.md} {
    width: 90%;
  }

  @media ${device.lg} {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    max-height: max-content;
    max-height: max-content;
  }
`;

export const TestimonyCard = styled.div`
  padding: 1.5rem;
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  /* border: 1px solid magenta; */
  background-color: #fff;
`;

export const TestimonyText = styled(StyledText)``;

export const TestimonyInner = styled.div`
  margin-top: 2rem;
`;

export const TestimonyName = styled(StyledText)`
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--deepblue);
  margin-bottom: 0.5rem;
`;

export const TestimonyRatings = styled.div``;

export const StyledHiStar = styled(HiStar)`
  font-size: 1rem;
  color: #fac12f;
`;

export const StyledHiOutlineStar = styled(HiOutlineStar)`
  font-size: 1rem;
  color: #9d9d9d;
`;

export const TestimonyNavigator = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;

  @media ${device.lg} {
    margin-top: 0rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledBsArrowUp = styled(BsArrowUp)`
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--deepblue);
  transform: rotate(-90deg);
  margin-right: 1rem;

  @media ${device.lg} {
    transform: rotate(0deg);
    margin-right: 0rem;
    margin-bottom: 1rem;
  }
`;

export const StyledBsArrowDown = styled(BsArrowDown)`
  cursor: pointer;
  font-size: 1rem;
  color: var(--deepblue);
  transform: rotate(-90deg);

  @media ${device.lg} {
    transform: rotate(0deg);
  }
`;

export const NumberPod = styled.div<NumProps>`
  cursor: pointer;
  margin-right: 1rem;
  background-color: ${props =>
    props.active ? 'var(--deepblue)' : 'transparent'};
  border-radius: 50px;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.lg} {
    margin-right: 0rem;
    margin-bottom: 0.5rem;
  }
`;

export const Number = styled.p<NumProps>`
  font-size: 1.1rem;

  color: ${props => (props.active ? 'white' : 'var(--deepblue)')};
`;
