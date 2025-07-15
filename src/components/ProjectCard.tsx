"use client"; 

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { itemVariants } from '@/lib/animations';

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  carouselImages?: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, video, carouselImages, tags, liveUrl, githubUrl } = project;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselImages && carouselImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [carouselImages]);

  return (
    <motion.div
      variants={itemVariants}
      className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-xl dark:hover:border-slate-700 flex flex-col transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-full aspect-video bg-black relative">
        {carouselImages && carouselImages.length > 0 ? (
          <div className="relative w-full h-full">
            {carouselImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Imagem ${index + 1} do projeto ${title}`}
                fill
                className={`
                  object-contain transition-opacity duration-1000 ease-in-out
                  ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                `}
              />
            ))}
          </div>
        ) : video ? (
          <video src={video} loop muted autoPlay playsInline className="w-full h-full object-contain" />
        ) : image ? (
          <Image src={image} alt={`Imagem do projeto ${title}`} fill className="w-full h-full object-contain" />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Sem prévia</p>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <div className="mt-auto flex gap-4 pt-4">
          {liveUrl && (
            <Button asChild className="flex-1"><Link href={liveUrl} target="_blank">Ver Site <ExternalLink className="ml-2 h-4 w-4" /></Link></Button>
          )}
          <Button asChild variant="outline" className="flex-1"><Link href={githubUrl} target="_blank"><Github className="mr-2 h-4 w-4" /> GitHub</Link></Button>
        </div>
      </div>
    </motion.div>
  );
}