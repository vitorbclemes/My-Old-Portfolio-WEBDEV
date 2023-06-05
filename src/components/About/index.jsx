import React from 'react';
import { Container, Grid, ImageOfMe, SpanAbout } from './styles';
import { SiTypescript, SiSvelte,SiMongodb,SiGit,SiJavascript,SiPython,SiCss3 } from 'react-icons/si'
import { FaReact,FaJava } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb'

const About = () => {
    return ( 
        <Container>
            <Grid>
                <h1>Fatos sobre mim</h1>
                <SpanAbout>Tenho 23 anos</SpanAbout>
                <SpanAbout>Sou morador de Joinville</SpanAbout>
                <SpanAbout>Gosto de acompanhar tecnologias recentes</SpanAbout>
                <SpanAbout>Trabalhar em equipe é sempre melhor!</SpanAbout>
                <SpanAbout>Componho músicas como Hobby</SpanAbout>
                <SpanAbout>Inglês não é um problema!</SpanAbout>
                <SpanAbout>Último semestre de Ciências da Computação</SpanAbout>
                <SpanAbout>Fullstack WEB, Machine Learning, Data Science...</SpanAbout>
                <h3>Conhecimentos</h3>
                <div className='flex-row align-center' style={{color:'#4A87CE'}}>
                    <SiJavascript size={30}/>
                    <SiTypescript size={30} style={{marginLeft:"15px"}}/>
                    <SiCss3 size={30} style={{marginLeft:"15px"}}/>
                    <FaReact size={30} style={{marginLeft:"15px"}}/>
                    <SiSvelte size={30} style={{marginLeft:"15px"}}/>
                    <SiPython size={30} style={{marginLeft:"15px"}}/>
                    <FaJava size={30} style={{marginLeft:"15px"}}/>
                    <TbSql size={30} style={{marginLeft:"15px"}}/>
                    <SiMongodb size={30} style={{marginLeft:"15px"}}/>
                    <SiGit size={30} style={{marginLeft:"15px"}}/>
                </div>
            </Grid>
            <ImageOfMe src='me.jpeg' alt='me'/>
        </Container>
     );
}

export default About;