import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gold/20 bg-parchment/80 backdrop-blur-md dark:bg-ink/80 transition-colors">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl text-maroon dark:text-gold flex items-center gap-2">
          <span>প্রতিদানহীন</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/explore" className="text-sm font-medium hover:text-maroon dark:hover:text-gold transition-colors">
            চিঠিগুলো
          </Link>
          <Link href="/compose">
            <Button variant="default" size="sm" className="font-medium">
              লিখুন
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
