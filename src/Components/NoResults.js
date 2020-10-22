import React from 'react'
import spilled_bear from '../Media/spilled_bear.png'
import { Container, NoResultsBox, ErrorMsg, HomeLink, Span, SpilledImg } from './Styled/NoResultsSC'

function NoResults(props) {

    return (
        <Container>
            <SpilledImg alt="not-found" src={spilled_bear}/>
            <HomeLink to="/" onClick={props.noResults}>
                <NoResultsBox>
                        <ErrorMsg>{props.message}</ErrorMsg>
                        <Span>Click To Browse</Span>
                        <Span>Some Beers</Span>
                </NoResultsBox>
            </HomeLink>
        </Container>
    );
}

export default NoResults;