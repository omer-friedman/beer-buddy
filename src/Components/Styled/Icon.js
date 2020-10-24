import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* color: ${props => props.color? props.color : props.theme.gray_600}; */
const Icon = styled(FontAwesomeIcon)`
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 27px;
    padding: 10px;
    z-index:1;
    cursor: pointer;
    color: ${props => props.isfavorite ? props.theme.favorite_color : (props.isranked ? props.theme.yellow_400 : props.theme.gray_600)};

    &:hover{
        background: rgba(0,0,0,0.1);
        border-radius: 50%;
    }
`

export default Icon