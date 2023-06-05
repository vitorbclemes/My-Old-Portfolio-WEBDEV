import React from "react";
import { Container,Logo, OptionsGrid, SpanGrid } from './styles';



const Header = () => {
    const optionsList = [
        {text:"Sobre mim",direction:'about'},
        {text:"Formação",direction:'degree'},
        {text:"Meus Projetos",direction:'projects'},
        {text:"Links úteis",direction:'links'},
    ]

    function slideTo(direction){
        console.log(direction)
    }
    
    return (
        <Container>
            <div className="flex-row flex-center">
                <Logo src="./logo.png" alt="test"/>
                    <OptionsGrid>
                        {optionsList.map((option) => (
                            <SpanGrid onClick={slideTo(option.direction)}>{option.text}</SpanGrid>
                        ))}
                </OptionsGrid>
            </div>
            <div className="hr"></div>
        </Container>
     );
}

export default Header;