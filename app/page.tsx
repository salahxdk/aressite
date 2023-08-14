import Image from 'next/image'
import Header from "@/app/components/header"
import Hero from "@/app/components/hero"
import Feature from '@/app/components/feature';

export default function Home() {
    return(
      <main>
        <Hero />
          <Feature />
      </main>
    );
}

