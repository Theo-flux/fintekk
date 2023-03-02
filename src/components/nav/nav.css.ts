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
  z-index: -1;
  left: 0px;
  top: ${props => (props.openNav ? '60px' : '-50px')};
  transform-origin: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  ${transition}
  ${primaryshadow}

  @media ${device.md} {
    width: fit-content;
    top: 0px;
    left: 0px;
    position: static;
    z-index: 0;
    background-color: none;
    ${noshadow}
  }
`;

export const NavItemPod = styled.p`
  cursor: pointer;
  margin-right: 0rem;
  font-weight: 300;
  color: var(--black);
  ${transition}

  &:hover {
    color: var(--primary);
  }

  @media ${device.md} {
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
