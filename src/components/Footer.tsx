import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gold/20 bg-parchment/50 dark:bg-ink py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-heading text-xl text-maroon dark:text-gold mb-1">প্রতিদানহীন.পাতা.বাংলা</p>
          <p className="text-sm text-ink/60 dark:text-parchment/60">যা বলা হয়নি, তা চিরকালের জন্য।</p>
        </div>
        <div className="flex gap-6 text-sm text-ink/70 dark:text-parchment/70">
          <Link href="/about" className="hover:text-maroon dark:hover:text-gold transition-colors">আমাদের সম্পর্কে</Link>
          <Link href="/privacy" className="hover:text-maroon dark:hover:text-gold transition-colors">গোপনীয়তা নীতি</Link>
          <Link href="/contact" className="hover:text-maroon dark:hover:text-gold transition-colors">যোগাযোগ</Link>
        </div>
        <div className="text-xs text-ink/50 dark:text-parchment/50">
          &copy; {new Date().getFullYear()} প্রতিদানহীন। সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
}
