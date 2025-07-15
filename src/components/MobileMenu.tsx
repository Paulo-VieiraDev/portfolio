
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/projects", label: "Projetos" },
  { href: "/contact", label: "Contato" },
];

export function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Abrir menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu Principal</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 p-4">
          <Link href="/" className="font-bold text-lg" onClick={() => setIsOpen(false)}>
            Paulo
            <span className="text-blue-600 dark:text-blue-400">Vieira</span>
          </Link>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    text-lg font-medium transition-colors hover:text-primary
                    ${isActive ? 'text-primary' : 'text-muted-foreground'}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}