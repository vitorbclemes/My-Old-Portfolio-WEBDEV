import { styled } from "styled-components";

const Container = styled.div`
    padding: 80px;
    display: flex;
    flex-direction:row;
    justify-content: center;
    font-family: 'Overpass', sans-serif;
    background-color: #4A87CE;
`
const Grid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 150px;
`

const SpanDegree = styled.span`
    font-size: 21px;
    text-align: center;
    color: #EDEBEB;
    line-height:1.8;
`
export {
    Container,
    Grid,
    SpanDegree
}

