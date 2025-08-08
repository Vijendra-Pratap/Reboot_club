import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-card border-t mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
                 <div className="flex items-center space-x-2 mb-4">
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-bold font-headline text-2xl">AidLink</span>
                </div>
                <p className="text-muted-foreground text-sm">
                    AidLink is a compassionate crowdfunding platform dedicated to helping individuals and families cover critical medical expenses. We connect those in need with a global community of donors who want to make a difference.
                </p>
            </div>
             <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
                    <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground">Browse Cases</Link>
                        <Link href="/request/new" className="hover:text-foreground">Submit a Request</Link>
                        <Link href="#" className="hover:text-foreground">How It Works</Link>
                        <Link href="#" className="hover:text-foreground">About Us</Link>
                    </nav>
                </div>
                 <div>
                    <h3 className="font-headline font-semibold mb-4">Legal</h3>
                    <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Trust & Safety</Link>
                    </nav>
                </div>
                 <div>
                    <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
                    <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-foreground">Facebook</Link>
                        <Link href="#" className="hover:text-foreground">Twitter</Link>
                        <Link href="#" className="hover:text-foreground">Instagram</Link>
                    </nav>
                </div>
            </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AidLink. All rights reserved.</p>
          <p className="mt-2 font-semibold">Together, we can turn compassion into a cure.</p>
        </div>
      </div>
    </footer>
  );
}
