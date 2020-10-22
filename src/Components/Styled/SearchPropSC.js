import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const PropBar = styled.div`
    padding: 5px 10px;
    color: #000000;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid ${props=> props.theme.gray_600};
    margin-left: 20px;
    text-transform: uppercase;
    justify-content: center;
    align-items:center;
    border-radius: 5px;
`
export const RemoveProp = styled(FontAwesomeIcon)`
    margin-left: 1rem;
    cursor: pointer;
`