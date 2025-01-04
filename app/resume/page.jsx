"use client";

import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

//about data
const about = {
    title: 'About me',
    descrition:
     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sit ducimus aliquid saepe, rem eligendi, quae sapiente repellat similique.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Luke Coleman",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+40) 321 654 678",
        },
        {
            fieldName: "Experience",
            fieldValue: "12+ years",
        },
        {
            fieldName: "Skype",
            fieldValue: "luke.01",
        },
        {
            fieldName: "Nationality",
            fieldValue: "American",
        },
        {
            fieldName: "Email",
            fieldValue: "luke.@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Português, Brasil",
        },
    
    
    ]
};
 //experience data
 const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    descrition: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sit ducimus aliquid saepe, rem eligendi, quae sapiente repellat similique.",
    items: [
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            company: "E-commerce Startup.",
            position: "Freelance Web Developer",
            duration: "2020 - 2021",
        },
        {
            company: "Tech Academy",
            position: "Teaching Assistant",
            duration: "2019-2020",
        },
        {
            company: "Digital Agency.",
            position: "UI/UX Designer",
            duration: "2018-2029",
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer Intern",
            duration: "Summer 2021",
        },
        {
            company: "Software Development Firm.",
            position: "Junior Developer",
            duration: "2017 - 2018",
        },
    ],
 };
//Education data
 const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    descrition: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sit ducimus aliquid saepe, rem eligendi, quae sapiente repellat similique.",
    items: [
        {
            institution: "Online Course Plataform.",
            degree: "Full Stack Web Development Bootcamp",
            duration: "2023",
        },
        {
            institution: "Codeacademy.",
            degree: "Front-end Track",
            duration: "2022",
        },
        {
            institution: "Online Course.",
            degree: "Programming Course",
            duration: "2020-2021",
        },
        {
            institution: "Tech Institute.",
            degree: "Certified Web Developer",
            duration: "2019",
        },
        {
            institution: "Design School.",
            degree: "Diploma in Graphic Design",
            duration: "2016 - 2018",
        },
        {
            institution: "Community College.",
            degree: "Associate Degree in Computer Science",
            duration: "2014 - 2016",
        },
    ],
 };
//Skills data
const skills = {
    title: "My Skills",
    descrition: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sit ducimus aliquid saepe, rem eligendi, quae sapiente repellat similique.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
    <motion.div
        initial={{ opacity: 0}}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"    
    >
        <div className="container mx-auto">
            <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
                gap-6"> {/* Tamanho da tabela e espaçamento ( gap-6) */}
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>
                {/* content */}
                <div className="min-h-[70px] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                       <div className="flex flex-col gap-[30px] text-center xl:text-left"> {/* Centralizando texto e diminuindo fonte */}
                            <h3 className="text-4xl font-bold">{experience.title}</h3> {/* Tamanho fonte e negrito */}
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {experience.descrition}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li 
                                            key={index} 
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start
                                            gap-1"
                                            >
                                                <span className="text-accent">{/* periodos em cores verdes */}{item.duration}</span> 
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">{/* textos acima maiores e textos abaixos menores */}
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className=" w-[6px] h-[6px] rounded-full
                                                    bg-accent">{/* pontos nas emrepsas em cores verdes */}</span>
                                                    <p className="text-white/60">{/* empresas em cores cinzas */}{item.company}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                       </div>
                    </TabsContent>

                    {/*education */}
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left"> {/* Centralizando texto e diminuindo fonte */}
                            <h3 className="text-4xl font-bold">{education.title}</h3> {/* Tamanho fonte e negrito */}
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {education.descrition}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li 
                                            key={index} 
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start
                                            gap-1"
                                            >
                                                <span className="text-accent">{/* periodos em cores verdes */}{item.duration}</span> 
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">{/* textos acima maiores e textos abaixos menores */}
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className=" w-[6px] h-[6px] rounded-full
                                                    bg-accent">{/* pontos nas emrepsas em cores verdes */}</span>
                                                    <p className="text-white/60">{/* empresas em cores cinzas */}{item.institution}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                       </div>
                    </TabsContent>

                    {/*skills */}
                    <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]"> {/* Centralizando texto e diminuindo fonte */}
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>{/*puxa o titulo da habilidade */}
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.descrition}</p>{/* puxa a descrição da habilidade */}
                        </div>
                            <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => { 
                                    return (
                                    <li
                                     key={index}
                                     >
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"> {/* Acrescentando caixas ao redor dos icones */}
                                                    <div className="text-6xl group-hover:text-accent
                                                    transition-all duration-300">{skill.icon}{/* retorna para exibição a lista de icones em lista (li) e aumentando os icones */}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>    
                                    </li>
                                    );  
                                })}
                            </ul>
                            </ScrollArea>
                       </div>              
                    </TabsContent>

                    {/* about */}
                    <TabsContent 
                    value="about" 
                    className="w-full text-center xl:text-left"
                    >
                    <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {about.descrition}
                            </p>
                            <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return (
                                    <li 
                                    key={index}
                                    className="flex items-center justify-center xl:justify-start gap-4"
                                    >
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                    );
                                })}
                            </ul>
                            </ScrollArea>
                       </div>    
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
    );
};

export default Resume;