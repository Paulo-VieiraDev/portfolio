
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './mode-toggle';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/projects", label: "Projetos" },
  { href: "/contact", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <Link href="/" className="font-bold text-lg">
          Paulo
          <span className="text-blue-600 dark:text-blue-400">Vieira</span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  font-medium transition-colors hover:text-primary
                  ${isActive ? 'text-primary underline underline-offset-4' : 'text-muted-foreground'}
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}