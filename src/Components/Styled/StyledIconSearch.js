import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIconSearch = styled(FontAwesomeIcon)`
    margin-right: 1rem;
    opacity: ${props => props.showSearch ? 0.25 : 1};
`

export default StyledIconSearch