import { SkillCategory } from '@/types/skills';
import {
    FaReact,
    FaPython,
    FaDocker,
    FaGitAlt,
    FaFigma,
    FaJava,
    FaGithub,
    FaLinux,
    FaShieldAlt,
    FaTerminal,
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiDjango,
    SiPostgresql,
    SiTailwindcss,
    SiAdobephotoshop,
    SiCanva,
    SiJira,
    SiMysql,
    SiSqlite,
    SiPostman,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import {
    BsFileEarmarkCode,
    BsFillGrid3X3GapFill,
    BsSymmetryHorizontal,
} from 'react-icons/bs';
import { GoMilestone } from 'react-icons/go';
import {
    AiOutlineApartment,
    AiOutlineApi,
    AiOutlineDotNet,
} from 'react-icons/ai';

export const skillsData: SkillCategory[] = [
    // Compétences clés (Featured)
    {
        name: 'Analyse Logicielle',
        featured: true,
        description:
            'Tout projet commence par une compréhension fine des besoins. Je traduis les exigences métier en spécifications techniques claires et actionnables, afin de garantir que la solution développée soit parfaitement alignée avec les objectifs fixés.',
        skills: [
            {
                name: 'Analyse des besoins',
                icon: <BsFileEarmarkCode className="h-6 w-6" />,
            },
            {
                name: 'Spécifications fonctionnelles',
                icon: <GoMilestone className="h-6 w-6" />,
            },
            {
                name: "User Stories & Cas d'utilisation",
                icon: <BsFillGrid3X3GapFill className="h-6 w-6" />,
            },
            {
                name: 'Jira',
                icon: <SiJira className="h-6 w-6 text-blue-600" />,
            },
        ],
    },
    {
        name: 'Conception & Modélisation Logicielle',
        featured: true,
        description:
            "J'excelle dans la création d'architectures logicielles robustes, évolutives et maintenables. En utilisant des design patterns éprouvés et des méthodologies comme UML ou Merise, je conçois des systèmes qui non seulement fonctionnent, mais sont aussi construits pour durer.",
        skills: [
            {
                name: 'Architecture (MVC, Microservices)',
                icon: <AiOutlineApartment className="h-6 w-6" />,
            },
            {
                name: 'Design Patterns',
                icon: <BsSymmetryHorizontal className="h-6 w-6" />,
            },
            {
                name: 'Méthodologies (UML, Merise, 2TUP)',
                icon: <GoMilestone className="h-6 w-6" />,
            },
            {
                name: "Conception d'API REST, GraphQL",
                icon: <AiOutlineApi className="h-6 w-6" />,
            },
        ],
    },

    // Autres compétences
    {
        name: 'Frontend',
        description:
            'Je construis des interfaces utilisateur réactives, rapides et intuitives avec les technologies les plus modernes.',
        skills: [
            // {
            //     name: 'HTML5',
            //     icon: <FaHtml5 className="h-8 w-8 text-orange-500" />,
            // },
            // {
            //     name: 'CSS3',
            //     icon: <FaCss3Alt className="h-8 w-8 text-blue-500" />,
            // },
            // {
            //     name: 'JavaScript',
            //     icon: <SiJavascript className="h-8 w-8 text-yellow-500" />,
            // },
            {
                name: 'React.js',
                icon: <FaReact className="h-8 w-8 text-sky-500" />,
            },
            { name: 'Next.js', icon: <SiNextdotjs className="h-8 w-8" /> },
            {
                name: 'Tailwind CSS',
                icon: <SiTailwindcss className="h-8 w-8 text-teal-500" />,
            },
        ],
    },
    {
        name: 'Backend',
        description:
            'Je développe des serveurs et des API performants, sécurisés et fiables pour soutenir la logique métier.',
        skills: [
            // {
            //     name: 'Node.js',
            //     icon: <FaNodeJs className="h-8 w-8 text-green-500" />,
            // },
            {
                name: 'Python',
                icon: <FaPython className="h-8 w-8 text-blue-400" />,
            },
            {
                name: 'Django',
                icon: <SiDjango className="h-20 w-20 text-green-800" />,
            },
            {
                name: 'Java',
                icon: <FaJava className="h-8 w-8 text-white-500" />,
            },
            {
                name: '',
                icon: <TbBrandCSharp className="h-8 w-8 text-purple-600" />,
            },
        ],
    },
    {
        name: 'Bases de Données',
        description:
            'Je gère et optimise des bases de données relationnelles pour une persistance des données efficace.',
        skills: [
            {
                name: 'MySQL',
                icon: <SiMysql className="h-8 w-8 text-blue-700" />,
            },
            {
                name: 'PostgreSQL',
                icon: <SiPostgresql className="h-8 w-8 text-blue-600" />,
            },
            {
                name: 'SQLite',
                icon: <SiSqlite className="h-8 w-8 text-sky-700" />,
            },
            {
                name: 'ADO.NET',
                icon: <AiOutlineDotNet className="h-8 w-8 text-purple-600" />,
            },
        ],
    },
    {
        name: 'Outils & DevOps',
        description:
            "J'utilise des outils modernes pour automatiser les workflows, assurer la qualité et déployer efficacement.",
        skills: [
            {
                name: 'Git',
                icon: <FaGitAlt className="h-8 w-8 text-orange-600" />,
            },
            { name: 'GitHub', icon: <FaGithub className="h-8 w-8" /> },
            {
                name: 'Docker',
                icon: <FaDocker className="h-8 w-8 text-blue-500" />,
            },
            {
                name: 'Postman',
                icon: <SiPostman className="h-8 w-8 text-orange-500" />,
            },
        ],
    },
    {
        name: 'Admin. Système & Sécurité',
        description:
            "Je suis à l'aise dans un environnement Linux. Je peux administrer un système, automatiser des tâches avec des scripts et gérer les processus.",
        skills: [
            {
                name: 'Terminal Linux',
                icon: <FaTerminal className="h-8 w-8" />,
            },
            {
                name: 'Scripting',
                icon: <FaLinux className="h-8 w-8" />,
            },
            {
                name: 'Sécurité de base',
                icon: <FaShieldAlt className="h-8 w-8" />,
            },
        ],
    },
    {
        name: 'Design UI/UX',
        description:
            "Je crée des maquettes et des prototypes pour visualiser l'expérience utilisateur avant le développement.",
        skills: [
            { name: 'Figma', icon: <FaFigma className="h-8 w-8" /> },
            {
                name: 'Photoshop',
                icon: <SiAdobephotoshop className="h-8 w-8 text-blue-700" />,
            },
            {
                name: 'Canva',
                icon: <SiCanva className="h-8 w-8 text-purple-500" />,
            },
        ],
    },
];
