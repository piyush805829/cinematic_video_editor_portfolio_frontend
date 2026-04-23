import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <Link
            href="/"
            className="text-lg font-bold text-white mb-2 block font-headline"
          >
            CINEMATIC.EDITS
          </Link>
          <div className="font-headline text-xs tracking-widest uppercase text-white/40">
            © {new Date().getFullYear()} THE CINEMATIC FRAME. ALL RIGHTS
            RESERVED.
          </div>
        </div>
        <div className="flex gap-8 md:gap-12">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="font-headline text-sm tracking-widest uppercase text-white/40 hover:text-primary transition-all hover:-translate-y-0.5"
          >
            Chat Now
          </a>
          <a
            href="https://instagram.com/cinematicedits"
            target="_blank"
            rel="noopener noreferrer"
            className="font-headline text-sm tracking-widest uppercase text-white/40 hover:text-primary transition-all hover:-translate-y-0.5"
          >
            Follow Me
          </a>
          <a
            href="mailto:hello@cinematicedits.com"
            className="font-headline text-sm tracking-widest uppercase text-white/40 hover:text-primary transition-all hover:-translate-y-0.5"
          >
            Send Email
          </a>
        </div>
      </div>
    </footer>
  );
}
