import styled from 'styled-components';
import { StyledTitle } from '../../shared';

export const ActiveContainer = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 2rem auto;
    text-align: center;
`;

export const ActiveStyledTitle = styled(StyledTitle)`
    font-weight: 600;
    color: var(--deepblue);

    & span {
        color: var(--primary);
    }
`;