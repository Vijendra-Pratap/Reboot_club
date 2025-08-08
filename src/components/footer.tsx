import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-card border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">AidLink</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6 md:mb-0">
            <Link href="/" className="hover:text-foreground">Browse Cases</Link>
            <Link href="/request/new" className="hover:text-foreground">Submit Request</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
          </nav>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AidLink. All rights reserved.</p>
          <p className="mt-1">A platform for compassionate giving.</p>
        </div>
      </div>
    </footer>
  );
}
