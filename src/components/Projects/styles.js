import { styled } from "styled-components"

const Container = styled.div`
    padding: 70px 200px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-family: 'Overpass', sans-serif;
`
const ProjectInput = styled.select`
    width: 800px;
    height:50px;
    font-size: 24px;
    margin-top:10px
`

const DescriptionContainer = styled.div`
    margin-top:80px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    & span {
        font-size: 21px;
    }
`

const GithubButton = styled.a`
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
`

export {
    Container,
    ProjectInput,
    DescriptionContainer,
    GithubButton
}