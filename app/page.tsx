import Image from 'next/image';
import CenteredLayout from './components/CenterLayout';
import Profile from '../public/me.png';
import { Button } from '@/components/ui/button';
import { Mail, UserCircleIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center flex-wrap border p-10 rounded-xl shadow-lg mx-4 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto space-y-6 md:space-y-0 md:space-x-6 w-full">
        <div className="w-full md:w-auto md:min-w-[300px] flex-shrink-0">
          <Image src={Profile} alt="profile" width={300} className="w-full h-auto rounded-full" />
        </div>
        <div className="flex flex-col items-center md:items-start px-5 py-5 max-w-full md:max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">Hello, I'm Pyae Phyo Mon</h1>
          <p className="text-left mb-6 animate-fadeIn">
            A web developer with 4 years of experience specializing in React (JavaScript &
            TypeScript) developing dynamic web applications. Proficient in building data-driven
            solutions, IoT-integrated platforms, and scalable e-commerce projects. Familiar with
            OpenAI technologies and passionate about exploring and adopting emerging technologies
            for innovative solutions.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-end space-y-3 md:space-y-0 md:space-x-5 w-full">
        <Button className="shadow-custom border-custom animate-lighting" variant="outline" asChild>
          <Link href="https://www.linkedin.com/in/pyae-phyo-mon-95019a1b5/" target="_blank">
            <UserCircleIcon className="h-4 w-4 mr-2" />
            Linkedin
          </Link>
        </Button>
        <Button className="shadow-custom border-custom animate-lighting" variant="outline" asChild>
          <Link href="mailto:pyaephyomon114@gmail.com" target="_blank">
            <Mail className="h-4 w-4 mr-2" />
            E-mail
          </Link>
        </Button>
      </div>
    </div>
  );
}
