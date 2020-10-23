import styled from 'styled-components'

const BottleImgSC = styled.img`
    src: url(${props => props.src});
    height: 200px;
    width: auto;
    position: relative;
    left: -44px;
    top: 30px;
`

export default BottleImgSC;