import { faBootstrap, faJava, faJsSquare, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";


const Data = [
    { 
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
    },
    { 
        languages: [
            {
                name: "Portuguese, PT-BR",            
                read: "Fluent",
                listen: "Fluent",
                writing: "Fluent",
                speak: "Fluent"        
            },
            {
                name: 'English, EN',             
                read: "Advanced",
                listen: "Advanced",
                writing: "Intermediate",
                speak: "Intermediate"      
            }
        ],
        softskill: [
            'Team work, ',
            'Troubleshooting, ',
            'Communication, ',
            'Adaptability, ',
            'Time management'
        ],
            
        programming: [{
            icon: faJsSquare,
            name: 'Javascript',
            confidence: 'Confident',
        },
        {
            icon: faJava,
            name: 'Java',
            confidence: 'Familiar',
        },
        {
            name: 'C#',
            confidence: 'Confident',
        },
        {
            icon: faPython,
            name: 'Python',
            confidence: 'Learning',
        }],            
        SQL:[{
            name: "Microsoft SQL",
            confidence: 'Confident',
        },
        {
            name: "Oracle MySQL",
            confidence: 'Familiar',
        },
        {
            name: "Postgre SQL",
            confidence: 'Learning',
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
            confidence: 'Knowledge of the main tasks'
        }],
        frameworks: [{
            icon: faNodeJs,
            name: 'NodeJS',
            confidence: 'Familiar',
        },
        {
            icon: faReact,
            name: 'ReactJS',
            confidence: 'Confident',
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
            confidence: 'Learning',
        },
        {
            name: 'Typescript',
            confidence: 'Learning',
        }],
        approachs: [{
            name: "Rest",
            confidence: "Familiar",
        },
        {
            name: "Graphql",
            confidence: "Learning",
        }],
    },
];

export default Data