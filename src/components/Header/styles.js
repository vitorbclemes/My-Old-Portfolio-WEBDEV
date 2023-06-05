import { styled } from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  width:100%;
  position: sticky;
  top: 0;
  background-color: #FFF;
`

const Logo = styled.img`
  width: 280px;
  height: 140px;
  margin-left:25px
`

const OptionsGrid = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 15px;
  margin-left:500px
`

const SpanGrid = styled.span`
  margin-left: 40px;
  font-size: 21px;
  cursor: pointer;
`

export {
  Container,
  Logo,
  OptionsGrid,
  SpanGrid
}