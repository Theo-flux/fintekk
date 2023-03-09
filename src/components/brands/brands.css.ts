import styled, { keyframes } from 'styled-components';
import { device } from '../../utils';

const primary = keyframes`
 from {
    left: 0%;
  }
  to {
    left: -110%;
  }
`;

const secondary = keyframes`
  from{
   left: 130%;
  }
  to {
    left: 0%;
  }
`;

export const BrandContainer = styled.div`
  padding: 1rem;
  position: relative;
  height: 80px;
  width: 100%;
  overflow-x: hidden;
`;

export const BrandElement = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
  top: 0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BrandPrimary = styled(BrandElement)`
  animation: ${primary} 10s linear infinite;
  /* margin-right: 15rem; */
`;

export const BrandSecondary = styled(BrandElement)`
  display: none;
  animation: ${secondary} 10s linear infinite;

  @media ${device.md} {
    display: flex;
  }
`;

export const BrandImage = styled.img`
  @media screen and (max-width: 767px) {
    transform: scale(0.7);
  }
`;
