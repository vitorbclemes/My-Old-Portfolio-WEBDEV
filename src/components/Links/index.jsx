import React from 'react';
import { Container, LinkButton } from './styles';
import { FaGithub,FaInstagram,FaLinkedin,FaFilePdf } from 'react-icons/fa'

const Links = () => {
    return (
        <Container>
            <h1>Links úteis</h1>
            <div>
                <LinkButton href='https://github.com/vitorbclemes?tab=repositories' target='_blank'>
                    <FaGithub/>
                    <span>Github</span>
                </LinkButton>

                <LinkButton href='https://www.linkedin.com/in/vitor-bernstorff-clemes-79b2ab219/' target='_blank'>
                    <FaLinkedin/>
                    <span>Linkedin</span>
                </LinkButton>

                <LinkButton href='https://instagram.com/vitor.bclemes' target='_blank'>
                    <FaInstagram/>
                    <span>Instagram Pessoal</span>
                </LinkButton>

                <LinkButton href='./files/Curriculo_Vitor_Bernstorff_Clemes.pdf' target='_blank'>
                    <FaFilePdf/>
                    <span>Baixar meu currículo</span>
                </LinkButton>

                <LinkButton href='./files/Resume_Vitor_Bernstorff_Clemes.pdf' target='_blank'>
                    <FaFilePdf/>
                    <span>Download my resume</span>
                </LinkButton>
            </div>
        </Container>
    );
}

export default Links;