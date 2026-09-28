import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container-wide section-padding">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">PacketDesk</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            If a prime contractor pulled your file tonight, would they find a company they can buy from — or a website and a rumor?
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            PacketDesk packages the proof industrial buyers already ask for. We do not sell access to SpaceX. We make your existing company easier to qualify.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/start?product=audit">
              <Button size="lg">Start the $249 Audit <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
            <Link href="/start?product=triage">
              <Button size="lg" variant="outline">I have a bid invite</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">Qualification Audit</h2>
            <p className="mt-2 text-2xl font-bold">$249</p>
            <p className="mt-2 text-sm text-muted-foreground">10-category scorecard in 48 hours.</p>
            <Link href="/audit" className="mt-4 inline-block"><Button variant="outline">Learn more</Button></Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">Proof Pack</h2>
            <p className="mt-2 text-2xl font-bold">$995 / $1,495</p>
            <p className="mt-2 text-sm text-muted-foreground">Buyer-ready package and hosted proof page.</p>
            <Link href="/proof-pack" className="mt-4 inline-block"><Button variant="outline">Learn more</Button></Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">Bid Desk</h2>
            <p className="mt-2 text-2xl font-bold">$149–$1,750</p>
            <p className="mt-2 text-sm text-muted-foreground">Triage, map, or assemble a live invite.</p>
            <Link href="/bid-desk" className="mt-4 inline-block"><Button variant="outline">Learn more</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
