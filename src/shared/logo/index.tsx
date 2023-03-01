import styled from 'styled-components';
import fLogo from '../../assets/images/fintekk_logo.svg';
import { device } from '../../utils';

const Container = styled.div`
`;

const ContainerWhite = styled.div`
  width: 100%;
  padding: 0 0.5rem;
  @media ${device.xl} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyledImg = styled.img`
    width: 150px;
`;

export function Logo() {
  return (
    <Container>
      <StyledImg src={fLogo} alt="mpaylogo" />
    </Container>
  );
}