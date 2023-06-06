import React from "react";
import { Container,Logo, OptionsGrid, SpanGrid } from './styles';



const Header = ({ handleScrollToAbout, handleScrollToDegree, handleScrollToProjects, handleScrollToLinks}) => {
    const optionsList = [
        {text:"Sobre mim",direction:handleScrollToAbout},
        {text:"Formação",direction:handleScrollToDegree},
        {text:"Meus Projetos",direction:handleScrollToProjects},
        {text:"Links úteis",direction:handleScrollToLinks},
    ]

    return (
        <Container>
            <div className="flex-row flex-center">
                <Logo src="./logo.png" alt="test"/>
                    <OptionsGrid>
                        {optionsList.map((option) => (
                            <SpanGrid key={option.text} onClick={option.direction}>{option.text}</SpanGrid>
                        ))}
                </OptionsGrid>
            </div>
            <div className="hr"></div>
        </Container>
     );
}

export default Header;