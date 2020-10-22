import styled from 'styled-components';

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    margin: 0  0 0.75rem 12rem;
    color: ${props => props.theme.gray_600};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    width: -moz-fit-content;
    width: fit-content;
    background: white;
    cursor: pointer;
    padding: 1rem;
    height:1rem;
`;

export default SearchBar