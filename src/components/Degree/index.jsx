import React from 'react';
import { Container, Grid, SpanDegree } from './styles';
import { FaUniversity } from 'react-icons/fa';

const Degree = () => {
    return ( 
        <Container>
            <div className='flex-column align-center'>
                <FaUniversity size={450} color='#fff' />
            </div>
            <Grid>
                <h1 style={{color:"#EDEBEB",fontSize:"35px"}}>Formação e Estudos</h1>
                <SpanDegree>Formando em Bacharelado em Ciências da Computação - UDESC</SpanDegree>
                <SpanDegree>Fluente em Inglês com certificação Michigan ICCE</SpanDegree>
                <SpanDegree>Espanhol Avançado com certificação Wizard 400 Horas</SpanDegree>
                <SpanDegree>Dinamarquês Básico</SpanDegree>
                <SpanDegree>Certificado AWS</SpanDegree>
                <SpanDegree>Certificado Azure</SpanDegree>
                <SpanDegree>Experiência com desenvolvimento WEB</SpanDegree>
                <SpanDegree>TCC em otimização utilizando Computação Quântica</SpanDegree>
                <SpanDegree>Formado em Curso de Oratória</SpanDegree>
            </Grid>
        </Container>
     );
}

export default Degree;