import styled from 'styled-components';
import { primaryshadow } from '../../utils';

type Props = {
  bgColor?: string;
};

export const SectionTag = styled.section<Props>`
  margin: 1rem 0rem;
  background-color: ${props => (props.bgColor ? `${props.bgColor}` : `white`)};
`;

export const DivTag = styled.div``;

export const NavWrapper = styled.div`
  background-color: white;
  ${primaryshadow}
  z-index: 99;
`;

export const NavTag = styled.nav`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const FooterTag = styled.footer``;
