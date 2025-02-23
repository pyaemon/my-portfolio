import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export default async function Header() {
  return (
    <nav className="flex justify-between items-center rounded border-slate-100 px-4 py-2 my-4">
      <h1 className="font-bold text-md">
        <Link href="/">PPM</Link>
      </h1>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
