import { styled } from "styled-components";
import About from "./components/About";
import Header from "./components/Header";
import Degree from "./components/Degree";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <Wrapper>
      <Header/>
      <About/>
      <Degree/>
    </Wrapper>
  );
}

export default App;
