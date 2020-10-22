import styled from 'styled-components';
import { Link } from "react-router-dom"


export const MenuHeader = styled.div`
    font-weight: bold;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    padding: 0.75rem 0 0 10px;
    font-size: 1.5rem;
`

export const LinkSC = styled(Link)`
    display: block;
    color: ${props=> props.theme.blue_500};
    font-size: 1.5rem;
    text-decoration: none;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid ${props => props.theme.gray_600};
  :first-of-type {
    border-top: none;
  }
`;