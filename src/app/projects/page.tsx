"use client";

import { motion } from 'framer-motion';
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { containerVariants, itemVariants } from '@/lib/animations';

const projectsData = [
  {
    "id": 1,
    "title": "Creative Food",
    "description": "Uma aplicação de chat interativa para descobrir receitas. Os usuários inserem os ingredientes que possuem e o bot, utilizando a API do TheMealDB, sugere pratos correspondentes. O projeto possui um design responsivo, sistema de favoritos, e uma interface moderna construída com React e Tailwind CSS.",
    "image": "/images/creativefood/bot.png",
    "tags": ["React", "Vite", "TypeScript", "Tailwind CSS", "TheMealDB API"],
    "githubUrl": "https://github.com/Paulo-VieiraDev/creative-food.git"
  },
  {
    "id": 2,
    "title": "PersonaChat",
    "description": "Uma aplicação de chat full-stack interativa que permite aos usuários conversarem com um elenco de personalidades de IA distintas. O projeto explora a engenharia de prompt com a API do Google Gemini para criar conversas dinâmicas e realistas, com histórico salvo no navegador e uma interface totalmente responsiva.",
    "image": "/images/personachat/chat.png",
    "tags": ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Flask", "Google Gemini API"],
    "liveUrl": "https://persona-chat-nine.vercel.app",
    "githubUrl": "https://github.com/Paulo-VieiraDev/persona-chat"
  },
  {
    id: 3,
    title: "Bibliotecário Escolar",
    description: "Plataforma web para gestão de bibliotecas escolares, automatizando o controle de livros, alunos e empréstimos.",
    video: "/videos/biblioteca.mp4",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Supabase"],
    githubUrl: "https://github.com/Paulo-VieiraDev/bibliotecario-next"
  },
  {
    id: 4,
    title: "Dengue Zero",
    description: "Projeto que mapeia focos de Dengue usando geolocalização para auxiliar na prevenção e combate à doença.",
    carouselImages: [
      "/images/dengue/imagem1.png",
      "/images/dengue/imagem2.png",
      "/images/dengue/imagem3.png",
      "/images/dengue/imagem4.png",
      "/images/dengue/imagem5.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/zCaio79/Dengue-Nextjs"
  },
  {
    id: 5,
    title: "Portfólio Pessoal",
    description: "Meu portfólio pessoal construído com Next.js, Tailwind CSS e Shadcn/UI para mostrar minhas habilidades e projetos.",
    image: "/images/portfolio/projeto-portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    liveUrl: "/",
    githubUrl: "https://github.com/Paulo-VieiraDev/portfolio"
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-background dark:bg-black text-foreground min-h-screen">
      <Header />
      <motion.main
        className="container mx-auto px-4 pt-24 pb-12 sm:pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="space-y-4 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-blue-400">
            Meus Projetos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Aqui estão alguns dos projetos em que trabalhei. Sinta-se à vontade para explorar o código e as demos ao vivo.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </motion.main>
    </div>
  );
}