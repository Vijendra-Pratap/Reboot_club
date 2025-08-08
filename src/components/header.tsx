import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-xl">AidLink</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Browse Cases
          </Link>
          <Link href="/request/new" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Submit Request
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/request/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Start a Request
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
