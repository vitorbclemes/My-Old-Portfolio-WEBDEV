import { styled } from "styled-components";

const Container = styled.div`
    padding: 50px;
    display: flex;
    flex-direction:column;
    font-family: 'Overpass', sans-serif;
    background-color: #4A87CE;
`

const LinkButton = styled.a`
    border: 1px solid #000;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 20px;
    margin-top:50px;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    background-color: #FFF;

    & span{
        margin-left: 10px;
    }
`

export {
    Container,
    LinkButton
}