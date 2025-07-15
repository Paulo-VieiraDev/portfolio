
"use client";

import { motion } from 'framer-motion';
import { Header } from "@/components/Header";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function ContactPage() {
    return (
        <div className="bg-background dark:bg-black text-foreground min-h-screen">
            <Header />
            <motion.main
                className="container mx-auto px-4 py-24 sm:py-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-2xl mx-auto">
                    <motion.div variants={itemVariants} className="space-y-4 mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-blue-400">
                            Contato
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Tem uma pergunta, proposta ou só quer dizer um &quot;oi&quot;? Ficarei feliz em conversar com você.
                        </p>
                    </motion.div>

                    <motion.form
                        variants={itemVariants}
                        action="https://formspree.io/f/xovlqeko"
                        method="POST"
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" name="name" type="text" placeholder="Seu nome completo" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Mensagem</Label>
                            <Textarea id="message" name="message" placeholder="Digite sua mensagem aqui..." required rows={5} />
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                            Enviar Mensagem
                        </Button>
                    </motion.form>

                    <motion.div variants={itemVariants} className="text-center mt-12">
                        <p className="text-muted-foreground mb-4">Ou me encontre nestas plataformas:</p>
                        <div className="flex justify-center gap-4">
                            <Button asChild variant="outline" size="icon"><Link href="https://github.com/Paulo-VieiraDev" target="_blank" aria-label="GitHub"><Github className="h-5 w-5" /></Link></Button>
                            <Button asChild variant="outline" size="icon"><Link href="https://www.linkedin.com/in/paulo-sanches-vieira/" target="_blank" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link></Button>
                        </div>
                    </motion.div>
                </div>
            </motion.main>
        </div>
    );
}