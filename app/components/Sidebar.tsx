import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User, Briefcase, Award } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 w-[80px] h-[80px] pl-4 py=5">
      <Button className=" border-custom shadow-custom animate-lighting" variant="outline" asChild>
        <Link href="/">
          <User className="h-4 w-4" />
        </Link>
      </Button>
      <Button className=" border-custom shadow-custom animate-lighting" variant="outline" asChild>
        <Link href="/experience">
          <Briefcase className="h-4 w-4" />
        </Link>
      </Button>
      <Button className=" border-custom shadow-custom animate-lighting" variant="outline" asChild>
        <Link href="/skill">
          <Award className="h-4 w-4" />
        </Link>
      </Button>
    </aside>
  );
}
