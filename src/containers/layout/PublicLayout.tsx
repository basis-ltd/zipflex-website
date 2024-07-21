import { ReactNode } from 'react';
import Navbar from '../navigation/Navbar';

type PublicLayoutProps = {
  children: ReactNode;
};

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <main className="w-full flex flex-col gap-0 relative">
      <Navbar
        onCallToAction={(e) => {
          e.preventDefault();
          const element = document.getElementById('contact');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <section className="w-full absolute top-[12vh]">{children}</section>
    </main>
  );
};

export default PublicLayout;
