import { useRef } from "react";
import { styled } from "styled-components";
import About from "./components/About";
import Header from "./components/Header";
import Degree from "./components/Degree";
import Projects from "./components/Projects";
import Links from "./components/Links";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  const aboutRef = useRef(null);
  const degreeRef = useRef(null);
  const projectsRef = useRef(null);
  const linksRef = useRef(null);

  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block:'start',inline: 'nearest' });
  };

  const handleScrollToDegree = () => {
    degreeRef.current.scrollIntoView({ behavior: 'smooth', block:'start',inline: 'nearest' });
  };

  const handleScrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth', block:'start',inline: 'nearest' });
  };

  const handleScrollToLinks = () => {
    linksRef.current.scrollIntoView({ behavior: 'smooth', block:'start', inline: 'nearest' });
  };

  return (
    <Wrapper>
      <Header handleScrollToAbout={handleScrollToAbout} handleScrollToDegree={handleScrollToDegree} handleScrollToProjects={handleScrollToProjects} handleScrollToLinks={handleScrollToLinks} />
      <div ref={aboutRef}>
        <About/>
      </div>
      <div ref={degreeRef}>
        <Degree/>
      </div>
      <div ref={projectsRef}>
        <Projects/>
      </div>
      <div ref={linksRef}>
        <Links/>
      </div>
    </Wrapper>
  );
}

export default App;
