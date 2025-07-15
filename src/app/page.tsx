
"use client";

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/Header";
import Link from "next/link";
import { containerVariants, itemVariants } from '@/lib/animations';

export default function Home() {
  return (
    <div className="bg-background dark:bg-black text-foreground min-h-screen">
      <Header />
      <main className="relative flex flex-col items-center justify-center h-screen px-4 overflow-hidden">
        <motion.section
          className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="p-1 rounded-full border-2 border-slate-200 dark:border-none">
              <Image
                src="https://avatars.githubusercontent.com/u/46384321?v=4"
                alt="Avatar de Paulo Vieira"
                width={128}
                height={128}
                className="rounded-full w-32 h-32 object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-blue-400">
              Olá, eu sou Paulo Vieira
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Desenvolvedor de Software
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-foreground text-lg md:text-xl max-w-xl">
            Apaixonado por criar experiências de usuário perfeitas, combinando design sólido com criatividade e funcionalidade.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Entre em Contato
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/projects">
                Ver Projetos
              </Link>
            </Button>
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2 hidden sm:inline"></div>
            <div className="flex gap-1 text-muted-foreground">
              <Button asChild variant="ghost" size="icon"><Link href="https://github.com/Paulo-VieiraDev" target="_blank" aria-label="GitHub"><Github className="h-5 w-5 transition-transform hover:scale-125" /></Link></Button>
              <Button asChild variant="ghost" size="icon"><Link href="https://www.linkedin.com/in/paulo-sanches-vieira/" target="_blank" aria-label="LinkedIn"><Linkedin className="h-5 w-5 transition-transform hover:scale-125" /></Link></Button>
              <Button asChild variant="ghost" size="icon"><Link href="https://www.instagram.com/paulo_vieira.a/" target="_blank" aria-label="Instagram"><Instagram className="h-5 w-5 transition-transform hover:scale-125" /></Link></Button>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}