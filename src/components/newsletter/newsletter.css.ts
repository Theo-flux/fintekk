import styled from 'styled-components';
import { StyledH1 } from '../../shared';
import { radius, device } from '../../utils';

export const NewsletterContainer = styled.div`
  background-color: var(--primary);
  border-radius: ${radius.md};
`;

export const NewsWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${device.md} {
    padding: 3rem;
    justify-content: center;
    align-items: center;
  }
`;

export const NewsLetterTitle = styled(StyledH1)`
  color: white;
  text-align: left;
  width: 100%;
  max-width: 400px;

  @media ${device.base} {
    text-align: center;
  }
`;

export const Form = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 500px;
  border: 1px solid white;
  border-radius: ${radius.md};
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
`;

export const FormInput = styled.input`
  padding: 0.7rem;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;

  &::placeholder {
    color: white;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
  display: none;
  padding: 0.7rem 2rem;
  border: none;
  outline: none;
  border-radius: ${radius.md};
  background-color: white;
  color: var(--black);

  @media ${device.base} {
    display: block;
  }
`;

export const FormNewButton = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  width: fit-content;
  display: block;
  padding: 0.75rem 2rem;
  border: none;
  outline: none;
  border-radius: ${radius.md};
  background-color: white;
  color: var(--black);

  @media ${device.base} {
    display: none;
  }
`;