import { faBootstrap, faJava, faJsSquare, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";

const Data = [{ 
    graduations: [{
        course: "Analise e desenvolvimento de sistemas",
        instituition: "Faculdades Metropolitanas Unidas - FMU",
        grade: [
            "Teoria de Sistemas de Informação, ",
            "Fundamentos para Computação, ",
            "Matemática, ",
            "Interface Humano Computador, ",
            "Lógica de Programação, ",
            "Comunicação, ",
            "Engenharia de Software, ",
            "Arquitetura e Organização de Computadores, ",
            "Banco de Dados, ",
            "Sistemas Operacionais, ",
            "Processo de Negócios e Empreendedorismo, ",
            "Desenvolvimento Humano e Social, ",
            "Programação Orientada a Objetos, ",
            "Práticas de Engenharia de Software, ",
            "Estrutura de Dados, ",
            "Redes de Computadores, ",
            "Desenvolvimento de Software para Web, ",
            "Antropologia e Cultura Brasileira, ",
            "Práticas de Banco de Dados, ",
            "Gestão de Projetos, ",
            "Pesquisa, Ordenação e Técnicas de Armazenamento, ",
            "Computação para Dispositivos Móveis, ",
            "Fundamentos para Certificação Técnica, ",
            "Estatística Aplicada ao Data Science, ",
            "Arquitetura de Software, ",
            "Sistemas Distribuídos, ",
            "Qualidade e Teste de Software, ",
            "Laboratório de Software e Projetos, ",
            "Optativa, ",
            "Atividades Complementares"
        ],
        hours: "1.600h",
        completed: "Pretendo finalizar o mais rápido possível.",
    },
    {
        course: "Técnico de informática (desenvolvedor)",
        instituition: "Escola Técnica Estadual - ETEC Albert Einstein",
        grade: [
            "Técnicas De Programação, ",
            "Design Digital, ",
            "Linguagem, Trabalho E Tecnologia, ",
            "Fundamentos Da Informática, ",
            "Análise E Projeto De Sistemas, ",
            "Programação E Algoritmos, ",
            "Programação Web I, ",
            "Banco De Dados I, ",
            "Planejamento TCC em desenvolvimento de sistemas, ",
            "Desenvolvimento De Sistemas, ",
            "Banco De Dados II, ",
            "Programação De Web II, ",
            "Inglês Instrumental, ",
            "Programação De Aplicativos Mobile I, ",
            "Internet E Protocolos, ",
            "Qualidade E Teste De Software, ",
            "Sistemas Embarcados, ",
            "Ética E Cidadania Organizacional, ",
            "Programação De Aplicativos Mobile II, ",
            "Segurança De Sistemas De Informação, ",
            "Programação De Web III, ",
            "Banco De Dados III, ",
        ],
        hours: "800h",
        completed: "2016",
    }],   
    languages: [
        {
            name: "Português, PT-BR",            
            read: "Fluente",
            listen: "Fluente",
            writing: "Fluente",
            speak: "Fluente"        
        },
        {
            name: 'Ingles, EN',             
            read: "Avançado",
            listen: "Avançado",
            writing: "Intermediário",
            speak: "Intermediário"      
        }
    ],
    softskill: [
        'Trabalho em equipe, ',
        'Solucionar problemas, ',
        'Communicação, ',
        'Adaptabilidade, ',
        'Gerenciamento de tempo'
    ],
        
    programming: [{
        icon: faJsSquare,
        name: 'Javascript',
        confidence: 'Confiante',
    },
    {
        icon: faJava,
        name: 'Java',
        confidence: 'Familiar',
    },
    {
        name: 'C#',
        confidence: 'Confiante',
    },
    {
        icon: faPython,
        name: 'Python',
        confidence: 'Aprendendo',
    }],            
    SQL:[{
        name: "Microsoft SQL",
        confidence: 'Confiante',
    },
    {
        name: "Oracle MySQL",
        confidence: 'Familiar',
    },
    {
        name: "Postgre SQL",
        confidence: 'Aprendendo',
    }],
    NOSQL:[{
        name: "MongoDB",
        confidence: "Familiar",
    }],
        
    metodos: [{
        name: 'Cascata',
        confidence: 'Familiar',
    },
    {
        name: 'SCRUM',
        confidence: 'Conhecimento das principais tarefas'
    }],
    frameworks: [{
        icon: faNodeJs,
        name: 'NodeJS',
        confidence: 'Familiar',
    },
    {
        icon: faReact,
        name: 'ReactJS',
        confidence: 'Confiante',
    },
    {
        name: 'Express',
        confidence: 'Familiar',
    },
    {
        icon: faBootstrap,
        name: 'Bootstrap',
        confidence: 'Familiar',
    },
    {
        name: 'Materialize',
        confidence: 'Aprendendo',
    },
    {
        name: 'Typescript',
        confidence: 'Aprendendo',
    }],
    approachs: [{
        name: "Rest",
        confidence: "Familiar",
    },
    {
        name: "Graphql",
        confidence: "Aprendendo",
    }],
}];

export default Data