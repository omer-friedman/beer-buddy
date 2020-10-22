import styled from 'styled-components';
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const NoResultsBox = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 30px;
    margin-left: -120px;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    width: 19rem;
    height: 14rem;
    cursor: pointer;
    text-align: center;
    word-wrap: break-word;
    z-index: 2;
`

export const ErrorMsg = styled.div`
    font-weight: bold;
    margin-bottom: 1.25rem;
    text-decoration: underline;
    font-size: 2.3rem;
`

export const HomeLink = styled(Link)`
    text-decoration: none;
    color: #000000;
    z-index: 1
`

export const Span = styled.div`
    font-size: 1.5rem;
`

export const SpilledImg = styled.img`   
    max-height:300px;
    height: auto;
    z-index: 0;
`
