import styled from 'styled-components';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { device, radius, transition } from '../../utils';

type Props = {
  bgColor: string;
};

export const ServicesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServiceTopSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  & h1 {
    color: var(--deepblue);
  }
`;

export const ServiceGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export const ServiceGridItem = styled.div<Props>`
  background-color: ${props => props.bgColor && `${props.bgColor}`};
  padding: 2rem;
  border-radius: ${radius.md};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 450px;

  @media ${device.md} {
    height: 500px;
  }

  @media ${device.lg} {
    height: 540px;
    margin-bottom: 3rem;
  }
`;

export const ServiceInfo = styled.div``;

export const ServiceTitle = styled.h1`
  color: var(--deepblue);
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media ${device.md} {
    font-size: 30px;
  }
`;

export const ServiceText = styled.p`
  color: var(--gray);
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const ServiceArrow = styled(MdOutlineArrowRightAlt)`
  color: var(--primary);
  font-size: 1.2rem;
  transform: translateX(0px);
  ${transition}
`;

export const ReadMore = styled.div`
  cursor: pointer;
  display: flex;
  width: fit-content;
  justify-content: flex-start;
  align-items: center;
  color: var(--primary);
  ${transition}

  &:hover ${ServiceArrow} {
    transform: translateX(5px);
    
  }
`;

export const ReadmoreText = styled(ServiceText)`
  color: var(--primary);
  margin-right: 0.5rem;
  margin-bottom: 0rem;
  font-weight: 700;
`;

export const ServiceImg = styled.img`
  width: 100%;
  height: 200px;
  object-position: center;

  @media ${device.md} {
    width: 100%;
    height: 250px;
  }
`;
