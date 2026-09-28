import Link from 'next/link';
import { Shield } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-wide py-12">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold uppercase tracking-wider">PacketDesk</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Qualification audits, proof packs, and bid-invite response work.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/audit" className="underline">Audit</Link>
          <Link href="/proof-pack" className="underline">Proof Pack</Link>
          <Link href="/bid-desk" className="underline">Bid Desk</Link>
          <Link href="/contact" className="underline">Contact</Link>
          <Link href="/legal/terms" className="underline">Terms</Link>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Not affiliated with SpaceX, Tesla, xAI, NASA, LED, or the State of Louisiana.
        </p>
      </div>
    </footer>
  );
}
