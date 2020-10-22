import styled from 'styled-components'

export const BrowseContainer = styled.div`
    /* flex flex-row items-center justify-center */
    display: flex;
    align-items: center;
    justify-content: center;
`

// text-5xl text-gray-600 cursor-pointer
export const PaginationArrow = styled.div`
    font-size: 3rem;
    color: ${props => props.theme.gray_600};
    cursor: pointer;
`