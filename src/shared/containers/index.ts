import styled from 'styled-components';
import { primaryshadow } from '../../utils';

type Props = {
  bgColor?: string;
};

export const SectionTag = styled.section<Props>`
  background-color: ${props => (props.bgColor ? `${props.bgColor}` : `white`)};
`;

export const DivTag = styled.div`
  padding: 4rem 0rem;
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const NavWrapper = styled.div`
  background-color: white;
  ${primaryshadow}
  z-index: 99;
`;

export const NavTag = styled.nav`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const FooterTag = styled.footer`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
`;
