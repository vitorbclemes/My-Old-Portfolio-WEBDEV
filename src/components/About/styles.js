import { styled } from "styled-components";

const Container = styled.div`
    padding: 35px;
    display: flex;
    flex-direction:row;
    justify-content: center;
    font-family: 'Overpass', sans-serif;
`
const Grid = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImageOfMe = styled.img`
    margin-left: 200px;
    height: 350px;
    width: 290px;
    border-radius: 100%;
`

const SpanAbout = styled.span`
    font-size: 18px;
    text-align: center;
    line-height:1.8
`
const SmallLogo = styled.img`
    height: 10px;
    width: 13px;
`

export {
    Container,
    Grid,
    ImageOfMe,
    SpanAbout,
    SmallLogo
}