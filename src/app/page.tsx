"use client";

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Instagram, Linkedin, Mail, Code, Palette, Rocket } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/Header";
import Link from "next/link";
import { containerVariants, itemVariants } from '@/lib/animations';

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
  "Tailwind CSS", "PostgreSQL", "Git", "Python"
];

export default function Home() {
  return (
    <div className="bg-background dark:bg-black text-foreground min-h-screen">
      <Header />

      <main>
        <motion.section
          className="relative h-screen w-full px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center text-center max-w-3xl space-y-6 z-10 px-4">
            <motion.div variants={itemVariants}>
              <div className="p-1 rounded-full border-2 border-slate-200 dark:border-none">
                <Image src="https://avatars.githubusercontent.com/u/46384321?v=4" alt="Avatar de Paulo Vieira" width={128} height={128} className="rounded-full w-32 h-32 object-cover" priority />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-blue-400">
                Olá, eu sou Paulo Vieira
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
                Desenvolvedor de Software
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
              Apaixonado por criar experiências de usuário perfeitas, combinando design sólido com criatividade e funcionalidade.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
    
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact"><Mail className="mr-2 h-4 w-4" />Entre em Contato</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <Link href="/projects">Ver Projetos</Link>
              </Button>

            
              <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2 hidden sm:inline-block"></div>

              <div className="flex items-center gap-1 text-muted-foreground">
                <Button asChild variant="ghost" size="icon"><Link href="https://github.com/Paulo-VieiraDev" target="_blank" aria-label="GitHub"><Github className="h-5 w-5 transition-transform hover:scale-125" /></Link></Button>
                <Button asChild variant="ghost" size="icon"><Link href="https://www.linkedin.com/in/paulo-sanches-vieira/" target="_blank" aria-label="LinkedIn"><Linkedin className="h-5 w-5 transition-transform hover:scale-125" /></Link></Button>
                <Button asChild variant="ghost" size="icon"><Link href="https://www.instagram.com/paulo_vieira.a/" target="_blank" aria-label="Instagram"><Instagram className="h-5 w-5 transition-transform hover:scale-125" /></Link></Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="w-full py-24 md:py-32 px-4 bg-slate-50 dark:bg-slate-900/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">Sobre Mim</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Desde novo, sou fascinado pelo poder da tecnologia de transformar ideias em realidade. Essa curiosidade me acompanhou por anos, mas foi no curso técnico em informática que tudo fez sentido. Ali, eu me encontrei e tive a certeza do caminho que queria seguir.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Essa paixão me guiou até a graduação em Análise e Desenvolvimento de Sistemas, onde aprofundei minha capacidade de analisar problemas, arquitetar soluções e construir softwares robustos e intuitivos.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Hoje, recém-formado e com 21 anos, busco minha primeira oportunidade para canalizar toda essa energia e dedicação em projetos que façam a diferença.
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          id="differentiators"
          className="w-full py-24 md:py-32 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-5xl w-full mx-auto text-center space-y-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold">Meus Diferenciais</h2>
              <p className="text-lg text-muted-foreground mt-2">Como posso agregar valor ao seu projeto.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
              variants={itemVariants}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4"><Code className="w-8 h-8 text-primary" /><CardTitle>Código Limpo e Escalável</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">Foco em boas práticas para criar um código organizado, fácil de manter e pronto para crescer.</p></CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4"><Palette className="w-8 h-8 text-primary" /><CardTitle>Foco na Experiência (UX)</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">Crio interfaces intuitivas e eficientes, garantindo que o usuário final tenha a melhor interação possível.</p></CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4"><Rocket className="w-8 h-8 text-primary" /><CardTitle>Performance e Otimização</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">Utilizo as melhores técnicas para garantir que seu site ou aplicação seja rápido e responsivo.</p></CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="tech"
          className="w-full py-24 md:py-32 px-4 bg-slate-50 dark:bg-slate-900/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-4xl w-full mx-auto text-center space-y-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold">Tecnologias que Utilizo</h2>
              <p className="text-lg text-muted-foreground mt-2">Ferramentas que domino para construir soluções modernas.</p>
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              {technologies.map((tech) => (
                <div key={tech} className="bg-background dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md py-2 px-4 font-medium text-muted-foreground">
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}