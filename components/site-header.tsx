'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/audit', label: 'Audit' },
  { href: '/proof-pack', label: 'Proof Pack' },
  { href: '/bid-desk', label: 'Bid Desk' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/sample', label: 'Sample' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold uppercase tracking-wider">PacketDesk</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/portal"><Button variant="ghost" size="sm">Portal</Button></Link>
          <Link href="/login"><Button variant="ghost" size="sm">Log In</Button></Link>
          <Link href="/start"><Button size="sm">Get Started</Button></Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div className={cn('border-t border-border bg-background lg:hidden', open ? 'block' : 'hidden')}>
        <div className="container-wide flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2 border-t border-border pt-3">
            <Link href="/portal" className="flex-1"><Button variant="ghost" size="sm" className="w-full">Portal</Button></Link>
            <Link href="/start" className="flex-1"><Button size="sm" className="w-full">Get Started</Button></Link>
          </div>
        </div>
      </div>
    </header>
  );
}
