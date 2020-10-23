import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Rank = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
   
    select{
        font-family: 'Rubik', sans-serif;
        background: transparent;
        color: black;
        font-weight: bold;
        margin-right: -39px;
        margin-top: 9px;
        outline: none;
        border: none;
        z-index: 50;
        padding: 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
        
        option{
            color: black;
            padding: 15px;
        }
    }
`

export const StarIcon = styled(FontAwesomeIcon)`
    color: ${props => props.rank > 0? props.theme.yellow_400 : ''}
`