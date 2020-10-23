import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BrowseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PaginationArrow = styled(FontAwesomeIcon)`
    display: ${props => props.isvisible? '' : 'none'};
    font-size: 3rem;
    color: ${props => props.theme.gray_600};
    cursor: pointer;
`