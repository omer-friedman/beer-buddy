import React from 'react';
import spilled_bear from '../media/spilled_bear.png';
import { Container, NoResultsBox, ErrorMsg, HomeLink, Span, SpilledImg } from './styled/NoResultsSC';
import { useDispatch } from 'react-redux';
import { removeAllProps } from '../actions/searchActions';

const NoResults = (props) => {
    const dispatch = useDispatch();

    const removeProps = () =>{
        dispatch(removeAllProps());
    }

    return (
        <Container>
            <SpilledImg alt="not-found" src={spilled_bear}/>
            <HomeLink to="/" onClick={removeProps}>
                <NoResultsBox>
                        <ErrorMsg>{props.message}</ErrorMsg>
                        <Span>Click To Browse</Span>
                        <Span>Some Beers</Span>
                </NoResultsBox>
            </HomeLink>
        </Container>
    );
};

export default NoResults;