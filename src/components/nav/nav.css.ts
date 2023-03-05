import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { device, primaryshadow, noshadow, transition } from '../../utils';

type Props = {
  openNav?: boolean;
};

export const NavContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItemContainer = styled.div<Props>`
  position: absolute;
  z-index: 98;
  left: 0px;
  top: 0px;
  padding: 5rem 2rem;
  transform: ${props => (props.openNav ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background-color: var(--primary);
  ${transition}
  ${primaryshadow}

  @media ${device.md} {
    flex-direction: row;
    padding: 0rem;
    width: fit-content;
    height: auto;
    top: 0px;
    left: 0px;
    transform: scale(1);
    position: static;
    z-index: 0;
    background-color: none;
    background-color: transparent;
    ${noshadow}
  }
`;

export const NavItemPod = styled.p`
  cursor: pointer;
  margin-right: 0rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  ${transition}

  &:hover {
    color: #ffffff80;
  }

  @media ${device.md} {
    &:hover {
      color: var(--primary);
    }
    color: var(--black);
    font-size: 1rem;
    font-weight: 300;
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: none;
  width: fit-content;

  & button:first-of-type {
    margin-right: 1rem;
  }

  @media ${device.md} {
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

export const StyledBiMenu = styled(BiMenu)`
  cursor: pointer;
  display: block;
  font-size: 2rem;

  @media ${device.md} {
    display: none;
  }
`;
