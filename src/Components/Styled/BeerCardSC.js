import styled, { css } from 'styled-components'

export const CardBox = styled.div`
    width: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: context-menu;
    padding: 0.2em 1em;
    line-height: 1.5em;
    background: white;
    margin: 1rem 5rem 5rem 5rem;
    ${props => props.islarge? css`transform: scale(1.5)` : ''};

    &:hover{
        box-shadow: 0 10px 25px rgba(21,21,21,.1);
        ${props => !props.islarge? css`transform: translate3d(0,-2px,0)` : ''};
    }
`

export const BeerHeader = styled.div`
    text-transform: uppercase;
    font-size: 1.33rem;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    text-align: center;
    padding-bottom: 3px;
    border-bottom: 1px solid ${props => props.theme.gray_600};
`

export const Description = styled.div`
    height: 10rem;
    margin-left: -33px;
    margin-top: 1rem;
    overflow-y: auto;
    ${prop => prop.isdescexp? prop.isdescexp && css`
        height: auto;
        padding: 10px 0;
    ` : null}

`

export const RowContainer = styled.div`
    display: flex;
    width: 100%;
`

export const ExpadDescription = styled.div`
    display: flex;
    justify-content: center;
    color: ${props =>props.theme.gray_600};
    cursor: pointer;
`
export const Mask = styled.div`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vw;
    z-index: 50;
`

export const LargeCard = styled.div`
    position: fixed;
    top: 0;
    left: 30%;
    z-index: 50;
`