import React,{useRef, useState} from 'react';
import { Container, DescriptionContainer, GithubButton, ProjectInput } from './styles';
import { FaGithub } from "react-icons/fa"

const Projects = () => {
    const [selectedProject,setSelectedProject] = useState("");
    const textRef = useRef(null)
    const allProjects = [
        {
            title:"Aplicativo Interlaje",
            description:"Foi o primeiro contato que tive com desenvolvimento WEB. Um aplicativo de celular integrado com banco de dados desenvolvido em React Native e NodeJS com a função de gerenciar os jogos do principal campeonato da Liga das Atléticas de Joinville, um evento reconhecido em nível municipal.",
            tag:'laje',
            repo:'https://github.com/vitorbclemes/interlaje-for-android',
        },
        {
            title:"Iniciação Científica",
            description:"Implementação de um algoritmo em Java para classificação semi-supervisionada de fluxo de dados com o Framework Moa, orientado pelo Doutor Fabiano Baldo e apresentado na 31 ° Semana de Iniciação Científica.",
            tag:'icc',
            repo:"https://www.github.com/GECSFD/moa_plus"
        },
        {
            title:"Estágio na Routech",
            description:"Desenvolvimento Fullstack de um aplicação SaaS para área logística de planejamento de rotas. Experiência com Integração entre as linguagens Svelte(Front) e NodeJS com MongoDB (Backend). Além do desenvolvimento, também envolve participação no processo criativo de novos recursos e prototipação de telas com Figma. Controle de código via Git/Github e gestão de funções no método Kanban.",
            tag:'routech',
            repo:""
        },
        {
            title:"Intercâmbio do Rotary",
            description:"Aprovado em 4° lugar no processo seletivo do Programa de Intercâmbio de Jovens do Rotary, culminando em um intercâmbio cultural de 10 meses na cidade de Esbjerg, na Dinamarca. Vencedor do prêmio de melhor intercambista do distrito no período 2017/2018.",
            tag:'rotary',
            repo:""
        },
        {
            title:"Organizador de Quadras SQL(BAN)",
            description:"Projeto demandado como projeto para as turmas de Banco de Dados II do BCC UDESC. Trata-se de uma administradora de complexos esportivos, que permite a estudantes e trabalhadores reservar campos para a prática esportiva. Também permite cadastrar Clientes e Admins. Os administradores devem aprovar qualquer solicitação do cliente. Os clientes não podem fazer uma solicitação se o campo já estiver ocupado. Além disso, existe a possibilidade de criar Eventos que reservam automaticamente um Bloco inteiro por N dias. Foi utilizado Svelte para front-end e PostgreeSQL para o banco de dados.",
            tag:'ban',
            repo:"https://github.com/vitorbclemes/Web_app_with_PostgreSQL"
        },
        {
            title:"Clone Tiktok",
            description:"Um dos primeiros projetos que fiz para estudo seguindo tutoriais da internet, trata-se de uma cópia da página do tiktok. Aqui não existe servidor, apenas aprendizagem do NextJS.",
            tag:'tiktok',
            repo:"https://github.com/vitorbclemes/nextjs-clone-tiktok"
        },
        {
            title:"Simulated Annealing para otimização TSP",
            description:"Projeto realizado para a disciplina de Inteligência Artificial. O objetivo era implementar o algorítimo Simulated Annealing para otimização de instâncias de TSP e analisar os resultados. Foi utilizada a linguagem Python.",
            tag:'sa',
            repo:"https://github.com/vitorbclemes/simulated_annealing-python"
        },
        {
            title:"Estudo e simulação de bruteforce RSA",
            description:"Um estudo do algoritimo de criptografia RSA, bem como sua tentativa de quebrar utilizando metodo de fatoração em primos. Para isso, foram realizadas diversas pesquisas. A ideia era observar a complexidade de tempo e de execução ao tentar quebrar a criptografia atraves de um método brute-force. Foi utilizada a linguagem Java.",
            tag:'rsa',
            repo:"https://github.com/vitorbclemes/CAL_rsa_study"
        },
    ]

    function handleSelectedChange(event){
        setSelectedProject(event.target.value)
        textRef.current.scrollIntoView({ behavior: 'smooth', block:'start', inline: 'nearest' });
    }

    function tryRenderProject(){
        let project = allProjects.find(project=>project.tag === selectedProject);
        if(project && project.repo){
            return(
                <DescriptionContainer ref={textRef}>
                    <span>{project.description}</span>
                    <GithubButton href={project.repo} target='_blank'>
                        <FaGithub />
                        <span style={{marginLeft:"10px"}}>Acesse o repositório</span>
                    </GithubButton>
                </DescriptionContainer>
            )
        }
        else if(project && !project.repo){
            return(
                <DescriptionContainer ref={textRef}>
                    <span>{project.description}</span>
                </DescriptionContainer>
            )
        };
    }

    return (
    <Container>
        <h1>Ateliê de Projetos</h1>
        <ProjectInput placeholder='Selecione uma opção' value={selectedProject} onChange={handleSelectedChange}>
            {allProjects.map((project)=>(
                <option style={{textAlign:"center"}} key={project.title} value={project.tag}>{project.title}</option>
            ))}
        </ProjectInput>
        <div ref={textRef}></div>
        {tryRenderProject()}

    </Container>
    );
}

export default Projects;