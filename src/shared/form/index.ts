import styled from 'styled-components';
import { transition, radius } from '../../utils';

export const ButtonClass = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  width: fit-content;
  font-weight: 500;
  border-radius: ${radius.md};
  font-size: 1rem;
`;

export const Button = styled(ButtonClass)`
  background-color: var(--primary);
  color: white;
  ${transition}

  &:hover {
    background-color: #2e5cff30;
    color: var(--primary);
  }
`;

export const BtnWhite = styled(Button)`
  background-color: white;
  color: var(--gray);

  &:hover {
    background-color: #fff;
    color: var(--gray);
  }
`;

export const OutlineButton = styled(ButtonClass)`
  background-color: transparent;
  color: var(--primary);
  outline: 1px solid var(--primary);
  outline-offset: -1px;
  ${transition}

  &:hover {
    outline: 1px solid transparent;
    background-color: #2e5cff30;
    color: var(--primary);
  }
`;

export const BtnWithIcon = styled(OutlineButton)`
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-around;
  outline: 1px solid var(--black);
  outline-offset: -1px;

  &:hover {
    outline: 1px solid transparent;
    color: var(--black);
  }
`;
